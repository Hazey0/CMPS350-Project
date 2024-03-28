import { logged } from "./LogFunction.js";
import { showUserTab } from "./userTabFunction.js";

document.addEventListener("DOMContentLoaded", () => {
    const userData = localStorage.getItem("user");
    const user = JSON.parse(userData);
    //const data = localStorage.getItem("item");
    //const phone = JSON.parse(data);

    const phonesData = localStorage.getItem("phones");
    const phones = JSON.parse(phonesData);


    const getPage = (a) => a.split("/").reduce((a, v) => v)
    const yourPath = getPage(window.location.pathname);
    const mainPath = ".html";
    const prevData=localStorage.getItem("prevPath");
    const prevPath=JSON.parse(prevData);
    console.log("current :"+yourPath)
    console.log("previous:"+prevPath);

    logged();
    showUserTab();

})