//import { logged } from "@/public/Scripts/LogFunction";
import { renderPhones } from "@/public/Scripts/renderPhones";
import { starter } from "@/repos/getter";
import { getStats } from "@/repos/stats";
import { redirect } from "next/navigation";


export default async function Home() {
  
  await starter();
  redirect("/Websites/main.html")
  //logged();
  //renderFunctions();
  //showUserTab()
  //renderSort();
  //renderFeaturedPhones();
 

  
}
