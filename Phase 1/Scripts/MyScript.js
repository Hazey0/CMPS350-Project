class User {
    username;
    password;
    type;
    listedPhones;
    constructor(u,p,t){
        this.username=u;
        this.password=p;
        this.type=t;
    }
    getPass(){
        
    }
}
const users=[new User("ok",974, "Customer"),
            new User("ksdjcvb",879423,"Seller"),
            new User("ksdjcvbv",8423,"Customer"),
            new User("ksjdbc",8793,"Seller"),
            new User("lsds",873,"Admin")];


const checkUser= (use,pass) =>( users.filter((v)=> v.password==pass && v.username==use ) );
const u= checkUser("ksjdbc",8793);
console.log(u);
