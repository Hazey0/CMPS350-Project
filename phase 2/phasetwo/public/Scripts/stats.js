document.addEventListener("DOMContentLoaded", async()=>{
const stats=document.querySelector("#stats")
//stats.appendChild(await getStats())
getStats()
})



async function getStats(){
    const data=[]
    const res=await fetch("http://localhost:3000").
    then((d)=>d.json()).then((e)=>{console.log(e);})
  
   
    
}