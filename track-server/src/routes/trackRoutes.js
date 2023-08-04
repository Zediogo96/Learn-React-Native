import express from "express";
import mongoose from "mongoose";
import requireAuth from "../middleware/requireAuth";

import { Track } from "../models/Track";

const router = express.Router();

router.use(requireAuth);

router.get("/", async (req, res) => {
	try {
		const tracks = await Track.find({ userID: req.user._id });
		res.status(200).send(tracks);
	} catch (err) {
		res.status(422).send({ error: err.message });
	}
});

export { router };
