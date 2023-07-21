import prisma from "../../prisma/client";

export async function getAllUsers() {
    try {
        const users = await prisma.user.findMany();
        const usersWithoutPassword = users.map(user => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });

        return usersWithoutPassword;
    } catch (error) {
        console.error(error);
        return
    } finally {
        await prisma.$disconnect();
    }
};

export async function getUserById(id: number) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        });

        if(user) {
            return { email: user.email, id: user.id, success: true };
        } else {
            return { error: 'User does not exist', success: false };
        }
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
};
