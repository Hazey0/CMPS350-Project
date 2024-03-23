document.addEventListener("DOMContentLoaded",()=>{
    const userData=localStorage.getItem("user");
const user=JSON.parse(userData);
const data=localStorage.getItem("item");
const phone=JSON.parse(data);

console.log(phone);
function renderPhone(){
    const phoneBox=document.querySelector("#item");
    const top=document.createElement("div");
    const bottom=document.createElement("div");

    phoneBox.classList.add("phone");
    ////elements of the phone///
    const brand = document.createElement("p");
    const name = document.createElement("p");
    const year= document.createElement("p");
    const price= document.createElement("p");;
    const storage= document.createElement("p");
    const img=document.createElement('img');
    const buyButton=document.createElement("button");
    ///////////////assing values to each element////////////////////
    buyButton.innerHTML="Buy for : "+phone.price;
    buyButton.addEventListener('click',(event)=>{
        purchase();
    })
    brand.innerHTML=phone.brand;
    name.innerHTML="Model: "+phone.name;
    year.innerHTML="Year: "+phone.year;
    price.innerHTML="price: "+phone.price;
    storage.innerHTML="Storage: "+phone.storage;
    img.src=phone.img;
 
    ////////////// attaching elements///////////
    top.appendChild(brand);
    top.appendChild(img);
    bottom.appendChild(name);
    bottom.appendChild(year);
    bottom.appendChild(price);
    bottom.appendChild(storage);
    bottom.appendChild(buyButton);
    phoneBox.appendChild(top);
    phoneBox.appendChild(bottom);
    
   function purchase(){
    console.log(user);
    if(user!=null){
       if(user.type=="Customer"){
        if(user.money>=phone.price){
            document.writeln("purschase successful")
            console.log("debnuj")
        }
        else{
            
            document.writeln("insuffienct balance");
        }}
        else{
            document.writeln("you are not a customer")
        }
    }
    else{
        document.writeln("you are not logged in");
    }
   }
    
   
        

    

};

renderPhone();



});