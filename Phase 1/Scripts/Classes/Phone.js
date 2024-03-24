
class Phone {
    brand;
    name;
    year;
    price;
    storage;
    img;
    seller;
    quantity = 1;
    constructor(b, n, y, p, s, i) {
        this.brand = b;
        this.name = n;
        this.year = y;
        this.price = p;
        this.storage = s;
        this.img = i;
    }
}
const phones = [
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
    /////////////////////////////////////////////////////
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

phones[0].seller = "mike"; phones[1].seller = "scammer"; phones[2].seller = "mike"; phones[3].seller = "scammer"; phones[4].seller = "mike"; phones[5].seller = "scammer"; phones[6].seller = "scammer"; phones[7].seller = "scammer"; phones[8].seller = "scammer"; phones[9].seller = "mike"; phones[10].seller = "mike"; phones[11].seller = "mike"; phones[12].seller = "mike"; phones[13].seller = "mike"; phones[14].seller = "mike"; phones[15].seller = "scammer"; phones[16].seller = "scammer"; phones[17].seller = "scammer"; phones[18].seller = "scammer"; phones[19].seller = "mike"; phones[20].seller = "mike"; phones[21].seller = "mike"; phones[22].seller = "mike"; phones[23].seller = "mike";

phones[0].quantity = 2; phones[1].quantity = 1; phones[2].quantity = 3; phones[3].quantity = 5; phones[4].quantity = 1; phones[5].quantity = 7; phones[6].quantity = 8; phones[7].quantity = 3; phones[8].quantity = 2; phones[9].quantity = 2; phones[10].quantity = 1; phones[11].quantity = 4; phones[12].quantity = 1; phones[13].quantity = 6; phones[14].quantity = 7; phones[15].quantity = 4; phones[16].quantity = 3; phones[17].quantity = 9; phones[18].quantity = 7; phones[19].quantity = 4; phones[20].quantity = 3; phones[21].quantity = 1; phones[22].quantity = 2; phones[23].quantity = 3;

localStorage.setItem("phones", JSON.stringify(phones));