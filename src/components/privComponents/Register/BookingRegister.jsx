import { useState } from "react";

import BookingForm from "./BookingForm";
import useBookingProvider from "../../../hooks/privHooks/useBookingProvider";

const BookingRegister = ({ showForm, formType, bookingId }) => {
	const { registerBooking, editBooking, setAlert, alertOut } =
		useBookingProvider();

	const [name, setName] = useState("");
	const [lastname, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [checkIn, setCheckIn] = useState("");
	const [checkOut, setCheckOut] = useState("");
	const [room, setRoom] = useState("");
	const [total, setTotal] = useState("");

	const cleanInputs = () => {
		setName("");
		setLastName("");
		setEmail("");
		setPhone("");
		setCheckIn("");
		setCheckOut("");
		setRoom("");
		setTotal("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			[name, lastname, email, phone, checkIn, checkOut, room, total].includes(
				""
			)
		) {
			setAlert({ error: true, msg: "Empty Fields" });
			alertOut();
			return;
		}

		if (formType === "Save Changes") {
			editBooking(
				{
					name,
					lastname,
					email,
					phone,
					checkIn,
					checkOut,
					room,
					total,
				},
				bookingId,
				cleanInputs,
				showForm
			);
		} else {
			registerBooking(
				{
					name,
					lastname,
					email,
					phone,
					checkIn,
					checkOut,
					room,
					total,
				},
				cleanInputs,
				showForm
			);
		}
	};

	return (
		<div className="fixed left-0 top-0 z-20 h-full w-full">
			<div className="flex h-screen w-full items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
				<form
					className="fixed flex h-min w-[969px] rounded-2xl bg-hotely-dk shadow-2xl shadow-black"
					onSubmit={handleSubmit}
				>
					<BookingForm
						inputs={{
							name,
							setName,
							lastname,
							setLastName,
							email,
							setEmail,
							phone,
							setPhone,
							checkIn,
							setCheckIn,
							checkOut,
							setCheckOut,
							room,
							setRoom,
							total,
							setTotal,
						}}
						showForm={showForm}
						formType={formType}
						bookingId={bookingId}
						cleanInputs={cleanInputs}
					/>
				</form>
			</div>
		</div>
	);
};

export default BookingRegister;
