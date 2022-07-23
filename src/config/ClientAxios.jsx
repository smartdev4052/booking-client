import axios from "axios";

const ClientAxios = axios.create({
	baseURL: import.meta.env.VITE_SERVER_URL,
});

export default ClientAxios;
