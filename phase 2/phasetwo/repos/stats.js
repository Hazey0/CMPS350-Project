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

