class User {
    username;
    #password;
    type;
}
const users=[{username:"ok",password :9423,type: "Customer"},
            {username:"ksdjcvb",password :879423,type: "Seller"},
            {username:"ksdjcvbv",password :8423,type: "Customer"},
            {username:"ksjdbc",password :8793,type: "Seller"},
            {username:"lsds",password :873,type: "Admin"}];

const checkUser= (use,pass) =>( users.reduce((a,v)=>
use===v.username && pass===v.password ? v : a
))
console.log(checkUser("ksjdbc",8793));