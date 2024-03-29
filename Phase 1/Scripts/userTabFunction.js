const data=localStorage.getItem("users");
const users=JSON.parse(data);
const datau=localStorage.getItem("user");
const user=JSON.parse(datau);

export function showUserTab() {
    if (user !== null) {
        const userContainer = document.querySelector("#user");
        closeUserTab();
        const userTab = document.createElement("div");
        userTab.classList.add("userTab");

        const username = document.querySelector(".username")
        if (user.type == "Customer") {

            const trans = document.createElement("div");
            trans.classList.add("transDiv");
            
            const transaction = document.createElement("p");
            const transactionLogo = document.createElement("img");


            transaction.classList.add("transaction");
            transactionLogo.classList.add("transLogo");

            userTab.style.cursor = "pointer";
            userTab.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })

            transaction.style.cursor = "pointer";
            transaction.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })

            transactionLogo.style.cursor = "pointer";
            transactionLogo.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })
            transactionLogo.src = "../Media/Icons/icons8-letter-64.png";
            transaction.innerHTML = "Transactions";

            trans.appendChild(transaction);
            trans.appendChild(transactionLogo);
            userTab.appendChild(trans);

            username.addEventListener("click", (event) => {
                const u = document.querySelector(".username")
                u.style.display = "none";
                userContainer.appendChild(userTab);
            })

        }

        else if (user.type == "Seller") {
            document.querySelector("#balance").style.display="none"
            const sellDiv = document.createElement("div");
            sellDiv.classList.add("sellDiv");
            const saleDiv = document.createElement("div");
            saleDiv.classList.add("saleDiv");

            const sell = document.createElement("p");
            const sellLogo = document.createElement("img");
            sell.classList.add("sell");
            sellLogo.classList.add("sellLogo");

            const sale = document.createElement("p");
            const saleLogo = document.createElement("img");
            sale.classList.add("sale");
            saleLogo.classList.add("saleLogo");

            sell.style.cursor = "pointer";
            sellLogo.style.cursor = "pointer";
            sale.style.cursor = "pointer";
            saleLogo.style.cursor = "pointer";

            sell.addEventListener("click", (event) => {
                window.open("./sell.html", "_self");
            })
            sellLogo.addEventListener("click", (event) => {
                window.open("./sell.html", "_self");
            })
            sellDiv.addEventListener("click", () =>{
                window.open("./sell.html", "_self");
            })

            sale.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })
            saleLogo.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })
            saleDiv.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })


            sellLogo.src = "../Media/Icons/sell.png";
            saleLogo.src = "../Media/Icons/sale.png"
            sell.innerHTML = "Sell Item";
            sale.innerHTML = "My Sales";

            sellDiv.appendChild(sell);
            sellDiv.appendChild(sellLogo);
            userTab.appendChild(sellDiv);

            saleDiv.appendChild(sale);
            saleDiv.appendChild(saleLogo);
            userTab.appendChild(saleDiv);

            userContainer.addEventListener("click", (event) => {
                const u = document.querySelector(".username")
                u.style.display = "none";
                userContainer.appendChild(userTab);
            })
        }
        else if(user.type=="Admin"){
            document.querySelector("#balance").style.display="none"
            document.querySelector(".userImage").addEventListener("click",()=>{
                //rests users and phones
                localStorage.removeItem("phones")
                localStorage.removeItem("users")
                alert("Phones and users reloaded successfully")
            })
        }
        userTab.addEventListener("mouseleave", (event) => {
            const u = document.querySelector(".username")
            u.style.display = "";
            userContainer.querySelector(".userTab").remove();
        })
    }
}

function closeUserTab() {
    const closeIt = document.querySelector(".userTab");
    console.log(closeIt);
    if (closeIt != null) {
        closeIt.replaceChildren();
        closeIt.remove();
    }

}