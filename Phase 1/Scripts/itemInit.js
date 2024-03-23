document.addEventListener("DOMContentLoaded",()=>{
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
    brand.style.fontStyle="italic";
    //////////////Style////////////////
    phoneBox.style.display="flex";
    phoneBox.style.flexDirection="column";
    phoneBox.style.backgroundColor="grey";
    phoneBox.style.borderRadius="20px";
    phoneBox.style.width="200px";
    phoneBox.style.height="400px";
    phoneBox.style.padding="1.2%";
    phoneBox.style.marginLeft="30px";
    phoneBox.style.marginRight="30px";
    phoneBox.style.marginTop="30px";
    phoneBox.style.marginBottom="30px";
    img.style.width="200px";
    img.style.height="200px";
    ///////////////assing values to each element////////////////////
    brand.innerHTML=phone.brand;
    name.innerHTML="Model: "+phone.name;
    year.innerHTML="Year: "+phone.year;
    price.innerHTML="price: "+phone.price;
    storage.innerHTML="Storage: "+phone.storage;
    img.src=phone.img;
    img.addEventListener("click",(event)=>{
        localStorage.setItem("item",JSON.stringify(phone));
        open("./item.html");
    })
    ////////////// attaching elements///////////
    top.appendChild(brand);
    top.appendChild(img);
    bottom.appendChild(name);
    bottom.appendChild(year);
    bottom.appendChild(price);
    bottom.appendChild(storage);
    phoneBox.appendChild(top);
    phoneBox.appendChild(bottom);
    

    
   
        

    

};

renderPhone();



});