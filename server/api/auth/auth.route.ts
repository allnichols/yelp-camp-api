import { Router } from "express";
import { login } from "./auth.controller";

const authRoutes = Router();

authRoutes.get('/login', login);