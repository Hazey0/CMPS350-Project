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
class Phone{
    brand;
    name;
    year;
    price;
    storage;
    constructor(b,n,y,p,s){
        brand=b;
        name=n;
        year=y;
        price=p;
        storage=s; 
    }
}
const phones= [
    {brand:"Samsung",name:"Galaxy S23",year:2023,price:1250,storage:256},
    {brand:"Apple",name:"IPhone 14",year:2023,price:1300,storage:128},
    {brand:"One Plus",name:"9T",year:2022,price:800,storage:256},
    {brand:"Google",name:"Pixle 5",year:2018,price:650,storage:128},
    {brand:"Samsung",name:"Galaxy S24 Ultra",year:2024,price:1300,storage:512},
    {brand:"Nokia",name:"P10",year:2022,price:500,storage:64},
    {brand:"Xaomi",name:"Mi 10",year:2023,price:1050,storage:256},
    {brand:"Samsung",name:"Galaxy S21 Plus",year:2022,price:1000,storage:256},
]
const nameSplit=(a)=> a.split(" ");
const searchQuery= "galaxy";
const keywords= searchQuery.split(" ");
///////SEARCH FUNCTION//////////////////////
const searchResult=phones.filter((e)=>
e.brand.toLowerCase()==keywords.reduce((a,v)=> v.toLowerCase()==e.brand.toLowerCase() ? v:a) || 
e.name.toLowerCase().split(" ").includes(keywords.map((d)=> d.toLowerCase()))||
e.year==keywords.reduce((a,v)=> v==e.year ? v:a) ||
e.storage==keywords.reduce((a,v)=> v==e.storage ? v:a)
);
/////////////END OF SEARCH FUNCTION /////////////////
searchResult2= phones.filter((e)=> e.brand.toLowerCase()==keywords.reduce((a,z)=> z.toLowerCase()==e.brand.toLowerCase() ? z.toLowerCase() : a.toLowerCase()))
console.log(searchResult);
