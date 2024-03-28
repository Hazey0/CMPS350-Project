import { logged } from "./LogFunction.js";
import {getCountries } from "./countries.js";
import { showUserTab } from "./userTabFunction.js";

document.addEventListener("DOMContentLoaded", async() => {
    const countries=await getCountries();
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const data = localStorage.getItem("phone");
    const phone = JSON.parse(data);
    console.log(phone)

    const phonesData = localStorage.getItem("phones");
    const phones = JSON.parse(phonesData);
    document.querySelector("#quantity").addEventListener("click",(event)=>{
        init();
    })
    function init(){
        const quan=document.querySelector("#quantity")
        quan.setAttribute("max",phone.quantity)
        const quantity= document.querySelector("#quantity").value
        const total=document.querySelector("#total")
        const subTotal=quantity*phone.price;
        total.innerHTML=subTotal

    }
    function setCountries(){
        const con=document.querySelector("#country");
        countries.forEach(element => {
            const c=document.createElement("option");
            c.value=element.name;
            c.innerHTML=element.name
            con.appendChild(c);
        });
        
    }
    function purchase() {
        const dat = new Date();
        const d=date.getFullYear() + " " + date.getMonth() + " " + date.getDate() + "  " + date.getHours() + " " + date.getMinutes()
        const transaction = {
            date:dat
        }
        const username=user;
        const address=document.querySelector("#name").value+document.querySelector("#address").value+
        document.querySelector("#city").value+document.querySelector("#state").value+
        document.querySelector("#zip").value+document.querySelector("#country").value;




    }



    







    logged();
    showUserTab();
    init();
    setCountries()
})