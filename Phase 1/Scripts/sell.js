document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const data = localStorage.getItem("item");
    const phone = JSON.parse(data);


    const getPage = (a) => a.split("/").reduce((a, v) => v)
    const yourPath = getPage(window.location.pathname);
    const mainPath = ".html";
    const prevData=localStorage.getItem("prevPath");
    const prevPath=JSON.parse(prevData);
    console.log("current :"+yourPath)
    console.log("previous:"+prevPath);




    function logged() {
        console.log(user)
        if (user == null) {
            
            const nav2 = document.querySelector("#loginButton");
            const nav1 = document.querySelector("#user");
            nav2.replaceChildren();
            nav1.replaceChildren();
            const loginButton = document.createElement("a");
            loginButton.classList.add("login");
            loginButton.innerHTML = "Login";
            loginButton.href = "login.html";
            const guest = document.createElement("p");
            guest.innerHTML = "Guest"
            guest.classList.add("guest");
            guest.style.color="white";
            const userImage = document.createElement("img");
            userImage.src = "../Media/icons/user.svg";
            userImage.classList.add("userImage");
            nav1.appendChild(userImage);
            nav1.appendChild(guest);
            nav2.addEventListener("click",(event)=>{
                localStorage.setItem("prevPath",(JSON.stringify(mainPath)))
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
            nav1.replaceChildren();
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
        window.open("./main.html","_self");

    }
    function showUserTab() {
        if(user!==null){
        const userContainer = document.querySelector("#user");
        closeUserTab();
        const userTab = document.createElement("div");
        userTab.classList.add("userTab");
       
        if (user.type == "Customer") {

            const transaction = document.createElement("p");
            const transactionLogo = document.createElement("img");

            
            transaction.classList.add("transaction");
            transactionLogo.classList.add("transactionLogo");



            transaction.style.cursor="pointer";
            transaction.addEventListener("click",(event)=>{
                window.open("./transactions.html","_self");
            })
            transactionLogo.style.cursor="pointer";
            transactionLogo.addEventListener("click",(event)=>{
                window.open("./transactions.html","_self");
            })
            transactionLogo.src="../Media/Icons/transLogo.svg";
            transaction.innerHTML="Transaction History";

            userTab.appendChild(transaction);
            userTab.appendChild(transactionLogo);
            userContainer.addEventListener("click",(event)=>{
                const u=document.querySelector(".username")
                const ui=document.querySelector(".userImage")
                u.style.display="none";
                userContainer.replaceChildren();
                userContainer.appendChild(ui);
                userContainer.appendChild(u);
                userContainer.appendChild(userTab);
            })




        }
        else if (user.type == "Seller") {
            const sell = document.createElement("p");
            const sellLogo = document.createElement("img");

            
            sell.classList.add("sell");
            sellLogo.classList.add("sellLogo");



            sell.style.cursor="pointer";
            sellLogo.style.cursor="pointer";
            sell.addEventListener("click",(event)=>{
                window.open("./sell.html","_self");
            })
            sellLogo.addEventListener("click",(event)=>{
                window.open("./sell.html","_self");
            })
            sellLogo.src="../Media/Icons/transLogo.svg";
            sell.innerHTML="Sell Item";

            userTab.appendChild(sell);
            userTab.appendChild(sellLogo);
            userContainer.addEventListener("click",(event)=>{
                const u=document.querySelector(".username")
                const ui=document.querySelector(".userImage")
                u.style.display="none";
                userContainer.replaceChildren();
                userContainer.appendChild(ui);
                userContainer.appendChild(u);
                userContainer.appendChild(userTab);
            })
        }
        userTab.addEventListener("mouseleave",(event)=>{
            const u=document.querySelector(".username")
            u.style.display="";
            userContainer.querySelector(".userTab").remove();
        })
        }
    }
    function closeUserTab() {
        const closeIt=document.querySelector(".userTab");
        console.log(closeIt);
        if(closeIt!=null){
            closeIt.replaceChildren();
        closeIt.remove();}

    }
    logged();
    showUserTab();



});