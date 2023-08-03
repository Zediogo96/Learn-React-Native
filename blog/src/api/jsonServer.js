import axios from "axios";

const jsonServer = axios.create({
	baseURL: "https://a080-2001-8a0-ecd4-3400-14c6-e7ef-e5d3-d8ef.ngrok-free.app/",
});

export default jsonServer;
