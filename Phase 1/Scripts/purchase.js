import { logged } from "./LogFunction.js";
import {getCountries } from "./countries.js";
import { renderPhone } from "./renderPhones.js";
import { showUserTab } from "./userTabFunction.js";

document.addEventListener("DOMContentLoaded", async() => {
    const countries=await getCountries();
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const data = localStorage.getItem("phone");
    const phone = JSON.parse(data);
    const datau = localStorage.getItem("users");
    const users = JSON.parse(datau)
    console.log(phone)

    const phonesData = localStorage.getItem("phones");
    const phones = JSON.parse(phonesData);
    document.querySelector("#quantity").addEventListener("click",(event)=>{
        init();
    })
    phones
    function init(){
        const quan=document.querySelector("#quantity")
        quan.setAttribute("max",phone.quantity)
        const quantity= document.querySelector("#quantity").value
        const total=document.querySelector("#total")
        const subTotal=quantity*phone.price;
        total.innerHTML=subTotal
        document.querySelector("#submit").addEventListener("click",(event)=>{
            if(checkInputs()){
            if(user.money>=getTotal()){
                alert("purchase")
                purchase();
            }
            else{
                alert("not enough money")
            }}
        });

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
        const d=dat.getFullYear() + " " + dat.getMonth() + " " + dat.getDate() + "  " + dat.getHours() + " " + dat.getMinutes()
        const transaction = {
            date:d
        }
        const username=user.username;
        const address=document.querySelector("#name").value+" "+document.querySelector("#address").value+" "+
        document.querySelector("#city").value+" "+document.querySelector("#state").value+
        document.querySelector("#zip").value+" "+document.querySelector("#country").value;
        const seller= phone.seller;
        const total=getTotal();
        const purchasedPhone=phone;
        transaction.address=address;
        transaction.seller=phone.seller;
        transaction.user=username;
        console.log(transaction)
        editQuantity();
        alert("Phone purchase Successfully")
        window.open("main.html","_self")




    }

    function getTotal(){
        const quantity= document.querySelector("#quantity").value
        const total=document.querySelector("#total")
        const subTotal=quantity*phone.price;
        return subTotal;



    }
    function loadPhone(){
        const phonie=renderPhone(phone);
        const phoneDetails=document.querySelector("#phoneDetails")
        phoneDetails.appendChild(phonie)
    }
    function editQuantity(){
        const quan= document.querySelector("#quantity").value
        const newQ=phone.quantity-quan;;
        if(newQ<1){
            const delet=phones.findIndex(phone);
            phones.splice(delet,1);
            
            
        }
        else{
            phones.map((e)=>e==phone ? phone.quantity=newQ: false )
        }
        localStorage.setItem("phones",JSON.stringify(phones))
        
    }
    function checkInputs(){

        const name=document.querySelector("#name").value+" "+document.querySelector("#address").value;
        const address=document.querySelector("#address").value
        const city=document.querySelector("#city").value
        const state=document.querySelector("#state").value
        const zip=document.querySelector("#zip").value
        const country=document.querySelector("#country").value;
        if(name!="" && address!="" && city!="" && state!="" && zip!="" && country!=""){
            return true
        }
        else{
           alert("field missing")
           return false
        }


    }
    function editMoney(){
        const t=getTotal();
        const newMoney= user.money-getTotal
        let mon=newMoney;
        if(newMoney<=0){
             mon=0;
        }
        users.find((u)=> u==user? u:false ).map((f)=> f.money=mon)
        localStorage.setItem("users",JSON.stringify(users));

        
    }






    
    logged();
    showUserTab();
    init();
    setCountries()
    loadPhone();
})