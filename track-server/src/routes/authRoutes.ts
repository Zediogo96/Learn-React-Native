import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import { User } from "../models/User";

const router = express.Router();

dotenv.config();

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    const user = new User({
        username,
        email,
        password,
    });
    
    try {
        const newUser = await user.save();

        const token = jwt.sign({userID: newUser._id}, process.env.JWT_SECRET_KEY!);

        // add token 

        res.status(201).send({token, ...newUser.toJSON()});
    }
    catch (err : any) {
        res.status(422).send(err.message);
    }
});

router.post("/login", (req, res) => {
	res.send("You made a POST request to /login");
});

export { router };
