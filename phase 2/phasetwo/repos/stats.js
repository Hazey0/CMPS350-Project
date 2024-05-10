import prisma from "./prisma";
const stat="clvy93rz00003d2sr8jss181x"
export async function addPhone(){
    await prisma.stat.update({
        where:{
            id:stat
        },
        data:{
            currentListedPhone:{increment:1},
        }
    })
}
export async function soldPhone(){
    await prisma.stat.update({
        where:{
            id:stat
        },
        data:{
            soldPhones:{increment:1},
            currentListedPhone:{decrement:1}
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

