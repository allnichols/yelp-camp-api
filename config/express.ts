import express, { Express, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import BodyParser from "body-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import passport from "passport";
import router from "../api/routes";
import "../api/auth/strategy/localAuth"


const app: Express = express();

// enable CORS - Cross Origin Resource Sharing
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// secure apps by setting various HTTP headers
app.use(helmet());

// temporary to solve req.session.regenerate is not a function
// app.use((req:Request, res:Response, next:NextFunction) => {
//     if (req.session && !req.session.regenerate) {
//         req.session.regenerate = (cb:any) => {
//             cb()
//         }
//     }
//     if(req.session && !req.session.save) {
//         req.session.save = (cb:any) => {
//             cb()
//         }
//     }
//     next();
// });


app.use(cookieSession({
    secret: 'secret',
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use((req:Request, res:Response, next:NextFunction) => {
    console.log(`${req.method}:${req.url}`);
    next(); 
});

app.use(passport.initialize());
app.use(passport.session());

app.use(router);


export default app;