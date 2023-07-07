import prisma from '../../prisma/client';
import bycrypt from 'bcrypt';

export async function signupService(email:string, password:string):Promise<{ email: string; id: number, success: boolean} | any> {
    try {
        const salt = await bycrypt.genSalt(10);
        const hash = await bycrypt.hash(password, salt);
        const checkUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(checkUser) {
            return { error: 'User already exists', success: false };
        }

        const user = await prisma.user.create({
            data: {
                email,
                password: hash
            }
        });
        
        if(user) {
            return { email: user.email, id: user.id, success: true };
        } else {
            return { error: 'User could not be created', success: false };
        }

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

export async function loginService(email:string, password:string):Promise<{ email: string; id: number, success: boolean} | any > {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(!user) {
            return { error: 'User does not exist', success: false };
        }

        const isMatch = await bycrypt.compare(password, user.password);

        if(!isMatch) {
            return { error: 'Invalid credentials', success: false };
        } else {
            return { email: user.email, id: user.id, success: true };
        }


    } catch (error:any) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}