/** @type {import("@sveltejs/kit").RequestHandler} */

export async function GET({ platform }) {
    const result = await platform?.env.DB.prepare(
        "SELECT * FROM videos"
    ).run()
    return new Response(JSON.stringify(result?.results))
}
