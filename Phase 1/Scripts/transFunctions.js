
import { renderPhone } from "./renderPhones.js";
const userData = localStorage.getItem('user'); // Assuming user data is stored under 'user' key
const user = JSON.parse(userData);
export function loadSeller(){
const listedPhonesButton = document.querySelector("#listedPhonesButton");
listedPhonesButton.addEventListener("click", (event) => {
    document.querySelector("#listedPhonesContainer").replaceChildren()
    document.querySelector("#salesContainer").replaceChildren();
    // Fetch and parse phones data
    const phones = JSON.parse(localStorage.getItem('phones') || '[]');
    // Filter phones based on logged-in user's username
    const userPhones = phones.filter((phone) => phone.seller == user.username);
    console.log(userPhones);

    // Display phones
    const container = document.querySelector('#listedPhonesContainer'); // Ensure you have a div with this id in your HTML
    userPhones.forEach(phone => {
        const phoneElement = document.createElement('div');
        phoneElement.classList.add("eachPhone");
        phoneElement.innerHTML = `
    <div class="sellerItem">
    <h4>${phone.brand} ${phone.name}</h4>
    <img src="${phone.img}" alt="${phone.name}" class="phoneImg">
    <p>Year: ${phone.year}</p>
    <p>Storage: ${phone.storage}GB</p>
    <p>Quantity Left: ${phone.quantity}</p>
    <p class="price"><strong>${phone.price}</strong>QR</p>
    </div>
    `;
        container.appendChild(phoneElement);
    });

    if (userPhones.length === 0) {
        container.innerHTML = '<p>No phones found for this seller.</p>';
    }

})
const salesButton = document.querySelector("#salesButton");
salesButton.addEventListener("click", (event) => {
    const con =document.querySelector("#listedPhonesContainer")
    if(con!=null){
        con.replaceChildren();
    }
    const userTransactions = user.transactions;
    const salesContainer = document.querySelector("#salesContainer")
    userTransactions.forEach((t) => salesContainer.appendChild(getTransaction(t)));

})
}


    export function loadCustomer(){
        const userTransactions = user.transactions;
        const salesContainer = document.querySelector("#salesContainer")
        userTransactions.forEach((t) => salesContainer.appendChild(getTransaction(t)));
    }



 function getTransaction(tran) {
    const adList = getAddress(tran.address);
    const top = document.createElement("div");
    const bottm = document.createElement("div");
    const phoneBox = renderPhone(tran.phone);
    const address = document.createElement("p")
    const zip = document.createElement("p")
    const name = document.createElement("p")
    const city = document.createElement("p")
    const country = document.createElement("p")
    const state = document.createElement("p")
    const quantity = document.createElement("p")
    const total = document.createElement("p");
    const date = document.createElement("p");
    const buyer = document.createElement("p");

    name.classList.add("name")
    city.classList.add("city")
    country.classList.add("country")
    state.classList.add("state")
    address.classList.add("address")
    quantity.classList.add("quantity")
    total.classList.add("total")
    date.classList.add("date")
    buyer.classList.add("buyer")

    name.innerHTML=adList[0]
    city.innerHTML=adList[2]
    country.innerHTML=adList[5]
    state.innerHTML=adList[3]
    zip.innerHTML=adList[4]
    address.innerHTML = adList[1]
    quantity.innerHTML = tran.quantity
    total.innerHTML = tran.total
    date.innerHTML = tran.date
    buyer.innerHTML = tran.buyer;
    quantity.innerHTML = tran.quantity;
    address.innerHTML = getAddress(tran.address);
    top.appendChild(phoneBox)
    top.appendChild(buyer)
    top.appendChild(date)
    bottm.appendChild(name           )
    bottm.appendChild(country           )
    bottm.appendChild(city           )
    bottm.appendChild(state           )
    bottm.appendChild(address           )
    bottm.appendChild(zip           )
    bottm.appendChild( quantity          )
    bottm.appendChild( total          )
    const tarnsBox=document.createElement("div");
    tarnsBox.classList.add("transBox")
    tarnsBox.appendChild(top)
    tarnsBox.appendChild(bottm)
    return tarnsBox
}
function getAddress(ad) {
    return ad.split(" ")
}