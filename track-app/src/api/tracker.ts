// @ts-ignore
// import {API_URL} from "@env"
import axios from 'axios';

const API_URL = "https://da1a-2001-8a0-ecd4-3400-f0aa-ac10-8d95-24d3.ngrok-free.app/"

export default axios.create({
    baseURL: API_URL,
})