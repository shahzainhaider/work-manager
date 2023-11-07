import { NextRequest, NextResponse } from "next/server"

export function middleware(request) {
    const authToken = request.cookies.get('authToken')?.value
    const notAcessPath = request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup';
    if(request.nextUrl.pathname==='/api/login'||request.nextUrl.pathname==='/api/users'){
        return
    }
    if (notAcessPath) {
        if (authToken) {
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    }else{
        if(!authToken){
            if(request.nextUrl.pathname.startstWith('/api')){
                return NextResponse.json({
                    message:'access denied'
                },{status:401})

            }
            return NextResponse.redirect(new URL('/login', request.url))
        }
     }
}
export const config = {
    matcher: ['/add-task','/signup','/login', '/show-task', '/api/:path*', '/profile/:path*', '/']
}