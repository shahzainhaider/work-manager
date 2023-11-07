import { User } from "@/model/user"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { connectDb } from '@/helper/db'
connectDb()

export async function POST(request){
    const {email,password} = await request.json()
    try {
        // getting user
        const user = await User.findOne({email:email})
        if(!user){
            throw new Error('Invalid Email')
        }

        // matching passowrd
        const matched = bcrypt.compareSync(password,user.password)
        if(!matched){
            throw new Error('Invalid Password')
        }

        //create token
        const token = jwt.sign({_id:user._id,name:user.name},process.env.JWT_TOKEN)

        //stting cookies
         const response = NextResponse.json({
            message:'Login Successfully',
            success:true,
            user
        })
        
        response.cookies.set('authToken',token,{
            expiresIn:'1d',
            httpOnly:true
        })

        return response

    } catch (error) {
        return NextResponse.json({
            message:error.message
        },{status:404})
        
    }
}