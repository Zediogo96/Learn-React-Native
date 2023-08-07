// @ts-ignore
// import {API_URL} from "@env"
import axios from 'axios';

const API_URL = "https://0086-2001-8a0-ecd4-3400-158f-461-1f0b-77c.ngrok-free.app/"

export default axios.create({
    baseURL: API_URL,
})