import { useState, useEffect, createContext } from "react";
import ClientAxios from "../../config/ClientAxios";

import useFormData from "../../hooks/pubHooks/useFormData";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [hotel, setHotel] = useState({});
	const [hotelLoading, setHotelLoading] = useState(true);
	const { setAlert } = useFormData();

	const alertOut = () => {
		setTimeout(() => {
			setAlert({});
		}, 5000);
	};

	useEffect(() => {
		const hotelAuth = async () => {
			const jwtoken = localStorage.getItem("hotely-jwtoken");

			if (!jwtoken) {
				setHotelLoading(false);
				return;
			}

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtoken}`,
				},
			};

			try {
				const { data } = await ClientAxios("/hotel/profile", config);
				setHotel(data);
			} catch (error) {
				setHotel({});
				setAlert({ error: true, msg: error.response.data.msg });
				alertOut();
			}
			setHotelLoading(false);
		};
		hotelAuth();
	}, []);

	const signOut = () => {
		localStorage.removeItem("hotely-jwtoken");
		setHotel({});
	};

	return (
		<AuthContext.Provider
			value={{ hotel, setHotel, hotelLoading, setHotelLoading, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
