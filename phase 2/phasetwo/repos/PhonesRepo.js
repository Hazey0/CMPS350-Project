
import { PrismaClient } from '@prisma/client';
import { addPhone } from './stats';
const prisma = new PrismaClient();


class PhonesRepo {
    async getAllPhones() {
        return await prisma.phone.findMany();
    }

    async addPhone(phoneData) {
        addPhone(phoneData.quantity)
        return await prisma.phone.create({
            data: phoneData
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
