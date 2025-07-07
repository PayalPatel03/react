import axios from "axios"

 const axiosInstance = axios.create({
    databaseURL : process.env.REACT_APP_FIREBASE_DATABASE_URL
})

export default axiosInstance