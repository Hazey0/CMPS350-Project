import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

class UsersRepo {
    async addUser(userData, userType) {
        switch (userType) {
            case 'seller':
                return await prisma.seller.create({ data: userData });
            case 'customer':
                return await prisma.customer.create({ data: userData });
            case 'admin':
                return await prisma.admin.create({ data: userData });
            default:
                throw new Error("Invalid user type");
        }
    }

    async updateUser(id, updatedData, userType) {
        switch (userType) {
            case 'seller':
                return await prisma.seller.update({ where: { id }, data: updatedData });
            case 'customer':
                return await prisma.customer.update({ where: { id }, data: updatedData });
            case 'admin':
                return await prisma.admin.update({ where: { id }, data: updatedData });
            default:
                throw new Error("Invalid user type");
        }
    }

    async deleteUser(id, userType) {
        switch (userType) {
            case 'seller':
                return await prisma.seller.delete({ where: { id } });
            case 'customer':
                return await prisma.customer.delete({ where: { id } });
            case 'admin':
                return await prisma.admin.delete({ where: { id } });
            default:
                throw new Error("Invalid user type");
        }
    }

    async getUserById(id, userType) {
        switch (userType) {
            case 'seller':
                return await prisma.seller.findUnique({ where: { id } });
            case 'customer':
                return await prisma.customer.findUnique({ where: { id } });
            case 'admin':
                return await prisma.admin.findUnique({ where: { id } });
            default:
                throw new Error("Invalid user type");
        }
    }
}

export default new UsersRepo();



export async function getCustomers(){
   return await prisma.customer.findMany()
}
export async function getSellers(){
   return await prisma.seller.findMany()
}
export async function getAdmins(){
   return await prisma.admin.findMany()
}