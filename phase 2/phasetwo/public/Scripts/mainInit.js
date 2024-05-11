
import { logged } from "./LogFunction.js";
import { renderFeaturedPhones, renderPhone, renderPhones } from "./renderPhones.js";
import { showUserTab } from "./userTabFunction.js";
import { renderSort } from "./sortFunction.js";
//import { yourPath, mainPath } from "./paths.js"
import { searchPhone } from "./searchFunction.js";


function renderFunctions() {

        

    //if (mainPath == yourPath) {
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
            const searchRequest = document.querySelector("#searchBar").value;
            if (searchRequest != "") {
                localStorage.removeItem("searchedPhones")
                searchPhone();
            }
        })
    //}
}

document.addEventListener("DOMContentLoaded",function(event)  {
    alert("dc")
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    console.log("inside main");


   








    let searchedPhones = [];













 
});
logged();
renderFunctions();
showUserTab()
renderSort();
renderFeaturedPhones();
renderPhones();



 
    


