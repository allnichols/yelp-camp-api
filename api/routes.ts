import { Router, Request, Response } from "express";
import campsRoutes from "./camps/index";
import authRoutes from "./auth/auth.route";
import userRoutes from "./user/user.route";

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
    res.send('OK');
});

router.use('/api/auth', authRoutes);
router.use('/api/users', userRoutes);
router.use('/api/camps', campsRoutes);



export default router;
