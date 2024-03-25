function notEmpty(li){
    return li.length!==0;
}


function searchAlgo(){
    let result=[];
 
    let keywords=["galaxy","s21"]
    keywords.reverse();
    const e="fr"
    const clearSpace=(li)=>( i.filter((e)=>e!=""))
    ////methods////
    const splits = (a) => a.toLowerCase().split(" ").filter((x)=>x!='');
    const searchInt = (keys, int) => keys.reduce((a, v) => v == int ? true : a, false);
    const searchString2 = (keys, value) => keys.reduce((a, v) => splits(value).reduce((x, s) => s.startsWith(v)&&s.endsWith(v) ? true : x, false) ? true : a, false)
    const searchString = (keys, value) => keys.reverse().reduce((a, v) => {
        let r;
        r= splits(value).reverse().reduce((x, s) =>s.endsWith(v) ? true : x, false)
        //console.log(r);
        if(r){
            return true
        }
        r= splits(value).reverse().reduce((x, s) =>s.endsWith(v)? true : x, false);
       // console.log(r);
        
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
    result= phones.filter((e) =>
    
    (

        searchString(keywords, e.name) )
    )

    if(notEmpty(result)){
        console.log("2nd")
        return result;
    }
///////////3rd search////////////
    result= phones.filter((e) =>
    
    (
        searchString(keywords, e.brand) && searchString(keywords, e.name) )
    )
    if(notEmpty(result)){
        console.log("3rd")
        return result;
    }
///////////4th search////////////

    result= phones.filter((e) =>
    
    ((searchString(keywords, e.brand) && searchString(keywords, e.name) || searchString(keywords, e.brand) && searchInt(keywords, e.storage) ||
        searchString(keywords, e.brand) && searchInt(keywords, e.year) || searchString(keywords, e.name) && searchInt(keywords, e.year) ||
        searchString(keywords, e.name) && searchInt(keywords, e.storage) || searchInt(keywords, e.storage) && searchInt(keywords, e.year) )
                    ||


        (searchString(keywords, e.brand) || searchString(keywords, e.name) ||    searchInt(keywords, e.year) || searchInt(keywords, e.storage)))

    )
    if(notEmpty(result)){
        console.log("4th")
        return result;
    }
    

}
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
    new Phone("Samsung","Galaxy S23",2023,1650,256,"../Media/images/s23.jpg"),
    new Phone("Apple","IPhone 14",2023,2300,128,"../Media/images/iPhone14.jpg"),
    new Phone("One Plus","9T",2022,800,256,"../Media/images/9T.jpg"),
    new Phone("Google","Pixle 5",2018,650,128,"../Media/images/pixel5.jpg"),
    new Phone("Samsung","Galaxy S24 Ultra",2024,5300,512,"../Media/images/s24U.jpg"),
    new Phone("Nokia","P10",2022,500,64,"../Media/images/nokia.jpg"),
    new Phone("Xaomi","Mi 10",2023,1050,256,"../Media/images/mi10.jpg"),
    new Phone("Samsung","Galaxy S21 Plus",2022,1000,256,"../Media/images/s21plus.jpg"),
]
console.log(searchAlgo());



