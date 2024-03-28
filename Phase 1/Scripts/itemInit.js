import { showUserTab } from "./userTabFunction.js";
import { logged } from "./LogFunction.js";
document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);


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
        bottom.classList.add("phoneDetails")

        phoneBox.classList.add("phone");
        ////elements of the phone///
        
        const brand = document.createElement("p");
        brand.classList.add("brand");
        const name = document.createElement("p");
        const year = document.createElement("p");
        const price = document.createElement("p");
        const storage = document.createElement("p");
        const img = document.createElement('img');
        const buyButton = document.createElement("button");
        buyButton.classList.add("buyButton");
        const seller = document.createElement("p")
        const total = document.createElement("p");
        const quantityv=document.createElement("p");
        ///////////////assing values to each element////////////////////
        quantityv.innerHTML="Quantity: "+phone.quantity;
        total.innerHTML = phone.price;
        total.classList.add("total");
        seller.innerHTML = "Seller: " + phone.seller;
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
        bottom.appendChild(buyButton);
        phoneBox.appendChild(top);
        phoneBox.appendChild(bottom);








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


    //renderPhone();


    //init()
    logged();
    showUserTab();


});