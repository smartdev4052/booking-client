import { useState, useEffect, createContext } from "react";

import ClientAxios from "../../config/ClientAxios";

import useRegisterProvider from "../../hooks/pubHooks/useRegisterProvider";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [hotel, setHotel] = useState({});
	const [hotelLoading, setHotelLoading] = useState(true);
	const { jwtokenName, alert, setAlert, alertOut } = useRegisterProvider();

	const headersConfig = {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem(jwtokenName)}`,
		},
	};

	useEffect(() => {
		const hotelSignIn = async () => {
			if (localStorage.getItem(jwtokenName)) {
				try {
					const { data } = await ClientAxios("/hotel/profile", headersConfig);
					setHotel(data);
				} catch (error) {
					setHotel({});
					setAlert({ error: true, msg: error.response.data.msg });
					alertOut();
				}
				setHotelLoading(false);
			} else {
				setHotelLoading(false);
			}
		};
		hotelSignIn();
	}, []);

	const hotelSignOut = () => {
		if (localStorage.getItem(jwtokenName)) {
			localStorage.removeItem(jwtokenName);
		} else {
			setHotelLoading(false);
		}
		setHotel({});
	};

	const editProfile = async (hotelUpdate) => {
		if (localStorage.getItem(jwtokenName)) {
			try {
				console.log("UPDATEEE01");
				const { data } = await ClientAxios.put(
					`/hotel/profile/${hotelUpdate._id}`,
					hotelUpdate,
					headersConfig
				);
				setHotel(hotelUpdate);
				setAlert({ error: false, msg: data.msg });
				alertOut();
			} catch (error) {
				setHotel({});
				setAlert({ error: true, msg: error.response.data.msg });
				alertOut();
			}
		}
	};

	return (
		<AuthContext.Provider
			value={{
				hotel,
				setHotel,
				hotelLoading,
				setHotelLoading,
				headersConfig,
				jwtokenName,
				hotelSignOut,
				editProfile,
				alert,
				setAlert,
				alertOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
