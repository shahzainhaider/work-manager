import { connectDb } from "@/helper/db"
import { Work } from "@/model/work"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server"

// connectDb()



export async function GET(request) {
    let work = []
    work = await Work.find()
    return NextResponse.json(work)
}

export async function POST(request) {
    const { title, content,userId,status} = await request.json()
    const authToken = request.cookies.get('authToken')?.value
   const data = jwt.verify(authToken,process.env.JWT_TOKEN)
    const work = new Work({
        title,
        content,
        status,
        userId:data._id
    })
    try {
        await work.save()
        return NextResponse.json(work)

    } catch (error) {
        // console.log(error)
        return NextResponse.json({
            status : '',
            message: 'internal server error'
        },{status:500})

    }
}