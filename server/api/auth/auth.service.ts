import prisma from '../../prisma/client';
import bycrypt from 'bcrypt';

export async function signupService(email:string, password:string):Promise<{ email: string; id: number} | any> {
    try {
        const salt = await bycrypt.genSalt(10);
        const hash = await bycrypt.hash(password, salt);
        const checkUser = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if(checkUser) {
            return { error: 'User already exists' };
        }

        const user = await prisma.user.create({
            data: {
                email,
                password: hash
            }
        });
        
        if(user) {
            return { email: user.email, id: user.id };
        } else {
            return null;
        }

    } catch (error) {
        return error;
    } 
}