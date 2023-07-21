import { Router } from 'express';
import { getUser, getUsers } from './user.controller';

const userRoutes = Router();
userRoutes.get('/', getUsers);
userRoutes.get('/:userID', getUser);

export default userRoutes;