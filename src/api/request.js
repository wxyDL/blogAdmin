import axios from "axios"
import config from "vue/src/core/config";

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 50000,
    withCredentials: true
})

service.interceptors.request.use(config => {
    return config
})

service.interceptors.response.use((response) => {
    return response
})

