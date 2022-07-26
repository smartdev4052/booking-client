import { useState, useEffect, createContext } from "react";

import ClientAxios from "../../config/ClientAxios";

import useAuthProvider from "../../hooks/privHooks/useAuthProvider";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [bookingsCollection, setBookingsCollection] = useState([]);
	const { headersConfig, jwtokenName, alert, setAlert, alertOut } =
		useAuthProvider();

	const autoCloseForm = (cleanInputs, showForm) => {
		setTimeout(() => {
			cleanInputs();
		}, 2000);
		setTimeout(() => {
			showForm(false);
		}, 4000);
	};

	useEffect(() => {
		const getBookingsFromDB = async () => {
			if (localStorage.getItem(jwtokenName)) {
				try {
					const { data } = await ClientAxios("/booking", headersConfig);

					const bookingsToCollection = data.map((booking) => {
						const { createdAt, updatedAt, __v, ...cleanBooking } = booking;
						return cleanBooking;
					});

					setBookingsCollection(bookingsToCollection);
				} catch (error) {
					console.log(error.response.data.msg);
				}
			}
		};
		getBookingsFromDB();
	}, []);

	const registerBookingOnDB = async (
		bookingToRegister,
		cleanInputs,
		showForm
	) => {
		if (localStorage.getItem(jwtokenName)) {
			try {
				const { data } = await ClientAxios.post(
					"/booking",
					bookingToRegister,
					headersConfig
				);

				const { createdAt, updatedAt, __v, ...bookingRegistered } = data;

				setBookingsCollection([bookingRegistered, ...bookingsCollection]);

				setAlert({ error: false, msg: "Successfully Registered" });
				alertOut();

				autoCloseForm(cleanInputs, showForm);
			} catch (error) {
				setAlert({ error: false, msg: error.response.data.msg });
				alertOut();
			}
		}
	};

	const editBookingOnDB = async (
		bookingToEdit,
		bookingToEditID,
		cleanInputs,
		showForm
	) => {
		if (localStorage.getItem(jwtokenName)) {
			try {
				const { data } = await ClientAxios.put(
					`/booking/${bookingToEditID}`,
					bookingToEdit,
					headersConfig
				);

				const { createdAt, updatedAt, __v, ...bookingUpdated } = data;

				const updateBookingsCollection = bookingsCollection.map((booking) =>
					booking._id === bookingUpdated._id ? bookingUpdated : booking
				);

				setBookingsCollection(updateBookingsCollection);

				setAlert({ error: false, msg: "Successfully Edited" });
				alertOut();

				autoCloseForm(cleanInputs, showForm);
			} catch (error) {
				setAlert({ error: false, msg: error.response.data.msg });
				alertOut();
			}
		}
	};

	const deleteBookingOnDB = async (
		bookingToDeleteID,
		cleanInputs,
		showForm
	) => {
		if (confirm("Delete Booking?")) {
			if (localStorage.getItem(jwtokenName)) {
				try {
					await ClientAxios.delete(
						`/booking/${bookingToDeleteID}`,
						headersConfig
					);

					const updateBookingsCollection = bookingsCollection.filter(
						(booking) => booking._id !== bookingToDeleteID
					);

					setBookingsCollection(updateBookingsCollection);

					setAlert({ error: false, msg: "Successfully Delete" });
					alertOut();

					autoCloseForm(cleanInputs, showForm);
				} catch (error) {
					setAlert({ error: false, msg: error.response.data.msg });
					alertOut();
				}
			}
		} else {
			return false;
		}
	};

	return (
		<BookingContext.Provider
			value={{
				bookingsCollection,
				setBookingsCollection,
				registerBookingOnDB,
				editBookingOnDB,
				deleteBookingOnDB,
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
