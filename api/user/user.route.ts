import { Router } from 'express';
import { getUser, getUsers, updateUser } from './user.controller';

const userRoutes = Router();
userRoutes.get('/', getUsers);
userRoutes.get('/:userID', getUser);
userRoutes.put('/:userID', updateUser);

export default userRoutes;