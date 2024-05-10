import PhonesRepo, { addPhones, getPhones } from './PhonesRepo'
import UsersRepo, { getAdmins, getCustomers, getSellers } from './UsersRepo'
import phones from './storage/phones.json' with {type:"json"}
import sellersData from './storage/sellers.json' with {type:"json"}
import customersData from './storage/customers.json' with {type:"json"}
import adminsData from './storage/admins.json' with {type:"json"}
import prisma from './prisma'
import { addCustomer, addSeller, resetStats } from './stats'
export async function starter() {
    const e=await PhonesRepo.getAllPhones()
    if(e.length==0){
    await phones.map((phone)=>{PhonesRepo.addPhone(phone)})
    await resetStats()
    }
    const customer= await getCustomers()
    const seller= await getSellers()
    const admins= await getAdmins()
    if(customer.length==0){
       await customersData.map((user)=>{UsersRepo.addUser(user,"customer")
        addCustomer()
       })
    }
    if(seller.length==0){
        await sellersData.map((user)=>{
            UsersRepo.addUser(user,"seller")
           addSeller() 
        })
    }
    if(admins.length==0){
        await adminsData.map((user)=>{UsersRepo.addUser(user,"admins")})
    }
}

