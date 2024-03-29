const phonesd = localStorage.getItem("phones")
const phones = JSON.parse(phonesd);

export function loadCustomerDetails( usr) {
    const container=document.querySelector("#userDetails");
    const username = document.createElement("p")
    const password = document.createElement("p")
    const surname = document.createElement("p")
    const address = document.createElement("p")
    const money = document.createElement("p")


    username.classList .add   ("username");
    password.classList .add ("password");
    surname.classList.add("surname")
    address.classList.add("address")
    money.classList.add("money")
    username.id="username"




    username.innerHTML = "Username: " + usr.username;
    password.innerHTML = "Password: " + usr.password;
    surname.innerHTML = "Surname: " + usr.surname
    address.innerHTML = "Address: " + usr.address
    money.innerHTML = "Balance: " + usr.money

    container.appendChild(surname)
    container.appendChild(username)
    container.appendChild(password)
    container.appendChild(address)
    container.appendChild(money)


}



export function loadSellerDetails( usr) {
    const container=document.querySelector("#userDetails")

    const username = document.createElement("p")
    const password = document.createElement("p")
    const companyName=document.createElement("p")
    const bankAccount=document.createElement("p")
    const listedPhonesAmount=document.createElement("p")
    listedPhonesAmount.classList.add("listedPhonesAmount");



    username.classList.add("username");
    password.classList.add("password");
    companyName.classList.add("companyName");
    bankAccount.classList.add("bankAccount")
    username.id="username"



    username.innerHTML = "Username: " + usr.username;
    password.innerHTML = "Password: " + usr.password;
    companyName.innerHTML="Company: "+usr.companyName;
    bankAccount.innerHTML="Bank Account: "+usr.bankAccount;
    listedPhonesAmount.innerHTML=sellerCurrentListedAmount(usr.username)


    container.appendChild(companyName)
    container.appendChild(username)
    container.appendChild(password)
    container.appendChild(bankAccount);

}



export function loadAdminDetails( usr) {
    const container=document.querySelector("#userDetails")


    const username = document.createElement("p")
    const password = document.createElement("p")



    username.classList.add("username");
    password.classList.add("password");
    username.id="username"




    username.innerHTML = "Username: " + usr.username;
    password.innerHTML = "Password: " + usr.password;




    container.appendChild(username)
    container.appendChild(password)

}

function sellerCurrentListedAmount(username) {

    const amount = phones.reduce((a, v) => v.seller == username ? 1 : a, 0);
    return amount
}