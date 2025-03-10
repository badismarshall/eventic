import prisma from "../../dbConnect";

export async function POST(req: Request) {

const comment = await req.json();

console.log(comment);
return new Response(JSON.stringify(comment), {
  headers: {
    "content-type": "application/json",
  },
});
}