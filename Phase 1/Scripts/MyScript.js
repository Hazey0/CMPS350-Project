import { Phone } from "./Classes/Phone";

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


console.log(checkUser("ksjdbc",8793));

export const phones= [
    new Phone("Samsung","Galaxy S23",2023,1250,256,"./Media/images/s23.jpg"),
    new Phone("Apple","IPhone 14",2023,1300,128,"./Media/images/s21plus.jpg"),
    new Phone("One Plus","9T",2022,800,256,"./Media/images/9T.jpg"),
    new Phone("Google","Pixle 5",2018,650,128,"./Media/images/pixel5.jpg"),
    new Phone("Samsung","Galaxy S24 Ultra",2024,1300,512,"./Media/images/s24U.jpg"),
    new Phone("Nokia","P10",2022,500,64,"./Media/images/nokia.jpg"),
    new Phone("Xaomi","Mi 10",2023,1050,256,"./Media/images/mi10.jpg"),
    new Phone("Samsung","Galaxy S21 Plus",2022,1000,256,"./Media/images/s21plus.jpg"),
]
const nameSplit=(a)=> a.split(" ");
const searchQuery= "galaxy";
const keywords= searchQuery.split(" ");
///////SEARCH FUNCTION//////////////////////

/////////////END OF SEARCH FUNCTION /////////////////
searchResult2= phones.filter((e)=> e.brand.toLowerCase()==keywords.reduce((a,z)=> z.toLowerCase()==e.brand.toLowerCase() ? z.toLowerCase() : a.toLowerCase()))
console.log(searchResult);
