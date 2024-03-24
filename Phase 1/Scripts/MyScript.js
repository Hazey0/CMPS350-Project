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
const e=["ok","e","fed"];



function letterss(word){
    const list=[]

    word=word.toLowerCase();
    for(var i=0 ;i<word.length; i++){
        list.push(word[i]);
    }
    return list;
}
function compare(ae,be){
    const a=wordInt(ae);
    const b=wordInt(be);
    let er=1;
    let len=0;
    if(a.length<b.length){
        len=a.length;
    }
    else{
        len=b.length;
    }


    for(var w=0; w<len;w++){
        let ax=a[w];
        let bx=b[w];
        if(ax>bx){
            console.log(a[w]+" > "+b[w]);
            console.log(ae+" is bigger than "+be)
            return 2;
        }
        else if(a[w]==b[w]){

        }
        else if(a[w]<b[w]){
            console.log(a[w]+" < "+b[w]);
            console.log(ae+" is smaller than "+be)
            return 0
        }
    }
    console.log(er+" ."+ae+" ."+be)
    return er;
    
}



    const gh=[{name:"lion"},{name:"egor"},{name:"axl"}];

 
    function wordInt(word){
         const strength=[]
         const letters=letterss(word);
        const numsAndLets=[{let:"a",num:25},{let:"b",num:24},{let:"c",num:23},{let:"d",num:22},{let:"e",num:21},{let:"f",num:20},{let:"g",num:19},{let:"h",num:18},{let:"i",num:17},{let:"j",num:16},{let:"k",num:15},{let:"l",num:14},{let:"m",num:13},{let:"n",num:12},{let:"o",num:11},{let:"p",num:10},{ let:"q",num:9},{ let:"r",num:8},{ let:"s",num:7},{ let:"t",num:6},{ let:"u",num:5},{ let:"v",num:4},{ let:"w",num:4},{ let:"x",num:3},{ let:"y",num:2},{let:"z",num:1}
        ]
        for(var s=0; s<letters.length;s++){
            for(var d=0;d<numsAndLets.length; d++){
                let o=letters[s];
                let j=numsAndLets[d].let;
                if(letters[s]==numsAndLets[d].let){
                    strength.push(numsAndLets[d].num);
                }
            }
        }
        return strength;
    }




function sort(t,dir){
    const type=t.toString();
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
            renderAfterSort(phones.sort((a, b) => compare(a.brand,b.brand) ? -1 : compare(b.brand,a.brand) ? 1:0 ))
        }
        else if (dir == "dsc") {
            renderAfterSort(phones.sort((a, b) => compare(a.brand,b.brand) ? 1 : compare(b.brand,a.brand) ? -1:0 ))
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
function renderAfterSort(p){
    //console.log(p);
}


//const splits=(a)=>a.toLowerCase().split(" ");
//const searchString=(keys,value) => keys.reduce((a,v)=>  splits(value).reduce((x,s)=>s.startsWith(v) ? true:x,false)                  ? true : a,false)
//const searchString2=(keys,value) => keys.reduce((a,v)=> value.toLowerCase().startsWith(v.toLowerCase()) ? true : a,false)
//const searchInt =(keys,int)=> keys.reduce((a,v)=> v==int ? true : a,false);
//const searchResult = phones.filter((e) =>
//
//        searchString(keywords,e.brand) && searchString(keywords,e.name)  ||
//        searchString(keywords,e.name) && searchInt(keywords,e.year)     ||
//        searchString(keywords,e.brand) && searchInt(keywords,e.year)    ||
//        searchString(keywords,e.name) && searchInt(keywords,e.storage)  ||
//        searchString(keywords,e.brand) && searchInt(keywords,e.storage) ||
//        searchString(keywords,e.name)
//    )
//


console.log("--------------")
sort("year","asc");
console.log(phones);
