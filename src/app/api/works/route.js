import { connectDb } from "@/helper/db"
import { Work } from "@/model/work"
import { NextResponse } from "next/server"

// connectDb()



export async function GET(request) {
    let work = []
    work = await Work.find()
    return NextResponse.json(work)
}

export async function POST(request) {
    const { title, content,userId} = await request.json()

    const work = new Work({
        title,
        content,
        userId
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