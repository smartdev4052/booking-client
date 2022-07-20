import axios from "axios";

const ClientAxios = axios.create({
	// Example API
	baseURL: `https://api.coingecko.com/api/v3`,
});

export default ClientAxios;
