// @ts-ignore
// import {API_URL} from "@env"
import axios from 'axios';

const API_URL = "https://2627-2001-8a0-ecd4-3400-9168-8191-82bb-3aa8.ngrok-free.app/"

export default axios.create({
    baseURL: API_URL,
})