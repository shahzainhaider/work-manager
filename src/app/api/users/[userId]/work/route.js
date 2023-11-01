import { Work } from "@/model/work"
import { NextResponse } from "next/server";


export async function GET(request,{params}){
    const {userId} = params
    try {
        const works = await Work.find({
            userId
        });
        return NextResponse.json(works)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:'could"nt find work with this user',
            success:false
        })
    }
}