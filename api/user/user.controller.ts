import { Request, Response, NextFunction } from 'express';
import { getAllUsers, getUserById } from './user.service';


export async function getUser(req:Request, res:Response, next:NextFunction) {
    console.log(req.params);
    const { userID } = req.params;
    console.log(userID);
    try {
        const user = await getUserById(parseInt(userID));
        if(user?.success) {
            res.status(200).send({ email: user.email, id: user.id });
        } else if(user?.success === false) {
            res.status(400).send({ message: user.error });
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getUsers(req:Request, res:Response, next:NextFunction) {
    try {
        const users = await getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
    }
}