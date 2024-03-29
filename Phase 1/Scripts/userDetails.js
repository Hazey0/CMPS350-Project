import { showUserTab } from "./userTabFunction.js";
import { logged } from "./LogFunction.js";
import {loadCustomerDetails,loadSellerDetails,loadAdminDetails} from "../Scripts/userDetailsFunctions.js"
document.addEventListener("DOMContentLoaded",()=>{

    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);

function loadUserDetails(){


    if(user.type=="seller"){
        loadSellerDetails(user);
    }
    else if(user.type=="Customer"){
        loadCustomerDetails(user)

    }
    else if(user.type=="admin"){
        loadAdminDetails(user)
    }
}

loadUserDetails();
logged();
showUserTab()
})