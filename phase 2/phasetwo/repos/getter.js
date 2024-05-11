import PhonesRepo, {addPhones} from './PhonesRepo'
import UsersRepo, { getAdmins, getCustomers, getSellers } from './UsersRepo'
import phones from './storage/phones.json' with {type:"json"}
import sellersData from './storage/sellers.json' with {type:"json"}
import customersData from './storage/customers.json' with {type:"json"}
import adminsData from './storage/admins.json' with {type:"json"}
import prisma from './prisma'
import * as stats from './stats'
export async function starter() {
    console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
    const customer= await getCustomers()
    const seller= await getSellers()
    const admins= await getAdmins()
    console.log(customer+seller+admins+"ksjdbcikjhsbdcjkhsbdckjswhbdcjkhsbdcjkhbscjkhbskjhdcbksbdckjhsbcnjhksdbchkjsbdc");
    if(customer.length==0){
        await stats.resetStats()
       await customersData.map(async (user)=>{ await UsersRepo.addCustomer(user)
        stats.addCustomer()
       })
    }
    if(seller.length==0){
        await sellersData.map((user)=>{
            UsersRepo.addSeller(user)
           stats.addSeller() 
        })
    }
    if(admins.length==0){
        await adminsData.map(async(user)=>{await UsersRepo.addAdmin(user)})
    }
    const e=await PhonesRepo.getAllPhones()
    if(e.length==0){
    await addPhones(phones)
    
    }

}

