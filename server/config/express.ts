import express, { Express, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import BodyParser from "body-parser";
import session from "cookie-session";
import cors from "cors";
import passport from "passport";
import router from "../api/routes";


const app: Express = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

app.use((req:Request, res:Response, next:NextFunction) => {
    console.log(`${req.method}:${req.url}`);
    next(); 
});

app.use(passport.initialize());
app.use(passport.session());

app.use(router);


export default app;