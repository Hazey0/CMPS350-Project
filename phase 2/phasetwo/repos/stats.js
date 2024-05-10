import prisma from "./prisma";
const stat="clvy93rz00003d2sr8jss181x"
export async function addPhone(quan){
    await prisma.stat.update({
        where:{
            id:stat
        },
        data:{
            currentListedPhone:{increment:quan},
        }
    })
}
export async function soldPhone(quan){
    if(quan==1){
        console.log("jdhscbusjidchbduhbcjhsdbcjhdsbcjhsbdchjksbdcvjk");
    }
    await prisma.stat.update({
        where:{
            id:stat
        },
        data:{
            soldPhones:{increment:quan},
            currentListedPhone:{decrement:quan}
        }
    })
}
export async function getStats(){
    return await prisma.stat.findUnique({
        where:{
            id:stat,
        },

    })
}
export async function newGuest(){
    await prisma.stat.update({
        where:{
            id:stat
        },
        data:{
            vistedToday:{increment:1}
        }
    })
}
export async function addCustomer(){
    await prisma.stat.update({
        where:{
            id:stat
        },
        data:{
          numberOfCustomers:{increment:1}  
        }
    })
}
export async function addSeller(){
    await prisma.stat.update({
        where:{
            id:stat
        },
        data:{
          numberOfSellers:{increment:1}  
        }
    })
}
export async function resetStats(){
    await prisma.stat.update({
        where:{
            id:stat,
        },
        data:{
            listedToday:0,
            numberOfCustomers:0,
            numberOfSellers:0,
            soldPhones:0,
            vistedToday:0,
            currentListedPhone:0,
        }
    })

}

