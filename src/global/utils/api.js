import axios from "axios";

const api = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: `Client-ID lDv0AQAe3TRfZLJCbptpKaJRRkRuN82yj0wcZTmqOQw`,
    },
});

export default api;