import { readdir, readFile } from "node:fs/promises";

// How to use a endPoint 
// http://localhost:3000/api/blogs

export async function GET(Request) {
    const datafolder = await readdir('blogdata')
    let allfiles = []
    for (let i = 0; i < datafolder.length; i++) {
        let datafiles = await readFile(`blogdata/${datafolder[i]}`)
        let response = await JSON.parse(datafiles)
        allfiles.push(response)
    }
    return Response.json(allfiles)
}