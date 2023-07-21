import { Request, Response, NextFunction } from 'express';
import { getAllUsers, getUserById, updateUserById } from './user.service';


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

export async function updateUser(req:Request, res:Response, next:NextFunction) {
    const { userID } = req.params;
    const userInfo = req.body;
    console.log(userInfo);
    try {
        const user = await updateUserById(parseInt(userID), userInfo);
        if(user?.success) {
            res.status(200).send({ message: 'User updated successfully' });
        } else if(user?.success === false) {
            res.status(400).send({ message: 'error updating user' });
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error updating user');
    }
}