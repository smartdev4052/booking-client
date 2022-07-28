import { useState } from "react";

import BookingInputs from "./BookingInputs";
import useBookingProvider from "../../../hooks/privHooks/useBookingProvider";

const BookingForm = ({ showForm, formType, bookingID }) => {
	const { registerBookingOnDB, editBookingOnDB, setAlert, alertOut } =
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

	//* Register and Edit
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
			editBookingOnDB(
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
				bookingID,
				cleanInputs,
				showForm
			);
		} else {
			registerBookingOnDB(
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
			<div className="flex h-full w-full items-center justify-center overflow-y-auto bg-black bg-opacity-25 backdrop-blur-sm">
				<form
					className="bookingFormAnimation container fixed mx-2 flex h-full w-full md:h-min lg:w-[869px]"
					onSubmit={handleSubmit}
					id="bookingForm"
				>
					<BookingInputs
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
						bookingID={bookingID}
						cleanInputs={cleanInputs}
					/>
				</form>
			</div>
		</div>
	);
};

export default BookingForm;
