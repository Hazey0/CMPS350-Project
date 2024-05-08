import { addPhones, getPhones } from './phones'
import phones from './phones.json' with {type:"json"}
import prisma from './prisma'
export async function starter() {
    console.log("looooooooooooooooooooool"+await getPhones());
    const e=await getPhones()
    console.log(e);
    if(e.length==0){
    addPhones(phones)}

}

