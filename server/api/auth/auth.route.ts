import { Router } from "express";
import { login, signup, logout } from "./auth.controller";

const authRoutes = Router();

authRoutes.post('/signup', signup);
authRoutes.get('/login', login);
authRoutes.get('/logout', logout);



export default authRoutes;