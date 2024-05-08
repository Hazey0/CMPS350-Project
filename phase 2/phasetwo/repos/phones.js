import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function getPhones(){

}
export async function deletePhone(){

}
export async function updatePhone(){

}
export async function addPhone(phone){

   await prisma.phone.create({
        data:{
            brand:phone.brand,
            model:phone.model,
            name:phone.name,
            price:phone.price,
            storage:phone.storage,
            seller:phone.seller,
            img:phone.img,
            
        }
    })
}
export async function addPhones(phones){
   await phones.map((phone)=>addPhone(phone))
    
}
export async function initt(){
    try {
        const response = await fetch('./repos/phones.json');
        if (!response.ok) {
          throw new Error('Failed to fetch phones data');
        }
        const phoneData = await response.json();
        addPhone(phoneData)
        // Use the phoneData here
      } catch (error) {
        console.error(error);
        // Handle error appropriately
      }
    }