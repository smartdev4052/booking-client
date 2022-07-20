import ClientAxios from "../config/ClientAxios";

const ApiStatus = async () => {
	const { data } = await ClientAxios(`/ping`);

	return data;
};

export default ApiStatus;
