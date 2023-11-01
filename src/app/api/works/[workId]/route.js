import { Work } from "@/model/work"
import { NextResponse } from "next/server"

//get single work
export async function GET(request,{params}){
    const {workId} = params

    try {
        const work = await Work.findById(workId)
        return NextResponse.json(work)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'internal server error'
        })
    }
}

//delete work
export async function DELETE(request,{params}){
    const {workId} = params

    try {
         await Work.deleteOne({
            _id:workId
        })
        return NextResponse.json({
            message:'work deleted',
            success:true
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'internal server error'
        })
    }
}

//update work
export async function PUT(request,{params}){
    const {workId} = params
    const {title,content,status} = await request.json()

    try {
         await Work.updateOne({_id:workId},{title,content,status});
        const work = await Work.findById(workId)
        return NextResponse.json(work)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'internal server error'
        })
    }
}