import axios from "axios";

const ai = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default ai;