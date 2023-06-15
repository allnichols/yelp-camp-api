import { Router, Request, Response } from "express";
import campsRoutes from "./camps/index";
import authRoutes from "./auth/auth.route";

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
    res.send('OK');
});

router.use('/api/auth', authRoutes);
router.use('/api/camps', campsRoutes);

export default router;
