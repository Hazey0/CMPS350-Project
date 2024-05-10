import { addPhones, getPhones } from './PhonesRepo'
import phones from './phones.json' with {type:"json"}
import prisma from './prisma'
export async function starter() {
    const e=await getPhones()
    if(e.length==0){
    addPhones(phones)}

}

