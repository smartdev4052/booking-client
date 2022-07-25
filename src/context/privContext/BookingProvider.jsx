import { useState, useEffect, createContext } from "react";
import ClientAxios from "../../config/ClientAxios";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [bookings, setBookings] = useState([]);
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

	const editBooking = async (
		bookingData,
		bookingId,
		cleanInputs,
		showRegister
	) => {
		const jwtoken = localStorage.getItem("hotely-jwtoken");

		if (!jwtoken) return;

		const config = {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${jwtoken}`,
			},
		};

		try {
			const { data } = await ClientAxios.put(
				`/booking/${bookingId}`,
				bookingData,
				config
			);

			const { createdAt, updatedAt, __v, ...bookingUpdated } = data;

			const bookingsUpdate = bookings.map((booking) =>
				booking._id === bookingUpdated._id ? bookingUpdated : booking
			);

			setBookings(bookingsUpdate);

			setAlert({ error: false, msg: "Successfully Edited" });
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

	const deleteBooking = async (bookingId, cleanInputs, showRegister) => {
		if (confirm("Delete Booking?")) {
			const jwtoken = localStorage.getItem("hotely-jwtoken");

			if (!jwtoken) return;

			const config = {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${jwtoken}`,
				},
			};

			try {
				await ClientAxios.delete(`/booking/${bookingId}`, config);

				const bookingsUpdate = bookings.filter(
					(booking) => booking._id !== bookingId
				);

				setBookings(bookingsUpdate);

				setAlert({ error: false, msg: "Successfully Delete" });
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
		}
	};

	return (
		<BookingContext.Provider
			value={{
				bookings,
				setBookings,
				alert,
				setAlert,
				alertOut,
				registerBooking,
				editBooking,
				deleteBooking,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingContext;
