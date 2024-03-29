import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
export async function starter(){
//used to reset phones
//localStorage.removeItem("phones");

const data=localStorage.getItem("phones");
const phones=JSON.parse(data);
//console.log(phones);
if(phones==null){
fetch('../Scripts/storage/phones.json').then((res)=> res.json()).then((json)=>{
    localStorage.setItem("phones",JSON.stringify(json));
    assignID(json);
 
 
 })
}


const dataf=localStorage.getItem("featuredPhones");
const featuredPhones=JSON.parse(dataf);
console.log(featuredPhones);
//localStorage.removeItem("featuredPhones")
if(featuredPhones==null){
fetch('../Scripts/storage/featuredPhones.json').then((res)=> res.json()).then((json)=>{
    localStorage.setItem("featuredPhones",JSON.stringify(json));
 
 
 })
}
 //used to reset users
//localStorage.removeItem("users");
 
 const datau=localStorage.getItem("users");
 const users=JSON.parse(datau);
 //console.log(users);
if(users==null){
fetch('../Scripts/storage/users.json').then((res)=> res.json()).then((json)=>{
    localStorage.setItem("users",JSON.stringify(json));
 
 
 })

}
}
starter();

function assignID(ph){
    ph.map((e)=>e.id=nanoid(8))
   
    localStorage.setItem("phones",JSON.stringify(ph))
    
    

}