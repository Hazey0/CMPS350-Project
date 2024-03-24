
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
        searchButton.addEventListener("mouseOver",(event)=>{
            searchButton.src="../Media/icons/searcHover.svg"
        })
        searchButton.addEventListener("click",(event)=>{
            searchPhone();
        })
    }

    function renderPhones(){
        const container=document.querySelector("#items");
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
        const itemLink=document.createElement("a");
        /////adding ids to style them in css////
        brand.classList.add("phoneBrand");
        img.classList.add("PhoneImage");
        bottom.classList.add("phoneDetails");
        img.classList.add("phoneImage");
        name.classList.add("details");
        year.classList.add("details");
        price.classList.add("details");
        storage.classList.add("details");
        
        ///////////////assing values to each element////////////////////
        itemLink.href="./item.html";
        brand.innerHTML=phone.brand;
        name.innerHTML="Model: "+phone.name;
        year.innerHTML="Year: "+phone.year;
        price.innerHTML="price: "+phone.price+"QR";
        storage.innerHTML="Storage: "+phone.storage;
        img.src=phone.img;
        itemLink.addEventListener("click",(event)=>{
            localStorage.setItem("item",JSON.stringify(phone));
            
        })
        ////////////// attaching elements///////////
        itemLink.appendChild(img);
        top.appendChild(itemLink);
        top.appendChild(brand);
        top.appendChild(itemLink);
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
        container.replaceChildren();
        featuredPhones.forEach((phone)=> container.appendChild(renderFeaturedPhone(phone)));
    }

    function renderFeaturedPhone(phone){
        const phoneBox=document.createElement("div");
        const top=document.createElement("div");
        const bottom=document.createElement("div");

        phoneBox.classList.add("featuredPhone");
        ////elements of the phone///
        const itemLink=document.createElement("a");
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
        itemLink.href="./item.html";
        ///////////////assing values to each element////////////////////
        brand.innerHTML=phone.brand;
        name.innerHTML="Model: "+phone.name;
        year.innerHTML="Year: "+phone.year;
        price.innerHTML="price: "+phone.price+"QR";
        storage.innerHTML="Storage: "+phone.storage;
        img.src=phone.img;
        itemLink.addEventListener("click",(event)=>{
            localStorage.setItem("item",JSON.stringify(phone));
            
        });
        ///////// attaching elements///////////
        itemLink.appendChild(img);
        top.appendChild(itemLink);
        top.appendChild(brand);
        itemLink.appendChild(img);
        bottom.appendChild(name);
        bottom.appendChild(year);
        bottom.appendChild(price);
        bottom.appendChild(storage);
        phoneBox.appendChild(top);
        phoneBox.appendChild(bottom);

        return phoneBox;
       
            

        

    };






    function searchPhone() {
        if(document.querySelector(".cancelSearch") !=null){
            document.querySelector(".cancelSearch").remove();
        }
        const searchRequest=document.querySelector("#searchBar").value;
        const keywords=searchRequest.split(" ");

        const splits=(a)=>a.toLowerCase().split(" ");
        const searchString=(keys,value) => keys.reduce((a,v)=>  splits(value).reduce((x,s)=>s.startsWith(v) ? true:x,false)                  ? true : a,false)
        const searchInt =(keys,int)=> keys.reduce((a,v)=> v==int ? true : a,false);
        const searchResult = phones.filter((e) =>
        
                searchString(keywords,e.brand) && searchString(keywords,e.name)  || searchString(keywords,e.brand) && searchInt(keywords,e.storage) ||
                searchString(keywords,e.brand) && searchInt(keywords,e.year)     || searchString(keywords,e.brand)                                  ||
                searchString(keywords,e.name) && searchInt(keywords,e.year)      || searchString(keywords,e.name)                                   ||
                searchString(keywords,e.name) && searchInt(keywords,e.storage)   || searchInt(keywords,e.year)                                      ||
                searchInt(keywords,e.storage)                                    || searchInt(keywords,e.storage) && searchInt(keywords,e.year)     ||
                searchInt(keywords,e.year)

                
            )
        
        


       const container=document.querySelector("#items");
       container.replaceChildren();
       searchResult.forEach((phone)=>container.appendChild(renderPhone(phone)));
       const searchDiv=document.querySelector("#searchDiv");
       const cancelSearch=document.createElement("img");
       cancelSearch.src="../Media/icons/circle-x.svg";
       cancelSearch.classList.add("cancelSearch");
       cancelSearch.addEventListener("click",(event)=>{
        renderPhones();
        cancelSearch.remove();
        
       })
       searchDiv.appendChild(cancelSearch);
    };

    function logged(){
        console.log(user)
        if(user==null){
            
            const nav2= document.querySelector("#loginButton");  
            const nav1=document.querySelector("#user");          
            nav2.replaceChildren();
            const loginButton=document.createElement("a");
            loginButton.classList.add("login");
            loginButton.innerHTML="Login";
            loginButton.href="login.html";
            const guest=document.createElement("p");
            guest.innerHTML="Guest"
            guest.classList.add("guest");
            const userImage=document.createElement("img");
            userImage.src="../Media/icons/user.svg";
            userImage.classList.add("userImage");
            nav1.appendChild(userImage);
            nav1.appendChild(guest);

            nav2.appendChild(loginButton);
            //if(nav.hasChildNodes==false){
            //nav.replaceChildren();
            //
            //const loginButton= document.createElement("button");
            //loginButton.innerHTML="Login";
            //loginButton.addEventListener("click",()=>{
            // open("./login.html");
            //})

                        }

            
        else{
           const nav2= document.querySelector("#loginButton")
           const nav1=document.querySelector("#user");  
           const userImage=document.createElement("img");
           userImage.src="../Media/icons/user.svg";
           userImage.classList.add("userImage");
           nav2.replaceChildren();
           const logoutButton= document.createElement("button");
           logoutButton.innerHTML="Logout";
           logoutButton.classList.add("logoutButton");
           const usernam= document.createElement("p");
           usernam.innerHTML= user.username;
           usernam.classList.add("username");
           logoutButton.addEventListener("click",()=>{
            logout();
           })
           nav1.appendChild(userImage);
           nav1.appendChild(usernam);
           nav2.appendChild(logoutButton);
        }
    }
    function logout(){
        localStorage.removeItem("user");
        open("./main.html");
        close();
        
    }
    function sort(type,dir){

        if(dir=="asc"){
            renderAfterSort(phones.sort((a,b)=> a.type>b.type ? a:b))
        }
        else if (dic=="dsc"){
            renderAfterSort(phones.sort((a,b)=> a.type<b.type ? a:b))
        }

    }
    function renderAfterSort(phonz){
        const container=document.querySelector("#items");
        container.replaceChildren();
        phonz.forEach((phone)=>container.appendChild(renderPhone(phone)));
    }
    logged();
    renderFunctions();
    renderFeaturedPhones();
    renderPhones();
});