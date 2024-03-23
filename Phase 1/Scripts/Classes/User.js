class User {
    username;
    #password;
    type;
    listedPhones;
    constructor(u,p,t){
        this.username=u;
        this.#password=p;
        this.type=t;
    }

}
const users=[new User("ok",9423, "Customer"),
            new User("ksdjcvb",879423,"Seller"),
            new User("ksdjcvbv",8423,"Customer"),
            new User("ksjdbc",8793,"Seller"),
            new User("lsds",873,"Admin")];
localStorage.setItem("users",JSON.stringify(users));
