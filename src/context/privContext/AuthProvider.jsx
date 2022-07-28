import { useState, useEffect, createContext } from "react";

import useRegisterProvider from "../../hooks/pubHooks/useRegisterProvider";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [hotel, setHotel] = useState({});
	const [hotelLoading, setHotelLoading] = useState(true);
	const { ClientAxios, jwtokenName, alert, setAlert, alertOut, alertRunning } =
		useRegisterProvider();

	const [showMobileMenu, setShowMobileMenu] = useState(false);

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

	const changePassword = async (password) => {
		if (localStorage.getItem(jwtokenName)) {
			try {
				const { data } = await ClientAxios.put(
					"/hotel/change-password",
					password,
					headersConfig
				);
				setAlert({ error: false, msg: data.msg });
				alertOut();
			} catch (error) {
				setAlert({ error: true, msg: error.response.data.msg });
				alertOut();
			}
		}
	};

	return (
		<AuthContext.Provider
			value={{
				hotel,
				hotelLoading,
				jwtokenName,
				alert,
				setAlert,
				alertOut,
				alertRunning,
				headersConfig,
				ClientAxios,
				showMobileMenu,
				setShowMobileMenu,
				setHotel,
				setHotelLoading,
				hotelSignOut,
				editProfile,
				changePassword,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
