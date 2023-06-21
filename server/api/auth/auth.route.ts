import { Router } from "express";
import passport from "passport";
import { login, signup, logout } from "./auth.controller";


const authRoutes = Router();
authRoutes.post('/signup', signup);
authRoutes.get('/login', passport.authenticate('local'), login);
authRoutes.post('/logout', logout);



export default authRoutes;