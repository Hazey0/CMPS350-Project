import { starter } from "@/repos/getter";
import { getStats } from "@/repos/stats";
import { redirect } from "next/navigation";

async function test(){
    
  await fetch('../api/stats',{
      method:"PUT",
     
  })
}
export default async function Home() {
  test()
  starter();
  const stats = await getStats();
  redirect("/Websites/main.html")

  return;
  
}
