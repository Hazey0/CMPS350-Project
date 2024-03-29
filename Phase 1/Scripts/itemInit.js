import { showUserTab } from "./userTabFunction.js";
import { logged } from "./LogFunction.js";
document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const phonesd=localStorage.getItem("phones")
    const phones=JSON.parse(phonesd);
    const getPage = (a) => a.split("/").reduce((a, v) => v)
    const yourPath = getPage(window.location.pathname);
    const mainPath = "item.html";
    const prevData=localStorage.getItem("prevPath");
    const prevPath=JSON.parse(prevData);
    console.log("current :"+yourPath)
    console.log("previous:"+prevPath);

    


    //function init(){
        const data = localStorage.getItem("phone");
        const phone = JSON.parse(data);
        console.log(phone+"phone cur");
        renderPhone(phone)
    //}
    function renderPhone(phone) {
        const phoneBox = document.querySelector("#item");
        const top = document.createElement("div");
        const bottom = document.createElement("div");
        //const buttons=document.createElement("div")
        bottom.classList.add("phoneDetails")

        phoneBox.classList.add("phone");
       // buttons.classList.add("buttons")
        ////elements of the phone///
        
        const brand = document.createElement("p");
        brand.classList.add("brand");
        const name = document.createElement("p");
        const year = document.createElement("p");
        const price = document.createElement("p");
        const storage = document.createElement("p");
        const img = document.createElement('img');
        const buyButton = document.createElement("button");
        const removeButton=document.createElement("button");
        const editQuanButton=document.createElement("button");
        buyButton.classList.add("buyButton");
        editQuanButton.classList.add("editQuanButton")
        editQuanButton.addEventListener("click",()=>{
            editQuan();

        })
        removeButton.classList.add("buyButton");
        removeButton.addEventListener("click",(event)=>{
            const delet=phones.findIndex((p)=> p.model==phone.model && p.brand==phone.brand && p.storage==phone.storage &&  phone.seller==p.seller &&   phone.price==p.price);
            console.log(phones[delet])
            phones.splice(delet,1);
            localStorage.setItem("phones",JSON.stringify(phones))
            window.open("main.html","_self");
        })
        const seller = document.createElement("p")
        const total = document.createElement("p");
        const quantityv=document.createElement("p");
        quantityv.id="quantity"
        ///////////////assing values to each element////////////////////
        editQuanButton.innerHTML="Edit Quantity"
        quantityv.innerHTML="Quantity: "+phone.quantity;
        total.innerHTML = phone.price;
        total.classList.add("total");
        seller.innerHTML = "Seller: " + phone.seller;
        removeButton.innerHTML="Remove Phone"
        buyButton.innerHTML = "Buy Now!"
        buyButton.addEventListener('click', (event) => {
            purchase();
        })
        brand.innerHTML = phone.brand;
        name.innerHTML = "Model: " + phone.name;
        year.innerHTML = "Year: " + phone.year;
        price.innerHTML = "Price: " + phone.price;
        storage.innerHTML = "Storage: " + phone.storage;
        img.src = phone.img;

        ////////////// attaching elements///////////
        top.appendChild(brand);
        top.appendChild(img);
        bottom.appendChild(name);
        bottom.appendChild(year);
        bottom.appendChild(price);
        bottom.appendChild(storage);
        bottom.appendChild(quantityv);

        bottom.appendChild(seller);
        if(phone.quantity!=0){
        if (user != null) {
            if(user.type=="Seller" || user.type=="admin"){
                if(user.username==phone.seller || user.type=="admin"){
                bottom.appendChild(removeButton)
                bottom.appendChild(editQuanButton)}
                else{
                    bottom.appendChild(buyButton)
                  
                }
            }
            else{
            bottom.appendChild(buyButton);}
        }
        else{
            bottom.appendChild(buyButton);
        }}
        else{
            buyButton.innerHTML="Out of Stock"
        }
        phoneBox.appendChild(top);
        phoneBox.appendChild(bottom);
        //phoneBox.append(buttons);








    };
    function purchase() {
     
        if (user != null) {
            if (user.type == "Customer") {
                localStorage.setItem("phone",JSON.stringify(phone))
                    //user.transactions.push(phone);
                    window.open("./purchase.html", "_self");
                
            }
            else {
                window.alert("you are not a customer")
            }
        }
        else {
            window.alert("you are not logged in");
            setTimeout(()=>{
                window.open("./login.html","_self")
            },1000)
        }
    }
    function editQuan(){
        const select=document.createElement("input");
        const sub=document.createElement("button");
        document.querySelector(".editQuanButton").replaceWith(select,sub);

        sub.innerHTML="Submit"
        select.setAttribute("type","number")
        select.setAttribute("min",1);
        select.setAttribute("setp",1)
        select.setAttribute("value",1)

        sub.addEventListener("click",()=>{
            phone.quantity="Quantity"+select.value;
            document.querySelector("#quantity").innerHTML="Quantity: "+select.value;
            const editQuanButton=document.createElement("button");
            editQuanButton.classList.add("editQuanButton")
            editQuanButton.innerHTML="Edit Quantity"
            select.remove()
            sub.remove()
            updatePhone(select.value)
            document.querySelector(".phoneDetails").appendChild(editQuanButton)
            editQuanButton.addEventListener("click",()=>{
                editQuan();
    
            })

        })

    }

    function updatePhone(v){
        const index=phones.findIndex((p)=> p.model==phone.model && p.brand==phone.brand && p.storage==phone.storage &&  phone.seller==p.seller &&   phone.price==p.price);
        phones[index].quantity=v;
        localStorage.setItem("phones",JSON.stringify(phones))
    }

    logged();
    showUserTab();


});