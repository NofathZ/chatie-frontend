import axios from 'axios'

const UsersAPI = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

export default UsersAPI