import { redirect, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = ({ request, cookies }) => {
    cookies.set("adult","true",{
        path:"/",
        maxAge:60*60*24*7,
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })
    redirect(301,"/media")
    return new Response("ok",{status:200})
}