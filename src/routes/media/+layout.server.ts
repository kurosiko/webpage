import type { LayoutServerLoad } from "./$types";

export const load:LayoutServerLoad = ({cookies})=> {
    const adult = cookies.get("adult") ?? "false";
    return{
        adult:adult === "true"
    }
}