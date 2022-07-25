import { useState } from "react";
import GenInput from "../../pubComponets/generators/Form/GenInput";
import useBookingProvider from "../../../hooks/privHooks/useBookingProvider";

const BookingRegister = ({ showRegister }) => {
	const { registerBooking, setAlert, alertOut } = useBookingProvider();

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
			showRegister
		);
	};

	return (
		<div className="fixed left-0 top-0 z-20 h-full w-full">
			<div className="flex h-screen w-full items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
				<form
					className="fixed flex h-3/4 w-[1024px] rounded-2xl bg-hotely-dk shadow-2xl shadow-black"
					onSubmit={handleSubmit}
				>
					<div className="flex h-full w-1/2 flex-col p-10">
						<div className="flex h-3/4 w-full flex-col justify-evenly">
							<GenInput
								dataType="text"
								inputName="name"
								inputValue={name}
								setValue={setName}
								tagName="Name"
							/>
							<GenInput
								dataType="text"
								inputName="lastname"
								inputValue={lastname}
								setValue={setLastName}
								tagName="Lastname"
							/>
							<GenInput
								dataType="text"
								inputName="email"
								inputValue={email}
								setValue={setEmail}
								tagName="Email"
							/>
							<GenInput
								dataType="text"
								inputName="phone"
								inputValue={phone}
								setValue={setPhone}
								tagName="Phone"
							/>
						</div>
						<div className="h-1/4 w-full px-20">
							<div className="flex h-full w-full flex-col items-center justify-center bg-hotely-dk text-lg text-hotely-gd">
								<button
									className="h-2/6 w-full shadow-md shadow-black"
									onClick={() => {
										showRegister(false);
									}}
								>
									Close
								</button>
							</div>
						</div>
					</div>
					<div className="h-full w-1/2 p-10">
						<div className="flex h-3/4 w-full flex-col justify-evenly">
							<GenInput
								dataType="date"
								inputName="checkIn"
								inputValue={checkIn}
								setValue={setCheckIn}
								tagName="Check In"
							/>
							<GenInput
								dataType="date"
								inputName="checkOut"
								inputValue={checkOut}
								setValue={setCheckOut}
								tagName="Check Out"
							/>
							<GenInput
								dataType="text"
								inputName="room"
								inputValue={room}
								setValue={setRoom}
								tagName="Room"
							/>
							<GenInput
								dataType="text"
								inputName="total"
								inputValue={total}
								setValue={setTotal}
								tagName="Price"
							/>
						</div>
						<div className="h-1/4 w-full px-20">
							<div className="flex h-full w-full flex-col items-center justify-center bg-hotely-dk text-lg text-hotely-gd">
								<button
									className="h-2/6 w-full shadow-md shadow-black"
									type="submit"
								>
									Register
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default BookingRegister;
