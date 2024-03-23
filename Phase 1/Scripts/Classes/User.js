class User {
    username;
    password;
    type;
    listedPhones=[];
    money=0;
    surname;
    address;
    back;
    transactions=[];
    constructor(u,p,t){
        this.username=u;
        this.password=p;
        this.type=t;
    }
    getPass(){
        
    }
    addMoney(i){
        this.money+=i;
    }
    getMoney(){
        return this.money;
    }
}
const users=[new User("ok",974, "Customer"),
            new User("mike",879423,"Seller"),
            new User("ksdjcvbv",8423,"Customer"),
            new User("scammer",8793,"Seller"),
            new User("lsds",873,"Admin")];
users[0].money=10000;
console.log(users)
localStorage.setItem("users",JSON.stringify(users));
