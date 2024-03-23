document.addEventListener("DOMContentLoaded",()=>{
    const usersData=localStorage.getItem("users");
    const users=JSON.parse(usersData);
    console.log(users);

    function log(){
        const loginButton=document.querySelector("#loginButton");
        loginButton.addEventListener("click",(event)=>{
            const pass=document.querySelector("#password").value;
            const username=document.querySelector("#username").value;
            if(pass !="" && username !=""){
            console.log(username,pass);
            let tempUser=checkUser(username,pass);
            //if(tempUser.length==0){
            //    tempUser=null;
            //}
            //else{
            //    tempUser=tempUser.pop();
            //}
            console.log(tempUser);
            if(tempUser!=null){
                localStorage.setItem("user",JSON.stringify(tempUser));
                open("./main.html");
            }}
        })


    }

    const checkUser= (use,pass) =>( users.filter((v)=> v.password==pass && v.username==use ).reduce((a,b)=> b==null ? a : b)            );

    log()
});