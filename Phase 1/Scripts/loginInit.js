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

    function log() {
        const loginButton = document.querySelector("#loginButton");
        loginButton.addEventListener("click", (event) => {
            const pass = document.querySelector("#password").value;
            const username = document.querySelector("#username").value;
            if (pass !== "" && username !== "") {
                console.log(username, pass);
                let tempUser = checkUser(username, pass);
                console.log(tempUser);
                // If tempUser is an empty array, no user was found
                if (tempUser.length > 0) {
                    localStorage.setItem("user", JSON.stringify(tempUser[0]));
                    open("./"+prevPath);
                    close("./login.html") //apply on main.html part
                } else {
                    // Alert the user if login is incorrect
                    alert("Incorrect username or password. Please try again.");
                    open("./login.html");
                    close("./login.html") 

                }
            }else{
                    // Alert the user if login is incorrect
                    alert("No username or password. Please try again.");
                    open("./login.html");
                    close("./login.html") 

                
            }
        });
    }

    const checkUser = (use, pass) => users.filter((v) => v.password == pass && v.username == use);

    log();
});
