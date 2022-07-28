import { useState, useEffect, createContext } from "react";

import useAuthProvider from "../../hooks/privHooks/useAuthProvider";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
	const [bookingsCollection, setBookingsCollection] = useState([]);
	const {
		headersConfig,
		ClientAxios,
		jwtokenName,
		alert,
		setAlert,
		alertOut,
		alertRunning,
	} = useAuthProvider();

	const autoCloseForm = (showForm) => {
		setTimeout(() => {
			document
				.querySelector("#bookingForm")
				.classList.add("bookingFormAnimationClose");
			setTimeout(() => {
				showForm(false);
			}, 900);
		}, 2250);
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

	const registerBookingOnDB = async (bookingToRegister, showForm) => {
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

				autoCloseForm(showForm);
			} catch (error) {
				setAlert({ error: false, msg: error.response.data.msg });
				alertOut();
			}
		}
	};

	const editBookingOnDB = async (bookingToEdit, bookingToEditID, showForm) => {
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

				autoCloseForm(showForm);
			} catch (error) {
				setAlert({ error: false, msg: error.response.data.msg });
				alertOut();
			}
		}
	};

	const deleteBookingOnDB = async (bookingToDeleteID, showForm) => {
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

					autoCloseForm(showForm);
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
				alert,
				setAlert,
				alertOut,
				alertRunning,
				setBookingsCollection,
				registerBookingOnDB,
				editBookingOnDB,
				deleteBookingOnDB,
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingContext;
