import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7048/",
})

export default api;