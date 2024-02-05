import axios from "axios";

const externalApi = `https://viacep.com.br/ws/`;

const api = axios.create({
    baseURL:externalApi
});

export default api;