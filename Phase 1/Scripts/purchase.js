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
        const quantity= document.querySelector("#quantity").value
        const total=document.querySelector("#total")
        const subTotal=quantity*phone.price;
        total.innerHTML=subTotal
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
        const quantity= document.querySelector("#quantity").value
        const dat = new Date();
        const d=dat.getFullYear() + "/" + dat.getMonth() + "/" + dat.getDate() + "  " + dat.getHours() + "h :" + dat.getMinutes()+"m"
        const transaction = {
            date:d
        }
        const username=user.username;
        const address=document.querySelector("#name").value+" "+document.querySelector("#address").value+" "+
        document.querySelector("#city").value+" "+document.querySelector("#state").value+
        document.querySelector("#zip").value+" "+document.querySelector("#country").value;
        const seller= phone.seller;
        const total=getTotal();
        editQuantity();
        const purchasedPhone=phone;
        transaction.phone=purchasedPhone
     
        transaction.address=address;
        transaction.buyer=username;
        transaction.total=total;
        transaction.seller=seller;
        transaction.quantity=document.querySelector("#quantity").value
        console.log(transaction)
        user.transactions.push(transaction)
        editMoney();
        
        updateUser(transaction,seller)
        updateUser(transaction,user.username)
        localStorage.removeItem("phones")
        localStorage.setItem("phones",JSON.stringify(phones))
        console.log(users[0])
        console.log(users[1])
        console.log(users[2])
        console.log(users[3])
        
        alert("Phone purchased Successfully")
        window.open("transactions.html","_self")
        logged();
       




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
        const newQ=phone.quantity-quan;
        if(newQ<1){
            const delet=phones.findIndex((p)=> p.model==phone.model && p.brand==phone.brand && p.storage==phone.storage &&  phone.seller==p.seller &&   phone.price==p.price);
            console.log(phones[delet])
            phones.splice(delet,1);
            
            
        }
        else{
            const getPhone=phones.findIndex((p)=> p.model==phone.model && p.brand==phone.brand && p.storage==phone.storage &&  phone.seller==p.seller &&   phone.price==p.price);
            console.log(phones[getPhone]);
                phones[getPhone].quantity=newQ;
                phone.quantity=newQ;

        }

        
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
        //const t=Number(getTotal());
        const newMoney= user.money-getTotal()
        let mon=newMoney;
        if(newMoney<=0){
             mon=0;
        }
        const f=users.findIndex((u)=> user.username=u.username );
        localStorage.setItem("users",JSON.stringify(users));
        users[f].money=mon
        user.money=mon;
        console.log(users)
        localStorage.removeItem("users");
       
        
        
        localStorage.setItem("users",JSON.stringify(users))
        
        localStorage.setItem("user",JSON.stringify(user))
        //alert(" done")

        
    }

    function updateUser(tran,usr){
        const f=users.findIndex((u)=> usr==u.username );
       const t=users[f].transactions
       t.push(tran);
       users[f].transactions=t;
        localStorage.setItem("users",JSON.stringify(users))
    }


    
    logged();
    showUserTab();
    init();
    setCountries()
    loadPhone();
})