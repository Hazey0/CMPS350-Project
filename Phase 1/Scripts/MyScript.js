
class Phone{
    brand;
    name;
    year;
    price;
    storage;
    img;
    seller;
    constructor(b,n,y,p,s,i){
        this.brand=b;
        this.name=n;
        this.year=y;
        this.price=p;
        this.storage=s; 
        this.img=i;
    }
}
const phones= [
    new Phone("Samsung", "Galaxy S23", 2023, 1650, 256, "../Media/images/s23.jpg"),
    new Phone("Apple", "IPhone 14", 2023, 2300, 128, "../Media/images/iPhone14.jpg"),
    new Phone("One Plus", "9T", 2022, 800, 256, "../Media/images/9T.jpg"),
    new Phone("Google", "Pixle 5", 2018, 650, 128, "../Media/images/pixel5.jpg"),
    new Phone("Samsung", "Galaxy S24 Ultra", 2024, 5300, 512, "../Media/images/s24U.jpg"),
    new Phone("Nokia", "P10", 2022, 500, 64, "../Media/images/nokia.jpg"),
    new Phone("Xaomi", "Mi 10", 2023, 1050, 256, "../Media/images/mi10.jpg"),
    new Phone("Samsung", "Galaxy S21 Plus", 2022, 1000, 256, "../Media/images/s21plus.jpg"),
    new Phone("Google", "Pixel 7", 2023, 1899, 128, "../Media/images/pixel7.jpg"),
    new Phone("Apple", "iPhone 13 Pro", 2022, 2099, 256, "../Media/images/iphone13.jpg"),
    new Phone("Xiaomi", "Redmi Note 12 Pro+", 2024, 1450, 256, "../Media/images/redmi12.jpg"),
    new Phone("Sony", "Xperia 1 IV", 2023, 5499, 512, "../Media/images/sonyx.jpg"),
    new Phone("OnePlus", "Nord CE 3", 2024, 1399, 128, "../Media/images/OnePlusCE.jpg"),
    new Phone("Vivo", "V27 Pro", 2024, 1799, 256, "../Media/images/vivo.PNG"),
    new Phone("Huawei", "Mate 50 Pro", 2023, 5249, 512, "../Media/images/mat.jpg"),
    new Phone("Honor", "Magic 5 Lite", 2024, 1420, 128, "../Media/images/honor.PNG"),
    new Phone("ZTE", "Axon 40 Pro", 2024, 2849, 256, "../Media/images/Axon.jpg"),
    new Phone("Apple", "iPhone 14", 2022, 4499, 1028, "../Media/images/iphone14.jpg"),
    new Phone("Google", "PIXEL 7 Pro", 2023, 3499, 256, "../Media/images/pixel7.jpg"),
    new Phone("Microsoft", "Surface Duo 2", 2020, 6499, 256, "../Media/images/duo.PNG"),
    new Phone("Samsung", "Galaxy S23 Plus", 2023, 3099, 256, "../Media/images/s23.jpg"),
    new Phone("Huawei", "Mate 50 Ultra", 2020, 4499, 256, "../Media/images/mat.jpg"),
    new Phone("Apple", "iPhone 12", 2020, 2499, 256, "../Media/images/iphone13.jpg"),
    new Phone("Samsung", "Galaxy Z Fold 5", 2024, 8499, 1028, "../Media/images/fold5.jpg"),
    new Phone("ZTE", "Axon 40", 2020, 499, 128, "../Media/images/Axon.jpg"),
    new Phone("Motorola", "Moto G83", 2024, 1496.3, 128, "../Media/images/MotoG83.jpg"),
    new Phone("LG", "Wing 5G", 2022, 2773.3, 256, "../Media/images/LGWing5G.jpg"),
    new Phone("Asus", "ROG Phone 6", 2023, 4086.3, 512, "../Media/images/AsusROGPhone6.PNG"),
    new Phone("BlackBerry", "KEY2 LE", 2018, 1298.3, 64, "../Media/images/BlackBerryKEY2LE.jpg"),
    new Phone("TCL", "20 Pro 5G", 2024, 1846.3, 128, "../Media/images/TCL20Pro5G.jpg"),
    new Phone("Sharp", "Aquos Zero 3", 2023, 3356.3, 256, "../Media/images/SharpAquosZero3.jpg"),
    new Phone("Sony", "Xperia 1 V", 2024, 5193.3, 512, "../Media/images/SonyXperia1V.jpg"),
    new Phone("Google", "Pixel 8a", 2024, 1846.3, 128, "../Media/images/Pixel8a.jpg"),
    new Phone("OnePlus", "Nord 3", 2024, 2606.3, 256, "../Media/images/OnePlusNord3.jpg"),
    new Phone("Xiaomi", "Redmi Note 13 Pro", 2024, 4836.3, 256, "../Media/images/RedmiNote13Pro.jpg"),
    new Phone("Nokia", "X30 5G", 2024, 1496.3, 128, "../Media/images/NokiaX30.jpg"),
    new Phone("Samsung", "Galaxy A54", 2024, 1666.3, 128, "../Media/images/A54.jpg"),
    new Phone("Apple", "iPhone SE 4", 2024, 2043.3, 128, "../Media/images/iPhoneSE4.jpg"),
    new Phone("Vivo", "X90 Pro+", 2024, 8541.3, 512, "../Media/images/VivoX90Pro+.jpeg"),
    new Phone("Huawei", "Nova 10 SE", 2024, 1846.3, 128, "../Media/images/HuaweiNova10SE.PNG"),
    new Phone("Honor", "Magic Vs", 2024, 6716.3, 256, "../Media/images/HonorMagicVs.jpg"),
    new Phone("ZTE", "Nubia Z50 Ultra", 2024, 3111.3, 512, "../Media/images/ZTENubiaZ50Ultra.jpg"),
    new Phone("Microsoft", "Surface Duo 3", 2024, 8996.3, 512, "../Media/images/SurfaceDuo3.PNG"),
    new Phone("Tecno", "Phantom X3", 2024, 3333.3, 256, "../Media/images/TecnoPhantomX3.jpg"),
    new Phone("Samsung", "Galaxy Z Fold 5", 2024, 8999, 512, "../Media/images/GalaxyZFold5.jpg"),

]
function notEmpty(li){
    return li.length!==0;
}

function searchAlgo(){
    let result=[];
 

    const searchRequest = "galaxy s21"
    let keywords = searchRequest.split(" ");
    const len=keywords.length
    console.log(len);
    keywords.reverse();
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



// Read the JSON data from the file
const yourPath="item.html"
const img="C:\\fakepath\\banner2.jpg"

const nep=getImg(img);
function getImg(img){
    let p=[];
     p=img.split("\\")
    const imgName=p.pop();
    console.log("IMG PATHC:"+imgName)
    console.log("the path:"+yourPath)
    const newP=yourPath+imgName
    console.log("img path:"+newP);
    return newP
}



