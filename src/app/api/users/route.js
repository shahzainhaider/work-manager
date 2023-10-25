import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";


export function GET(request){
    const users = [
        {
            name:'shahzain',
            age:20
        },
        {
            name:'bilal',
            age:20
        },
        {
            name:'kumail',
            age:20
        }
    ];

    return NextResponse.json({users},{status:220,statusText:'hello'})
}

export function POST (request){
    const {name,email,password,about,profileURl} = request.json()

}