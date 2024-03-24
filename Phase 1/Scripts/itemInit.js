document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const data = localStorage.getItem("item");
    const phone = JSON.parse(data);

    console.log(phone);
    function renderPhone() {
        const phoneBox = document.querySelector("#item");
        const top = document.createElement("div");
        const bottom = document.createElement("div");
        const quantitySelect = document.querySelector("#quantity");
        quantitySelect.max=phone.quantity;
        quantitySelect.addEventListener("click", (event) => {
            updatePrice();
        })

        quantitySelect
        phoneBox.classList.add("phone");
        ////elements of the phone///
        const select=document.querySelector("#quantity");
        const brand = document.createElement("p");
        const name = document.createElement("p");
        const year = document.createElement("p");
        const price = document.createElement("p");;
        const storage = document.createElement("p");
        const img = document.createElement('img');
        const buyButton = document.createElement("button");
        const seller = document.createElement("p")
        const total = document.createElement("p");
        const quantityv=document.createElement("p");
        ///////////////assing values to each element////////////////////
        quantityv.innerHTML="Quantity: "+phone.quantity;
        total.innerHTML = phone.price;
        total.classList.add("total");
        seller.innerHTML = "Seller: " + phone.seller;
        buyButton.innerHTML = "Buy for : "
        buyButton.addEventListener('click', (event) => {
            purchase();
        })
        brand.innerHTML = phone.brand;
        name.innerHTML = "Model: " + phone.name;
        year.innerHTML = "Year: " + phone.year;
        price.innerHTML = "price: " + phone.price;
        storage.innerHTML = "Storage: " + phone.storage;
        img.src = phone.img;

        ////////////// attaching elements///////////
        top.appendChild(brand);
        top.appendChild(img);
        bottom.appendChild(name);
        bottom.appendChild(year);
        bottom.appendChild(price);
        bottom.appendChild(storage);
        bottom.appendChild(seller);
        bottom.appendChild(buyButton);
        bottom.appendChild(total);
        bottom.appendChild(select);
        bottom.appendChild(quantityv);
        phoneBox.appendChild(top);
        phoneBox.appendChild(bottom);








    };
    function purchase() {
        const total = phone.price * document.querySelector("#quantity").value;
        console.log(total);
        if (user != null) {
            if (user.type == "Customer") {
                if (user.money >= total) {
                    //user.transactions.push(phone);
                    document.writeln("purschase successful")
                    console.log("debnuj")
                }
                else {

                    document.writeln("insuffienct balance");
                }
            }
            else {
                document.writeln("you are not a customer")
            }
        }
        else {
            document.writeln("you are not logged in");
        }
    }


    renderPhone();
    function updatePrice() {
        const quantity = document.querySelector("#quantity");
        const selected = quantity.value;
        const total = document.querySelector(".total");
        total.innerHTML = phone.price * selected;
    }


});