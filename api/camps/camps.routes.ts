import express, { Request, Response } from "express";

const campsRoutes = express.Router();

campsRoutes.get('/', (req: Request, res: Response) => {
    res.send('Hello camps!');
})

export default campsRoutes;
