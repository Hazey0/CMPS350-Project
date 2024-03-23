
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
    new Phone("Samsung","Galaxy S23",2023,1250,256,"../Media/images/s23.jpg"),
    new Phone("Apple","IPhone 14",2023,1300,128,"../Media/images/s21plus.jpg"),
    new Phone("One Plus","9T",2022,800,256,"../Media/images/9T.jpg"),
    new Phone("Google","Pixle 5",2018,650,128,"../Media/images/pixel5.jpg"),
    new Phone("Samsung","Galaxy S24 Ultra",2024,1300,512,"../Media/images/s24U.jpg"),
    new Phone("Nokia","P10",2022,500,64,"../Media/images/nokia.jpg"),
    new Phone("Xaomi","Mi 10",2023,1050,256,"../Media/images/mi10.jpg"),
    new Phone("Samsung","Galaxy S21 Plus",2022,1000,256,"../Media/images/s21plus.jpg"),
]
phones[0].seller="mike";
phones[1].seller="scammer";
phones[2].seller="mike";
phones[3].seller="scammer";
phones[4].seller="mike";
phones[5].seller="scammer";
phones[6].seller="mike";

localStorage.setItem("phones",JSON.stringify(phones));