const data=localStorage.getItem("users");
const users=JSON.parse(data);
const datau=localStorage.getItem("user");
const user=JSON.parse(datau);
import { mainPath,yourPath,prevPath } from "./paths.js";
export function logged() {
    if (user == null) {

        const nav2 = document.querySelector("#loginButton");
        const nav1 = document.querySelector("#user");
        nav2.replaceChildren();
        const loginButton = document.createElement("a");
        loginButton.classList.add("login");
        loginButton.innerHTML = "Login";
        loginButton.href = "login.html";
        const guest = document.createElement("p");
        guest.innerHTML = "Guest"
        guest.classList.add("guest");
        const userImage = document.createElement("img");
        userImage.src = "../Media/icons/user.svg";
        userImage.classList.add("userImage");
        nav1.appendChild(userImage);
        nav1.appendChild(guest);
        console.log(guest);
        nav2.addEventListener("click", (event) => {
            localStorage.setItem("prevPath", (JSON.stringify(mainPath)))
        })

        nav2.appendChild(loginButton);
        //if(nav.hasChildNodes==false){
        //nav.replaceChildren();
        //
        //const loginButton= document.createElement("button");
        //loginButton.innerHTML="Login";
        //loginButton.addEventListener("click",()=>{
        // open("./login.html");
        //})

    }


    else {
        const nav2 = document.querySelector("#loginButton")
        const nav1 = document.querySelector("#user");
        const userImage = document.createElement("img");
        userImage.src = "../Media/icons/user.svg";
        userImage.classList.add("userImage");
        nav2.replaceChildren();
        const logoutButton = document.createElement("button");
        logoutButton.innerHTML = "Logout";
        logoutButton.classList.add("logoutButton");
        const usernam = document.createElement("p");
        usernam.innerHTML = user.username;
        usernam.classList.add("username");
        logoutButton.addEventListener("click", () => {
            logout();
        })
        nav1.appendChild(userImage);
        nav1.appendChild(usernam);
        nav2.appendChild(logoutButton);
    }
}
function logout() {
    localStorage.removeItem("user");
    window.open("./" + mainPath, "_self");

}