import { redirect, type Actions, type RequestHandler } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load:LayoutServerLoad = ({cookies})=> {
    const adult = cookies.get("adult") ?? "false";
    console.log(adult)
    return{
        adult:adult === "true"
    }
}