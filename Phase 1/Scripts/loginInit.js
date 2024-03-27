document.addEventListener("DOMContentLoaded", () => {
    const usersData = localStorage.getItem("users");
    const users = JSON.parse(usersData);
    console.log(users);

    const getPage = (a) => a.split("/").reduce((a, v) => v)
    const yourPath = getPage(window.location.pathname);
    const mainPath = "login.html";
    const prevData=localStorage.getItem("prevPath");
    const prevPath=JSON.parse(prevData);
    console.log("current :"+yourPath)
    console.log("previous:"+prevPath);

    //let openedWindow;
//
    //function openWindow() {
    //  openedWindow = window.open(prevPath,"_self");
    //}
    //
    //function closeWindow() {
    //  openedWindow.close();
    //}
    //function refresh(){
    //    location.reload();
    //}
    function setPrevPath(){
        localStorage.setItem("prevPath",JSON.stringify(mainPath));
    }

    function log() {
        
        const mainLink=document.querySelector(".mainLink")
        mainLink.addEventListener("click",(event)=>{setPrevPath()})
       
        const loginButton = document.querySelector("#loginButton");
        loginButton.addEventListener("mouseover",(event)=>{
            loginButton.style.backgroundColor="#ff6c00";
            loginButton.style.color="white";
        })
        loginButton.addEventListener("mouseout",(event)=>{
            loginButton.style.backgroundColor="white";
            loginButton.style.color="grey";
            loginButton.animate()
        })
        loginButton.addEventListener("click", (event) => {
            const pass = document.querySelector("#password").value;
            const username = document.querySelector("#username").value;
            if (pass !== "" && username !== "") {
                console.log(username, pass);
                let tempUser = checkUser(username, pass);
                console.log(tempUser);
                // If tempUser is an empty array, no user was found
                if (tempUser.length > 0) {
                    alert("Login successful")
                    localStorage.setItem("user", JSON.stringify(tempUser[0]));
                    localStorage.setItem("prevPath",JSON.stringify(mainPath))
                    window.open("main.html")


                    //close() //apply on main.html part
                } else {
                    // Alert the user if login is incorrect
                    alert("Incorrect username or password. Please try again.");


                }
            }else{
                    // Alert the user if login is incorrect
                    alert("No username or password. Please try again.");


                
            }
        });
    }

    const checkUser = (use, pass) => users.filter((v) => v.password == pass && v.username == use);

    log();
});
