
import { mainPath, yourPath } from "./paths.js";
import { resetSearch } from "./searchFunction.js";


const phonesd = localStorage.getItem("phones")
const phones = JSON.parse(phonesd);
//console.log(featuredPhones)

export function renderPhone(phone) {
    const wholeLink = document.createElement("a");
    wholeLink.classList.add("phoneLink");
    wholeLink.href = "./item.html";
    const phoneBox = document.createElement("div");
    phoneBox.classList.add("phone");
    const top = document.createElement("div");
    top.classList.add("top");
    const bottom = document.createElement("div");
    bottom.classList.add("bottom")
    ////elements of the phone///
    const brand = document.createElement("p");
    const name = document.createElement("p");
    name.classList.add("name");
    const year = document.createElement("p");
    year.classList.add("year");
    const price = document.createElement("p");
    price.classList.add("price");
    const storage = document.createElement("p");
    storage.classList.add("storage");
    const img = document.createElement('img');
    const itemLink = document.createElement("a");
    /////adding ids to style them in css////
    brand.classList.add("phoneBrand");
    img.classList.add("PhoneImage");
    bottom.classList.add("phoneDetails");
    img.classList.add("phoneImage");
    name.classList.add("details");
    year.classList.add("details");
    price.classList.add("details");
    storage.classList.add("details");

    ///////////////assing values to each element////////////////////

    brand.innerHTML = phone.brand;
    name.innerHTML = "Model: " + phone.name;
    year.innerHTML = "Year: " + phone.year;
    price.innerHTML = `<strong>${phone.price}</strong>` + "QR";
    storage.innerHTML = "Storage: " + phone.storage + "GB";
    img.src = phone.img;
    wholeLink.addEventListener("click", (event) => {
        console.log(phone);
        localStorage.setItem("phone", JSON.stringify(phone));
        localStorage.setItem("prevPath", (JSON.stringify(mainPath)))
        resetSearch()
        window.open("./item.html", "_self");

    })

    ////////////// attaching elements///////////
    itemLink.appendChild(img);
    top.appendChild(itemLink);
    top.appendChild(brand);
    top.appendChild(itemLink);
    bottom.appendChild(name);
    bottom.appendChild(year);
    bottom.appendChild(storage);
    phoneBox.appendChild(top);
    phoneBox.appendChild(bottom);
    phoneBox.appendChild(price);
    wholeLink.appendChild(phoneBox);

    return wholeLink;





}

export function renderFeaturedPhones() {

    const featuredData = localStorage.getItem("featuredPhones")
    let featuredPhones = JSON.parse(featuredData);



    if (featuredPhones != null && featuredPhones.length>=1 && featuredPhones!=undefined) {
      
        featuredPhones = featuredPhones.map((s) => checkPhone(s) ? s : "")
        featuredPhones = featuredPhones.filter((s) => s != null)
        featuredPhones=featuredPhones.filter((s)=>checkPhone(s))
        if (mainPath == yourPath && featuredPhones.length >= 1) {
            const container = document.querySelector("#featuredPhones");
            container.replaceChildren();
            console.log(featuredPhones)
            if (featuredPhones.length >= 1 && featuredPhones[0] != null) {

                featuredPhones.forEach((id) => container.appendChild(renderFeaturedPhone(getPhone(id))));
                


            }
        }
        localStorage.setItem("featuredPhones", JSON.stringify(featuredPhones))
    }
    else {
       
        const container = document.querySelector("#featuredPhones");
        featuredPhones = [];
        const rand = Math.floor(Math.random() * phones.length)
        const randPhone = phones[rand];
        featuredPhones.push(randPhone.id)
        localStorage.setItem("featuredPhones", JSON.stringify(featuredPhones))
         container.appendChild(renderFeaturedPhone(getPhone(randPhone.id)));
        

    }

}



export function addFeatured(id) {
    const featuredData = localStorage.getItem("featuredPhones")
    let featuredPhones = JSON.parse(featuredData);
    
    featuredPhones.push(id);
    localStorage.setItem("featuredPhones", JSON.stringify(featuredPhones))


}
function renderFeaturedPhone(phone) {
    const wholeLink = document.createElement("a");
    wholeLink.classList.add("phoneLink");
    wholeLink.href = "./item.html";
    const phoneBox = document.createElement("div");
    const top = document.createElement("div");
    const bottom = document.createElement("div");

    phoneBox.classList.add("featuredPhone");
    ////elements of the phone///
    const itemLink = document.createElement("a");
    const brand = document.createElement("p");
    const name = document.createElement("p");
    const year = document.createElement("p");
    const price = document.createElement("p");
    price.classList.add("price");
    const storage = document.createElement("p");
    const img = document.createElement('img');
    /////adding ids to style them in css////
    brand.classList.add("phoneBrand");
    img.classList.add("featuredPhoneImage");
    bottom.classList.add("phoneDetails");
    itemLink.href = "./item.html";
    ///////////////assing values to each element////////////////////
    brand.innerHTML = phone.brand;
    name.innerHTML = "Model: " + phone.name;
    year.innerHTML = "Year: " + phone.year;
    price.innerHTML = `<strong>${phone.price}</strong>` + "QR";
    storage.innerHTML = "Storage: " + phone.storage + "GB";
    img.src = phone.img;
    itemLink.addEventListener("click", (event) => {
        resetSearch()
        
        localStorage.setItem("phone", JSON.stringify(phone));

    });
    wholeLink.addEventListener("click", (event) => {
        resetSearch()
        localStorage.setItem("phone", JSON.stringify(phone));

    });
    ///////// attaching elements///////////
    itemLink.appendChild(img);
    top.appendChild(itemLink);
    top.appendChild(brand);
    itemLink.appendChild(img);
    bottom.appendChild(name);
    bottom.appendChild(year);
    bottom.appendChild(storage);
    bottom.appendChild(price);
    phoneBox.appendChild(top);
    phoneBox.appendChild(bottom);
    wholeLink.appendChild(phoneBox);

    return wholeLink;

}
function checkStock(ph) {

    const stock = phones.findIndex((p) => p.id == ph.id);
    if (stock != -1) {
        return true
    }
    else {

        return false;
    }

}
function checkPhone(id) {


    const stock = phones.findIndex((p) => p.id == id && p.quantity > 0);
    if (stock != -1) {
        return true
    }
    else {
        return false;
    }

}
function getPhone(id) {

    return phones.reduce((a, v) => v.id == id ? v : a, false)
}
export function checkFeatured(ph){
    const featuredData = localStorage.getItem("featuredPhones")
    let featuredPhones = JSON.parse(featuredData);
    const e=featuredPhones.findIndex((r)=>r==ph.id);
    if(e==-1){
        return false
    }
    else{
        return true
    }

}
export function removeFromFeatured(ph){
    const featuredData = localStorage.getItem("featuredPhones")
    let featuredPhones = JSON.parse(featuredData);
    featuredPhones=featuredPhones.filter((phone)=> phone!=ph.id)
    localStorage.setItem("featuredPhones",JSON.stringify(featuredPhones))
    renderFeaturedPhones();
    window.open("main.html","_self")
}