import axios from "axios";

const ClientAxios = axios.create({
	baseURL: VITE_SERVER_URL,
});

export default ClientAxios;
