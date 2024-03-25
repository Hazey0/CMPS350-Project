
document.addEventListener("DOMContentLoaded", () => {
    const phonesData = localStorage.getItem("phones");
    const phones = JSON.parse(phonesData);
    const featuredPhones = [];
    featuredPhones.push(phones[0]);
    featuredPhones.push(phones[1]);
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);


    const getPage = (a) => a.split("/").reduce((a, v) => v)
    const yourPath = getPage(window.location.pathname);
    const mainPath = "main.html";
    const prevData = localStorage.getItem("prevPath");
    const prevPath = JSON.parse(prevData);
    console.log("current :" + yourPath)
    console.log("previous:" + prevPath);
    console.log(phones)


    let searchedPhones = [];




    function renderFunctions() {
        
        if (mainPath == yourPath) {
            const searchButton = document.querySelector("#searchButton");
            const searchImg = document.querySelector(".searchImage");
            document.addEventListener("keypress", (event) => { event.key == "Enter" ? searchPhone() : null })
            searchButton.addEventListener("mouseover", (event) => {
                searchImg.src = "../Media/Icons/searchHover.svg"
            })
            searchButton.addEventListener("mouseout", (event) => {
                searchImg.src = "../Media/Icons/search.svg"
            })
            searchButton.addEventListener("click", (event) => {
                searchPhone();
            })
        }
    }

    function renderPhones() {
        if (mainPath == yourPath) {
            const container = document.querySelector("#items");
            container.replaceChildren();
            phones.forEach((phone) => container.appendChild(renderPhone(phone)));
        }
    }

    function renderPhone(phone) {
        const phoneBox = document.createElement("div");
        phoneBox.addEventListener("mouseover", (event) => {
            phoneBox.style.backgroundColor = "#ff6c00";
        })
        phoneBox.addEventListener("mouseout", (event) => {
            phoneBox.style.backgroundColor = "";
        })
        const top = document.createElement("div");
        const bottom = document.createElement("div");
        phoneBox.classList.add("phone");
        ////elements of the phone///
        const brand = document.createElement("p");
        const name = document.createElement("p");
        const year = document.createElement("p");
        const price = document.createElement("p");;
        const storage = document.createElement("p");
        const img = document.createElement('img');
        const itemLink = document.createElement("a");
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
        itemLink.href = "./item.html";
        brand.innerHTML = phone.brand;
        name.innerHTML = "Model: " + phone.name;
        year.innerHTML = "Year: " + phone.year;
        price.innerHTML = "Price: " + phone.price + "QR";
        storage.innerHTML = "Storage: " + phone.storage + "GB";
        img.src = phone.img;
        itemLink.addEventListener("click", (event) => {
            localStorage.setItem("item", JSON.stringify(phone));
            localStorage.setItem("prevPath", (JSON.stringify(mainPath)))

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
    function renderFeaturedPhones() {
        if (mainPath == yourPath) {
            const container = document.querySelector("#featuredPhones");
            container.replaceChildren();
            featuredPhones.forEach((phone) => container.appendChild(renderFeaturedPhone(phone)));
        }
    }

    function renderFeaturedPhone(phone) {
        const phoneBox = document.createElement("div");
        const top = document.createElement("div");
        const bottom = document.createElement("div");

        phoneBox.classList.add("featuredPhone");
        ////elements of the phone///
        const itemLink = document.createElement("a");
        const brand = document.createElement("p");
        const name = document.createElement("p");
        const year = document.createElement("p");
        const price = document.createElement("p");;
        const storage = document.createElement("p");
        const img = document.createElement('img');
        /////adding ids to style them in css////
        brand.classList.add("phoneBrand");
        img.classList.add("featuredPhoneImage");
        bottom.classList.add("phoneDetails");
        itemLink.href = "./item.html";
        ///////////////assing values to each element////////////////////
        brand.innerHTML = phone.brand;
        name.innerHTML = "Model: " + phone.name;
        year.innerHTML = "Year: " + phone.year;
        price.innerHTML = "Price: " + phone.price + "QR";
        storage.innerHTML = "Storage: " + phone.storage + "GB";
        img.src = phone.img;
        itemLink.addEventListener("click", (event) => {
            localStorage.setItem("item", JSON.stringify(phone));

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

    function notEmpty(li){
        return li.length!==0;
    }

    
    function searchAlgo(){
        let result=[];
        const searchRequest = document.querySelector("#searchBar").value;
        let keywords = searchRequest.split(" ");
        const len=keywords.length
        keywords=keywords.filter((e)=> e!="")
        keywords.reverse();
        const e="fr"
        const clearSpace=(li)=>( i.filter((e)=>e!=""))
        ////methods////
        const splits = (a) => a.toLowerCase().split(" ").filter((x)=>x!='');
        const searchInt = (keys, int) => keys.reduce((a, v) => v == int ? true : a, false);
        const searchString = (keys, value) => keys.reduce((a, v) => splits(value).reduce((x, s) => s.startsWith(v)||s.endsWith(v) ? true : x, false) ? true : a, false)
        const searchString2 = (keys, value) => keys.reverse().reduce((a, v) => {
            let r;
            r= splits(value).reverse().reduce((x, s) =>s.endsWith(v) ? true : x, false)
    
            if(r){
                return true
            }
            r= splits(value).reverse().reduce((x, s) =>s.endsWith(v)? true : x, false);
    
            
            if(r){
                return true
            }
        })
        
    
    
        //////very specific search e.g()///////////1st/////////////
       result= phones.filter((e) =>
        
        (( searchString(keywords, e.brand) && searchInt(keywords, e.storage) ||
            searchString(keywords, e.brand) && searchInt(keywords, e.year) || searchString(keywords, e.name) && searchInt(keywords, e.year) ||
            searchString(keywords, e.name) && searchInt(keywords, e.storage) || searchInt(keywords, e.storage) && searchInt(keywords, e.year) )
                        &&
    
    
            (searchString(keywords, e.brand) || searchString(keywords, e.name) ||    searchInt(keywords, e.year) || searchInt(keywords, e.storage)))
    
        )
        if(notEmpty(result)){
            console.log("1st")
            return result;
        }
    ///////////2nd search////////////
       if(len==2){
        console.log(len)
        result= phones.filter((e) =>
        
        (
    
            searchString2(keywords, e.name) )
        )
    
        if(notEmpty(result)){
            console.log("2nd")
            return result;
        }}
        ///////////3rd search////////////
       if(len==3){
        console.log(len);
        result= phones.filter((e) =>
        
        (
    
            searchString2(keywords, e.name) )
        )
    
        if(notEmpty(result)){
            console.log("3rd")
            return result;
        }}
    ///////////4th search////////////
        result= phones.filter((e) =>
        
        (
            searchString(keywords, e.brand) && searchString(keywords, e.name) )
        )
        if(notEmpty(result)){
            console.log("4th")
            return result;
        }
    ///////////5th search////////////
    
        result= phones.filter((e) =>
        
        ((searchString(keywords, e.brand) && searchString(keywords, e.name) || searchString(keywords, e.brand) && searchInt(keywords, e.storage) ||
            searchString(keywords, e.brand) && searchInt(keywords, e.year) || searchString(keywords, e.name) && searchInt(keywords, e.year) ||
            searchString(keywords, e.name) && searchInt(keywords, e.storage) || searchInt(keywords, e.storage) && searchInt(keywords, e.year) )
                        ||
    
    
            (searchString(keywords, e.brand) || searchString(keywords, e.name) ||    searchInt(keywords, e.year) || searchInt(keywords, e.storage)))
    
        )
        if(notEmpty(result)){
            console.log("5th")
            return result;
        }
        

    }
    function searchPhone() {
        if (document.querySelector(".cancelSearch") != null) {
            document.querySelector(".cancelSearch").remove();
        }

        


        const searchResult = searchAlgo();
        



        const container = document.querySelector("#items");
        container.replaceChildren();
        searchedPhones.push(...searchResult);
        console.log(searchedPhones);
        searchResult.forEach((phone) => container.appendChild(renderPhone(phone)));
        const searchDiv = document.querySelector("#searchDiv");
        const cancelSearch = document.createElement("img");
        cancelSearch.src = "../Media/icons/circlex.svg";
        cancelSearch.classList.add("cancelSearch");
        cancelSearch.style.cursor = "pointer"
        cancelSearch.addEventListener("click", (event) => {
            renderPhones();
            cancelSearch.remove();

        })
        cancelSearch.addEventListener("mouseover", (event) => {
            cancelSearch.src = "../Media/icons/circlexHover.svg"

        })
        cancelSearch.addEventListener("mouseout", (event) => {
            cancelSearch.src = "../Media/icons/circlex.svg"

        })


        searchDiv.appendChild(cancelSearch);
    };

    function logged() {
        if (user == null) {

            const nav2 = document.querySelector("#loginButton");
            const nav1 = document.querySelector("#user");
            nav2.replaceChildren();
            const loginButton = document.createElement("a");
            loginButton.classList.add("login");
            loginButton.innerHTML = "Login";
            loginButton.href = "login.html";
            const guest = document.createElement("p");
            guest.innerHTML = "Guest"
            guest.classList.add("guest");
            const userImage = document.createElement("img");
            userImage.src = "../Media/icons/user.svg";
            userImage.classList.add("userImage");
            nav1.appendChild(userImage);
            nav1.appendChild(guest);
            console.log(guest);
            nav2.addEventListener("click", (event) => {
                localStorage.setItem("prevPath", (JSON.stringify(mainPath)))
            })

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


        else {
            const nav2 = document.querySelector("#loginButton")
            const nav1 = document.querySelector("#user");
            const userImage = document.createElement("img");
            userImage.src = "../Media/icons/user.svg";
            userImage.classList.add("userImage");
            nav2.replaceChildren();
            const logoutButton = document.createElement("button");
            logoutButton.innerHTML = "Logout";
            logoutButton.classList.add("logoutButton");
            const usernam = document.createElement("p");
            usernam.innerHTML = user.username;
            usernam.classList.add("username");
            logoutButton.addEventListener("click", () => {
                logout();
            })
            nav1.appendChild(userImage);
            nav1.appendChild(usernam);
            nav2.appendChild(logoutButton);
        }
    }
    function logout() {
        localStorage.removeItem("user");
        window.open("./" + mainPath, "_self");

    }


    function letterss(word) {
        const list = []

        word = word.toLowerCase();
        for (var i = 0; i < word.length; i++) {
            list.push(word[i]);
        }
        return list;
    }
    function compare(ae, be) {
        const a = wordInt(ae);
        const b = wordInt(be);
        let er = 1;
        let len = 0;
        if (a.length < b.length) {
            len = a.length;
        }
        else {
            len = b.length;
        }


        for (var w = 0; w < len; w++) {
            let ax = a[w];
            let bx = b[w];
            if (ax > bx) {
                console.log(a[w] + " > " + b[w]);
                console.log(ae + " is bigger than " + be)
                return 2;
            }
            else if (a[w] == b[w]) {

            }
            else if (a[w] < b[w]) {
                console.log(a[w] + " < " + b[w]);
                console.log(ae + " is smaller than " + be)
                return 0
            }
        }
        console.log(er + " ." + ae + " ." + be)
        return er;

    }






    function wordInt(word) {
        const strength = []
        const letters = letterss(word);
        const numsAndLets = [{ let: "a", num: 25 }, { let: "b", num: 24 }, { let: "c", num: 23 }, { let: "d", num: 22 }, { let: "e", num: 21 }, { let: "f", num: 20 }, { let: "g", num: 19 }, { let: "h", num: 18 }, { let: "i", num: 17 }, { let: "j", num: 16 }, { let: "k", num: 15 }, { let: "l", num: 14 }, { let: "m", num: 13 }, { let: "n", num: 12 }, { let: "o", num: 11 }, { let: "p", num: 10 }, { let: "q", num: 9 }, { let: "r", num: 8 }, { let: "s", num: 7 }, { let: "t", num: 6 }, { let: "u", num: 5 }, { let: "v", num: 4 }, { let: "w", num: 4 }, { let: "x", num: 3 }, { let: "y", num: 2 }, { let: "z", num: 1 }
        ]
        for (var s = 0; s < letters.length; s++) {
            for (var d = 0; d < numsAndLets.length; d++) {
                let o = letters[s];
                let j = numsAndLets[d].let;
                if (letters[s] == numsAndLets[d].let) {
                    strength.push(numsAndLets[d].num);
                }
            }
        }
        return strength;
    }




    function sort(t, dir, phonies) {
        const type = t.toString();
        if (type == "price") {
            if (dir == "asc") {
                renderAfterSort(phonies.sort((a, b) => a.price - b.price))
            }
            else if (dir == "dsc") {
                renderAfterSort(phonies.sort((a, b) => b.price - a.price))
            }
        }
        //////////////////////
        if (type == "name") {
            if (dir == "asc") {
                renderAfterSort(phonies.sort((a, b) => compare(a.brand, b.brand) ? -1 : compare(b.brand, a.brand) ? 1 : 0))
            }
            else if (dir == "dsc") {
                renderAfterSort(phonies.sort((a, b) => compare(a.brand, b.brand) ? 1 : compare(b.brand, a.brand) ? -1 : 0))
            }
        }
        /////////////
        if (type == "storage") {
            if (dir == "asc") {
                renderAfterSort(phonies.sort((a, b) => a.storage - b.storage))
            }
            else if (dir == "dsc") {
                renderAfterSort(phonies.sort((a, b) => b.storage - a.storage))
            }
        }
        if (type == "year") {
            if (dir == "asc") {
                renderAfterSort(phonies.sort((a, b) => a.year - b.year))
            }
            else if (dir == "dsc") {
                renderAfterSort(phonies.sort((a, b) => b.year - a.year))
            }

        }
        searchedPhones = phonies;
    }
    function renderAfterSort(phonz) {
        const container = document.querySelector("#items");
        container.replaceChildren();
        phonz.forEach((phone) => container.appendChild(renderPhone(phone)));
    }
    function renderSort() {
        if (mainPath == yourPath) {
            const container = document.querySelector("#itemsheader")
            const ic = document.querySelector("#typeContain");
            const name = document.createElement('a');
            const price = document.createElement('a');
            const year = document.createElement('a');
            const storage = document.createElement('a');
            const sortContain = document.createElement('div');
            const nameImg = document.createElement("img");
            const yearImg = document.createElement("img");
            const priceImg = document.createElement("img");
            const storageImg = document.createElement("img");
            nameImg.style.cursor = "pointer";
            yearImg.style.cursor = "pointer";
            priceImg.style.cursor = "pointer";
            storageImg.style.cursor = "pointer";
            nameImg.src = "../Media/icons/sort.svg"
            yearImg.src = "../Media/icons/sort.svg"
            priceImg.src = "../Media/icons/sort.svg"
            storageImg.src = "../Media/icons/sort.svg"
            /////assign names/////////
            name.innerHTML = "Name";
            price.innerHTML = "Price";
            year.innerHTML = "Year";
            storage.innerHTML = "Storage";

            name.value = "name";
            price.value = "price";
            year.value = "year";
            storage.value = "storage";
            /////assign css selectors///
            name.classList.add("sortName");
            price.classList.add("sortPrice");
            year.classList.add("sortYear");
            storage.classList.add("sortStorage");
            sortContain.classList.add("sortContainer");
            ////adding events//////
            name.addEventListener("click", (event) => { replaceSortType(), showSortType(name, name.value) });
            price.addEventListener("click", (event) => { replaceSortType(), showSortType(price, price.value) });
            year.addEventListener("click", (event) => { replaceSortType(), showSortType(year, year.value) });
            storage.addEventListener("click", (event) => { replaceSortType(), showSortType(storage, storage.value) });
            name.addEventListener("mouseleave", (event) => { replaceSortType(); });
            price.addEventListener("mouseleave", (event) => { replaceSortType(); });
            year.addEventListener("mouseleave", (event) => { replaceSortType(); });
            storage.addEventListener("mouseleave", (event) => { replaceSortType(); });
            /////structure//////
            name.appendChild(nameImg);
            price.appendChild(priceImg);
            year.appendChild(yearImg);
            storage.appendChild(storageImg);
            sortContain.appendChild(name);
            sortContain.appendChild(year);
            sortContain.appendChild(price);
            sortContain.appendChild(storage);
            container.appendChild(sortContain);

        }
    }
    function replaceSortType() {
        const ic = document.querySelector("#typeContain");
        ic.replaceChildren();
    }
    function showSortType(node, type) {
        const typeContain = document.querySelector("#typeContain");
        const asc = document.createElement("button");
        const dsc = document.createElement("button");
        const sortType = document.createElement("div");
        sortType.classList.add("sortType")
        asc.innerHTML = "ascending"
        dsc.innerHTML = "dscending"
        asc.value = "asc";
        dsc.value = "dsc";
        asc.addEventListener('click', (event) => { searchedPhones.length > 0 ? (replaceSortType(), sort(type, asc.value, searchedPhones)) : (replaceSortType(), sort(type, asc.value, phones)) })
        dsc.addEventListener('click', (event) => { searchedPhones.length > 0 ? (replaceSortType(), sort(type, dsc.value, searchedPhones)) : (replaceSortType(), sort(type, dsc.value, phones)) })
        typeContain.appendChild(asc);
        typeContain.appendChild(dsc);
        node.appendChild(typeContain);
        //typeContain.appendChild(node);

    }


    function showUserTab() {
        if (user !== null) {
            const userContainer = document.querySelector("#user");
            closeUserTab();
            const userTab = document.createElement("div");
            userTab.classList.add("userTab");

            if (user.type == "Customer") {

                const transaction = document.createElement("p");
                const transactionLogo = document.createElement("img");


                transaction.classList.add("transaction");
                transactionLogo.classList.add("transactionLogo");



                transaction.style.cursor = "pointer";
                transaction.addEventListener("click", (event) => {
                    window.open("./transactions.html", "_self");
                })
                transactionLogo.style.cursor = "pointer";
                transactionLogo.addEventListener("click", (event) => {
                    window.open("./transactions.html", "_self");
                })
                transactionLogo.src = "../Media/Icons/transLogo.svg";
                transaction.innerHTML = "Transaction History";

                userTab.appendChild(transaction);
                userTab.appendChild(transactionLogo);
                userContainer.addEventListener("click", (event) => {
                    const u = document.querySelector(".username")
                    const ui = document.querySelector(".userImage")
                    u.style.display = "none";
                    userContainer.appendChild(userTab);
                })




            }
            else if (user.type == "Seller") {
                const sell = document.createElement("p");
                const sellLogo = document.createElement("img");


                sell.classList.add("sell");
                sellLogo.classList.add("sellLogo");



                sell.style.cursor = "pointer";
                sellLogo.style.cursor = "pointer";
                sell.addEventListener("click", (event) => {
                    window.open("./sell.html", "_self");
                })
                sellLogo.addEventListener("click", (event) => {
                    window.open("./sell.html", "_self");
                })
                sellLogo.src = "../Media/Icons/transLogo.svg";
                sell.innerHTML = "Sell Item";
                userTab.appendChild(sell);
                userTab.appendChild(sellLogo);
                userContainer.addEventListener("click", (event) => {
                    const u = document.querySelector(".username")
                    const ui = document.querySelector(".userImage")
                    u.style.display = "none";
                    userContainer.appendChild(userTab);
                })
            }
            userTab.addEventListener("mouseleave", (event) => {
                const u = document.querySelector(".username")
                u.style.display = "";
                userContainer.querySelector(".userTab").remove();
            })
        }
    }
    function closeUserTab() {
        const closeIt = document.querySelector(".userTab");
        console.log(closeIt);
        if (closeIt != null) {
            closeIt.replaceChildren();
            closeIt.remove();
        }

    }
    logged();
    renderFunctions();
    showUserTab();
    renderSort();
    renderFeaturedPhones();
    renderPhones();
});
