import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('USER_TOKEN') || localStorage.getItem('ADMIN_TOKEN') || localStorage.getItem('MENTOR_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    try {
        const { response } = error;
        if (response.status === 401) {
            // localStorage.removeItem('USER_TOKEN');
            // localStorage.removeItem('MENTOR_TOKEN');
            // localStorage.removeItem('ADMIN_TOKEN');
            localStorage.clear()
            window.location.href = "/";
        }
    } catch (error) {
        console.log(error);
    }

    throw error
});

export default axiosClient