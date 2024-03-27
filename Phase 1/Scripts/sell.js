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



    function init(){
        
        const storage=document.querySelector("#storage")
        const confirm=document.createElement("button");
        confirm.innerHTML="confirm";
        confirm.classList.add("button");
        const submitTab=document.querySelector("#submitTab");
        console.log(submitTab);
        const submitButton=document.querySelector("#submitButton");
        console.log(submitButton)
        submitTab.addEventListener("click",(event)=>{
           
            if(checkInputs()){
                submitButton.style.display="none";
                submitTab.appendChild(confirm);
                confirm.addEventListener("click",(event)=>{
                   
                    submits();
                })
               
                
            }
        })


    }
    function checkInputs(){
        const brand=document.querySelector("#brand").value;
        const model=document.querySelector("#model").value;
        const price=document.querySelector("#price").value;
        const year=document.querySelector("#year").value;
        const storage=document.querySelector("#storage").value;
        const img=document.querySelector("#image").value;
        const quantity=document.querySelector("#quantity").value;

        console.log(brand!="")
        console.log(model!=0)
        console.log(price>0)
        console.log(storage>=16)
        console.log(img!='')
        console.log(quantity)

        if(brand!=""  &&   model!=""    &&   price!=""       && storage>=16     && img!=""  && quantity>0 && year>0){
            return true;
        }
        else{
            alert("filed missing")
            false
        }
    }
    function submits(){
        const brand=document.querySelector("#brand").value;
        const model=document.querySelector("#model").value;
        const year=document.querySelector("#year").value;
        const price=document.querySelector("#price").value;
        const storage=document.querySelector("#storage").value;
        const img=document.querySelector("#image").value;
        const quantity=document.querySelector("#quantity").value;
        console.log("price:"+price)
        console.log(brand)
        console.log(model)
        console.log(price)
        console.log(storage)
        console.log(img)
        console.log(quantity)
        let newPhone={};
        newPhone.brand=brand;
        newPhone.name=model;
        newPhone.year=year;
        newPhone.price=price
        newPhone.storage=storage;
        newPhone.img=getImg(img);
        newPhone.quantity=quantity;
        newPhone.seller=user.username;
        phones.push(newPhone);
        localStorage.removeItem("phones");
        localStorage.setItem("phones",JSON.stringify(phones));
        console.log(phones)
        localStorage.setItem("phone",JSON.stringify(newPhone))
        alert("phone listed successfully")
        window.open("item.html","_self");
        
    }

    function getImg(img){
        let p=[];
         p=img.split("\\")
        const imgName=p.pop();
        return "../Media/images/"+imgName
    }
    //function moveFile(img){
    //    var object = new ActiveXObject("Scripting.FileSystemObject");
    //    var file = object.GetFile(img);
    //    console.log(file+"file int")
    //    console.log(mainPath+"target path")
    //    file.Move(mainPath);
    // }


    init();
    logged()
    showUserTab()



});