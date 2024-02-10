import { writeFile, readdir } from 'node:fs/promises'
export async function POST(request) {
  const res = await request.json() // res now contains body
  let files = await readdir('contactdata')
  await writeFile(`contactdata/${files.length + 1}.json`, JSON.stringify(res))
  return Response.json({ Success: "Data Saved" })
}