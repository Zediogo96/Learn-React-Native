import mongoose from 'mongoose';

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number,
    },
});

const trackSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // tells that this points to a User
    },
    name: {
        type: String,
        required: true,
    },
    locations: [pointSchema],
});

export const Track = mongoose.model("Track", trackSchema);
    