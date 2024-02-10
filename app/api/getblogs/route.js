import { readFile } from "node:fs/promises";

// How to use this API  = "http://localhost:3000/api/getblogs?query=React"

export async function GET(request) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('query')
    const datafile = await readFile(`blogdata/${query}.json`)
    const response = await JSON.parse(datafile)
    return Response.json(response)
}