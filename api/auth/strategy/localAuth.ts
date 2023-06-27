import prisma from "../../../prisma/client";
import bycrypt from 'bcrypt';
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

passport.serializeUser((user: any, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id: number, done) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            }});

        if(user) {
            done(null, user);
        } else {
            done({ message: 'User not found' }, null);
        }

    } catch (error) {
        done(error, null);
    }
    
    
});


passport.use(
    new LocalStrategy({
        usernameField: "email",
        passwordField: "password"
    },
   async (email, password, done) => {
       if(!email || !password) {
           return done(null, false, { message: 'Email and password are required' });
       }

        const user = await prisma.user.findUnique({
            where: {
                email
            }
         });

        if(!user) {
             return done({ message: 'User not found' }, false);
        }

        const isMatch = await bycrypt.compare(password, user.password);

        if(!isMatch) {
            return done({ message: 'Incorrect password' }, false);
        }

        console.log(user);

        return done(null, user);     
    }
));
