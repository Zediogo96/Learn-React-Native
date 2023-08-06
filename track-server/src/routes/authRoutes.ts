import express from "express";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

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

        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        const newUser = await user.save();

        const token = jwt.sign({userID: newUser._id}, process.env.JWT_SECRET_KEY!);      

        res.status(201).send({token, ...newUser.toJSON()});
    }
    catch (err : any) {
        res.status(422).send(err.message);
    }
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;

    // find the user
    const user = await User.findOne({ email });
   
    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email and password" });
    }

    try {
        const match = await bcrypt.compare(password, user!.password);

        if (!match) return res.status(422).send({ error: "Invalid password or email" });
        else {
            const token = jwt.sign({userID: user!._id}, process.env.JWT_SECRET_KEY!);
            res.status(200).send({token, ...user!.toJSON()});
        }
    } catch (err : any) {
        res.status(422).send({ error: err.message });
    }
    });

export { router };
