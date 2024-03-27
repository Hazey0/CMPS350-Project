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

        if (user.type == "Customer") {

            const transaction = document.createElement("p");
            const transactionLogo = document.createElement("img");


            transaction.classList.add("transaction");
            transactionLogo.classList.add("transactionLogo");



            transaction.style.cursor = "pointer";
            transaction.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })
            transactionLogo.style.cursor = "pointer";
            transactionLogo.addEventListener("click", (event) => {
                window.open("./transactions.html", "_self");
            })
            transactionLogo.src = "../Media/Icons/transLogo.svg";
            transaction.innerHTML = "Transaction History";

            userTab.appendChild(transaction);
            userTab.appendChild(transactionLogo);
            userContainer.addEventListener("click", (event) => {
                const u = document.querySelector(".username")
                const ui = document.querySelector(".userImage")
                u.style.display = "none";
                userContainer.appendChild(userTab);
            })




        }
        else if (user.type == "Seller") {
            const sell = document.createElement("p");
            const sellLogo = document.createElement("img");


            sell.classList.add("sell");
            sellLogo.classList.add("sellLogo");



            sell.style.cursor = "pointer";
            sellLogo.style.cursor = "pointer";
            sell.addEventListener("click", (event) => {
                window.open("./sell.html", "_self");
            })
            sellLogo.addEventListener("click", (event) => {
                window.open("./sell.html", "_self");
            })
            sellLogo.src = "../Media/Icons/transLogo.svg";
            sell.innerHTML = "Sell Item";
            userTab.appendChild(sell);
            userTab.appendChild(sellLogo);
            userContainer.addEventListener("click", (event) => {
                const u = document.querySelector(".username")
                const ui = document.querySelector(".userImage")
                u.style.display = "none";
                userContainer.appendChild(userTab);
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