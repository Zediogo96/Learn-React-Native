import axios from "axios";

const jsonServer = axios.create({
	baseURL: "https://039e-2001-8a0-ecd4-3400-d98-1afe-3e83-8e82.ngrok-free.app/",
});

export default jsonServer;
