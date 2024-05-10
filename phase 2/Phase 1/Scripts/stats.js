document.addEventListener("DOMContentLoaded", async()=>{
const stats=document.querySelector("#stats")
//stats.appendChild(await getStats())
getStats()
})



async function getStats(){
    
    const res=await fetch("http://localhost:3000/api")
    const data= await JSON.stringify(res)
    alert(await JSON.stringify(res))
    alert(data)
    
}