import * as stats from "@/repos/stats";

export async function GET() {
  const res = await stats.getStats();
  return Response.json(res, { status: 200 });
}
export async function POST(request,{params}) {
  const data = await request.json();
  alert("data");
  console.log(data);
  try {
    if (data.method == "sold") {
      await stats.soldPhone(data.quan);
    } else if (data.method == "newPhone") {
      await stats.addPhone(data.quan);
    }
    return Response.json(data,{status:200});
  } catch (r) {}
}
export async function PUT() {
    await stats.newGuest()
    return Response("ok",{stats:200})
}
export async function DELETE() {
  return new Response();
}
