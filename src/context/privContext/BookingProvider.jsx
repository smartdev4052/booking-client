import { useState, useEffect, createContext } from "react";
import ClientAxios from "../../config/ClientAxios";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [bookings, setBookings] = useState([]);
	const [editBooking, setEditBooking] = useState({});
	const [alert, setAlert] = useState({});

	const alertOut = () => {
		setTimeout(() => {
			setAlert({});
		}, 5000);
	};

	useEffect(() => {
		const getAllBookings = async () => {
			const jwtoken = localStorage.getItem("hotely-jwtoken");

			if (!jwtoken) return;

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtoken}`,
				},
			};

			try {
				const { data } = await ClientAxios("/booking", config);

				const bookingsArray = data.map((bookingDB) => {
					const { createdAt, updatedAt, __v, ...booking } = bookingDB;
					return booking;
				});

				setBookings(bookingsArray);
			} catch (error) {
				console.log(error.response.data.msg);
			}
		};
		getAllBookings();
	}, []);

	const registerBooking = async (bookingData, cleanInputs, showRegister) => {
		const jwtoken = localStorage.getItem("hotely-jwtoken");

		if (!jwtoken) return;

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtoken}`,
			},
		};

		try {
			const { data } = await ClientAxios.post("/booking", bookingData, config);

			const { createdAt, updatedAt, __v, ...bookingRegistered } = data;
			setBookings([bookingRegistered, ...bookings]);
			setAlert({ error: false, msg: "Successfully Registered" });
			alertOut();
			setTimeout(() => {
				cleanInputs();
			}, 2000);
			setTimeout(() => {
				showRegister(false);
			}, 4000);
		} catch (error) {
			console.log(error.response.data.msg);
		}
	};

	return (
		<BookingContext.Provider
			value={{
				bookings,
				setBookings,
				editBooking,
				setEditBooking,
				registerBooking,
				alert,
				setAlert,
				alertOut,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingContext;
