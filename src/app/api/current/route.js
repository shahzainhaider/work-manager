import { connectDb } from "@/helper/db"
import { User } from "@/model/user"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

connectDb()

export async function GET(request){
    try {
        const authToken = request.cookies.get('authToken')?.value
   const data = jwt.verify(authToken,process.env.JWT_TOKEN)
   const user = await User.findById(data._id).select('-password')
   return NextResponse.json(user)

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'user not found'
        },{status:404})
        
    }
}