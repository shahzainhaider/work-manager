import { NextResponse } from "next/server"

export function GET(request,{params}){
    const {userId,postId} =params
    console.log('userId ', userId)
    console.log('postId ', postId)

    return NextResponse.json({
        message:'successful'
    })

}