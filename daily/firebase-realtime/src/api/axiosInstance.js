import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : process.env.REACT_APP_FIREBASE_DATABASE_URL
})