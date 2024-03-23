document.addEventListener("DOMContentLoaded", () => {
    const usersData = localStorage.getItem("users");
    const users = JSON.parse(usersData);
    console.log(users);

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
                    open("./main.html");
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
