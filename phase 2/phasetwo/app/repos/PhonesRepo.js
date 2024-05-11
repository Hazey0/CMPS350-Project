import *as stats from './stats';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


class PhonesRepo {
    async getAllPhones() {
        return await prisma.phone.findMany();
    }

    async addPhone(phoneData) {
       await stats.addPhone(phoneData.quantity)
        return await prisma.phone.create({
            data:{
                img     : phoneData.img     ,
                brand   : phoneData.brand   ,
                name    : phoneData.name    ,
                year    : phoneData.year    ,
                price   : phoneData.price   ,
                storage : phoneData.storage ,
                seller  : phoneData.seller  ,
                quantity: phoneData.quantity,

            }
        });
    }

    async updatePhone(id, updatedData) {
        return await prisma.phone.update({
            where: { id },
            data: updatedData
        });
    }

    async deletePhone(id) {
        return await prisma.phone.delete({
            where: { id }
        });
    }

    async getPhoneById(id) {
        return await prisma.phone.findUnique({
            where: { id }
        });
    }

    async toggleFeatured(id, featured) {
        return await prisma.phone.update({
            where: { id },
            data: { featured }
        });
    }
}

export default new PhonesRepo();

export async function addPhone(phone){
    stats.addPhone(Number(phone.quantity))
    await prisma.phone.create({
         data:{
             img:phone.img,
             brand:phone.brand,
             name:phone.name,
             year:phone.year,
             price:phone.price,
             storage:phone.storage,
             seller:phone.seller,
             quantity:phone.quantity,
             
         }
     })
 }

 export async function addPhones(phones){
    await phones.map((phone)=>addPhone(phone))
     
 }

