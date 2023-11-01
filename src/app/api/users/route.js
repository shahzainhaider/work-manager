import { User } from "@/model/user";
import { NextResponse } from "next/server";


export async function GET(request){
    let users = [];
    try {
        users = await User.find().select('-password')
        return NextResponse.json(users)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'internal server error',
            success:false
        })
    }
}
export async function POST(request){

    const {name,email,password,about,profileURL} = await request.json()
    const user = new User({
        name,
        email,
        password,
        about,
        profileURL
    })

    try {
        const createdUser = await user.save()
        const response = NextResponse.json(user)
        return response
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'internal server error'
        },{status:500})
    }
}