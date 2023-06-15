import { Router, Request, Response } from "express";
import campsRoutes from "./camps/index";


const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
    res.send('OK');
});

router.use('/api/camps', campsRoutes);

export default router;
