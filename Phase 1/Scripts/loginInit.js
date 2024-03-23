document.addEventListener("DOMContentLoaded",()=>{
    const usersData=localStorage.getItem("phones");
    const users=JSON.parse(phonesData);

    function log(){
        const loginButton=document.querySelector("#loginButton");
        loginButton.addEventListener("click",(event)=>{
            const pass=document.querySelector("#password").value;
            const username=document.querySelector("#username").value;
            const tempUser=checkUser(users,username,pass)
            if(tempUser!=null){
                localStorage.setItem("user",JSON.stringify(tempUser));
            }
        })


    }

    const checkUser=(users,name,passw) => users.forEach((u)=> u.username===name && u.password===passw ? u : null);

    log()
});