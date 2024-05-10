import { starter } from "@/repos/getter";
import { getStats } from "@/repos/stats";
import { redirect } from "next/navigation";


export default async function Home() {
  
  await starter();

  redirect("/Websites/main.html")


  
}
