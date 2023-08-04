import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { User } from "../models/User";

const requireAuth = (req: any, res: any, next: any) => {
    // fetch the header
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in" });
    }

    // extract the token
    const token = authorization.replace("Bearer ", "");

    jwt.verify(token, process.env.JWT_SECRET_KEY!, async (err: any, payload: any) => {
        if (err) {
            return res.status(401).send({ error: "You must be logged in" });
        }

        const { userID } = payload;

        const user  = await User.findById(userID);

        req.user = user;

        next();
    });
}

export default requireAuth;


