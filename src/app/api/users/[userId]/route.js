import { connectDb } from "@/helper/db"
import { User } from "@/model/user"
import { NextResponse } from "next/server"


export async function DELETE(request, { params }) {
    const { userId } = params
    try {
        await User.deleteOne({
            _id: userId
        })

        return NextResponse.json({
            message: 'User deleted!',
            success: true
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'internal server error'
        })
    }
}

//GET single user
export async function GET(request, { params }) {
    const { userId } = params
    const user = await User.findById(userId).select('-password')
    return NextResponse.json(user)
}

//Update user
export async function PUT(request, { params }) {
    connectDb()
    const { userId } = params
    const { name, password, about, profileURL } = await request.json()
    try {
        const user = await User.updateOne({ _id: userId }, { name, password, about, profileURL });
        const updatedUser = await User.findById(userId).select('-password')
        return NextResponse.json(updatedUser)

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'internal server error'
        })

    }

}