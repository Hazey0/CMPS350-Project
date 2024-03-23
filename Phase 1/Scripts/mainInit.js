
document.addEventListener("DOMContentLoaded",()=>{

    const phonesData=localStorage.getItem("phones");
    const phones=JSON.parse(phonesData);

    const featuredPhones=[];
    featuredPhones.push(phones[0]);
    featuredPhones.push(phones[1]);
    const userData=localStorage.getItem("user");
    const user=JSON.parse(userData);

    function renderFunctions(){
        const searchButton=document.querySelector("#searchButton");
        searchButton.addEventListener("click",(event)=>{
            searchPhone();
        })
    }

    function renderPhones(){
        const container=document.querySelector("#items");
        container.style.backgroundColor="lightblue";
        container.replaceChildren();
        phones.forEach((phone)=> container.appendChild(renderPhone(phone)));
    }

    function renderPhone(phone){
        const phoneBox=document.createElement("div");
        const top=document.createElement("div");
        const bottom=document.createElement("div");

        phoneBox.classList.add("phone");
        ////elements of the phone///
        const brand = document.createElement("p");
        const name = document.createElement("p");
        const year= document.createElement("p");
        const price= document.createElement("p");;
        const storage= document.createElement("p");
        const img=document.createElement('img');
        brand.style.fontStyle="italic";
        /////adding ids to style them in css////
        brand.classList.add("phoneBrand");
        img.classList.add("PhoneImage");
        bottom.classList.add("phoneDetails");
        img.classList.add("phoneImage");
        
        ///////////////assing values to each element////////////////////
        brand.innerHTML=phone.brand;
        name.innerHTML="Model: "+phone.name;
        year.innerHTML="Year: "+phone.year;
        price.innerHTML="price: "+phone.price;
        storage.innerHTML="Storage: "+phone.storage;
        img.src=phone.img;
        img.addEventListener("click",(event)=>{
            localStorage.setItem("item",JSON.stringify(phone));
            open("./item.html");
        })
        ////////////// attaching elements///////////
        top.appendChild(brand);
        top.appendChild(img);
        bottom.appendChild(name);
        bottom.appendChild(year);
        bottom.appendChild(price);
        bottom.appendChild(storage);
        phoneBox.appendChild(top);
        phoneBox.appendChild(bottom);
        

        return phoneBox;
       
            

        

    };
    function renderFeaturedPhones(){
        const container=document.querySelector("#featuredPhones");
        container.style.marginBottom="200px"
        container.replaceChildren();
        featuredPhones.forEach((phone)=> container.appendChild(renderFeaturedPhone(phone)));
    }

    function renderFeaturedPhone(phone){
        const phoneBox=document.createElement("div");
        const top=document.createElement("div");
        const bottom=document.createElement("div");

        phoneBox.classList.add("featuredPhone");
        ////elements of the phone///
        const brand = document.createElement("p");
        const name = document.createElement("p");
        const year= document.createElement("p");
        const price= document.createElement("p");;
        const storage= document.createElement("p");
        const img=document.createElement('img');
        /////adding ids to style them in css////
        brand.classList.add("phoneBrand");
        img.classList.add("featuredPhoneImage");
        bottom.classList.add("phoneDetails");
        ///////////////assing values to each element////////////////////
        brand.innerHTML=phone.brand;
        name.innerHTML="Model: "+phone.name;
        year.innerHTML="Year: "+phone.year;
        price.innerHTML="price: "+phone.price;
        storage.innerHTML="Storage: "+phone.storage;
        img.src=phone.img;
        img.addEventListener("click",(event)=>{
            localStorage.setItem("item",JSON.stringify(phone));
            open("./item.html");
           
        });
        ///////// attaching elements///////////
        top.appendChild(brand);
        top.appendChild(img);
        bottom.appendChild(name);
        bottom.appendChild(year);
        bottom.appendChild(price);
        bottom.appendChild(storage);
        phoneBox.appendChild(top);
        phoneBox.appendChild(bottom);

        return phoneBox;
       
            

        

    };






    function searchPhone() {
        const searchRequest=document.querySelector("#searchBar").value;
        const keywords=searchRequest.split(" ");
        const searchResult = phones.filter((e) =>
            e.brand.toLowerCase() == keywords.reduce((a, v) => v.toLowerCase() == e.brand.toLowerCase() ? v : a) ||
            e.name.toLowerCase().split(" ").includes(keywords.map((d) => d.toLowerCase())) ||
            e.year == keywords.reduce((a, v) => v == e.year ? v : a) ||
            e.storage == keywords.reduce((a, v) => v == e.storage ? v : a)
        )
       const container=document.querySelector("#items");
       container.replaceChildren();
       searchResult.forEach((phone)=>container.appendChild(renderPhone(phone)));
    };

    function logged(){
        if(user==null){
            const nav= document.querySelector(".navItem")
            nav.replaceChildren();
            const loginButton= document.createElement("button");
            loginButton.innerHTML="Login";
            loginButton.addEventListener("click",()=>{
             open("./login.html");
            })
            nav.appendChild(loginButton);
        }
        else{
           const nav= document.querySelector(".navItem")
           nav.replaceChildren();
           const logoutButton= document.createElement("button");
           logoutButton.innerHTML="Logout";
           const usernam= document.createElement("p");
           usernam.innerHTML= user.username;
           logoutButton.addEventListener("click",()=>{
            logout();
           })
           nav.appendChild(usernam);
           nav.appendChild(logout);
        }
    }
    function logout(){
        localStorage.removeItem("user");
    }
    logged();
    renderFunctions();
    renderFeaturedPhones();
    renderPhones();

});