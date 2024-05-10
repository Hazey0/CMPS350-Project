import { addPhones, getPhones } from "@/repos/phones";

export async function GET() {
  const res = await getPhones();

  return Response.json(res,{status:200});
}
export async function POST(request, { params }) {
  const data = await request.json();
  try {
    const result = await addPhones(data);
    // if (!error) {}
    return Response.json(result);
  } catch (e) {}
}
export async function DELETE() {
  return new Response();
}
