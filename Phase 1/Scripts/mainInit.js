
document.addEventListener("DOMContentLoaded", () => {
    const phonesData = localStorage.getItem("phones");
    const phones = JSON.parse(phonesData);
    console.log(window.location)
    const featuredPhones = [];
    featuredPhones.push(phones[0]);
    featuredPhones.push(phones[1]);
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const yourPath="file:///C:/Users/Haze/Documents/GitHub/CMPS350-Project/Phase%201/Websites/main.html"

    function renderFunctions() {
        if(window.location.href=="file:///C:/Users/Haze/Documents/GitHub/CMPS350-Project/Phase%201/Websites/main.html"){
        const searchButton = document.querySelector("#searchButton");
        const searchImg = document.querySelector(".searchImage");
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
        if(window.location.href==yourPath){
        const container = document.querySelector("#items");
        container.replaceChildren();
        phones.forEach((phone) => container.appendChild(renderPhone(phone)));}
    }

    function renderPhone(phone) {
        const phoneBox = document.createElement("div");
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
        price.innerHTML = "price: " + phone.price + "QR";
        storage.innerHTML = "Storage: " + phone.storage+"GB";
        img.src = phone.img;
        itemLink.addEventListener("click", (event) => {
            localStorage.setItem("item", JSON.stringify(phone));

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
        if(window.location.href==yourPath){
        const container = document.querySelector("#featuredPhones");
        container.replaceChildren();
        featuredPhones.forEach((phone) => container.appendChild(renderFeaturedPhone(phone)));}
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
        price.innerHTML = "price: " + phone.price + "QR";
        storage.innerHTML = "Storage: " + phone.storage+"GB";
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






    function searchPhone() {
        if (document.querySelector(".cancelSearch") != null) {
            document.querySelector(".cancelSearch").remove();
        }
        const searchRequest = document.querySelector("#searchBar").value;
        const keywords = searchRequest.split(" ");

        const splits = (a) => a.toLowerCase().split(" ");
        const searchString = (keys, value) => keys.reduce((a, v) => splits(value).reduce((x, s) => s.startsWith(v) ? true : x, false) ? true : a, false)
        const searchInt = (keys, int) => keys.reduce((a, v) => v == int ? true : a, false);
        const searchResult = phones.filter((e) =>

            searchString(keywords, e.brand) && searchString(keywords, e.name) || searchString(keywords, e.brand) && searchInt(keywords, e.storage) ||
            searchString(keywords, e.brand) && searchInt(keywords, e.year) || searchString(keywords, e.brand) ||
            searchString(keywords, e.name) && searchInt(keywords, e.year) || searchString(keywords, e.name) ||
            searchString(keywords, e.name) && searchInt(keywords, e.storage) || searchInt(keywords, e.year) ||
            searchInt(keywords, e.storage) || searchInt(keywords, e.storage) && searchInt(keywords, e.year) ||
            searchInt(keywords, e.year)


        )




        const container = document.querySelector("#items");
        container.replaceChildren();
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
        console.log(user)
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
        open("./main.html");
        close();

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




    function sort(t, dir) {
        const type = t.toString();
        if (type == "price") {
            if (dir == "asc") {
                renderAfterSort(phones.sort((a, b) => a.price - b.price))
            }
            else if (dir == "dsc") {
                renderAfterSort(phones.sort((a, b) => b.price - a.price))
            }
        }
        //////////////////////
        if (type == "name") {
            if (dir == "asc") {
                renderAfterSort(phones.sort((a, b) => compare(a.brand, b.brand) ? -1 : compare(b.brand, a.brand) ? 1 : 0))
            }
            else if (dir == "dsc") {
                renderAfterSort(phones.sort((a, b) => compare(a.brand, b.brand) ? 1 : compare(b.brand, a.brand) ? -1 : 0))
            }
        }
        /////////////
        if (type == "storage") {
            if (dir == "asc") {
                renderAfterSort(phones.sort((a, b) => a.storage - b.storage))
            }
            else if (dir == "dsc") {
                renderAfterSort(phones.sort((a, b) => b.storage - a.storage))
            }
        }
        if (type == "year") {
            if (dir == "asc") {
                renderAfterSort(phones.sort((a, b) => a.year - b.year))
            }
            else if (dir == "dsc") {
                renderAfterSort(phones.sort((a, b) => b.year - a.year))
            }
        }
    }
    function renderAfterSort(phonz) {
        const container = document.querySelector("#items");
        container.replaceChildren();
        phonz.forEach((phone) => container.appendChild(renderPhone(phone)));
    }
    function renderSort() {
        if(window.location.href==yourPath){
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
        nameImg.style.cursor="pointer";
        yearImg.style.cursor="pointer";
        priceImg.style.cursor="pointer";
        storageImg.style.cursor="pointer";
        nameImg.src = "../Media/icons/sort.svg"
        yearImg.src = "../Media/icons/sort.svg"
        priceImg.src = "../Media/icons/sort.svg"
        storageImg.src = "../Media/icons/sort.svg"
        /////assign names/////////
        name.innerHTML = "name";
        price.innerHTML = "price";
        year.innerHTML = "year";
        storage.innerHTML = "storage";

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
        name.addEventListener("mouseleave",(event) => {replaceSortType(); });
        price.addEventListener("mouseleave",(event) => {replaceSortType(); });
        year.addEventListener("mouseleave",(event) => {replaceSortType(); });
        storage.addEventListener("mouseleave",(event) => {replaceSortType(); });
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
        asc.addEventListener('click', (event) => { replaceSortType(), sort(type, asc.value) })
        dsc.addEventListener('click', (event) => { replaceSortType(), sort(type, dsc.value) })
        typeContain.appendChild(asc);
        typeContain.appendChild(dsc);
        node.appendChild(typeContain);
        //typeContain.appendChild(node);

    }
    renderSort();
    logged();
    renderFunctions();
    renderFeaturedPhones();
    renderPhones();
});
