import mongoose, { ConnectOptions, mongo } from "mongoose";
import dotenv from "dotenv";
import express from "express";
import { router as authRoutes } from "./routes/authRoutes";
import bodyParser from "body-parser";
import  requireAuth  from "./middleware/requireAuth";

dotenv.config();

const MONGO_URI: string = process.env.MONGO_URI || "";
const PORT: string = process.env.PORT || "8080";

// CONFIG OBJECT
const config = {
    mongo: {
        url: MONGO_URI,
    },
    server: {
        port: PORT,
    }
}

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());

// ROUTES
app.use("/auth", authRoutes);


app.get("/", requireAuth, (req, res) => {
    res.send("You made a GET request to /");
});


app.listen(config.server.port, () => {
    console.log(`SERVER > Listening on port ${config.server.port}`);
});



// Connect to MongoDB
mongoose.connect(config.mongo.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions).then(() => {
    console.log("SERVER > Connection to MongoDB was successful");
}).catch((err) => {
    console.log("SERVER > Error connecting to MongoDB", err);
});







