import { useEffect } from "react";
import GenInput from "../../pubComponets/Form/Generators/GenInput";
import useBookingProvider from "../../../hooks/privHooks/useBookingProvider";

const BookingInputs = ({
	inputs,
	showForm,
	formType,
	bookingID,
	cleanInputs,
}) => {
	const { bookingsCollection, deleteBookingOnDB } = useBookingProvider();

	const {
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
	} = inputs;

	//* Load Booking Data in Edit Mode
	useEffect(() => {
		if (formType === "Save Changes") {
			bookingsCollection.forEach((booking) => {
				if (booking._id === bookingID) {
					// console.table(booking);
					setName(booking.name);
					setLastName(booking.lastname);
					setEmail(booking.email);
					setPhone(booking.phone);
					setCheckIn(String(booking.checkIn).split("T")[0]);
					setCheckOut(String(booking.checkOut).split("T")[0]);
					setRoom(booking.room);
					setTotal(booking.total);
				}
			});
		}
	}, []);

	const deleteHandle = (e) => {
		e.preventDefault();
		deleteBookingOnDB(bookingID, cleanInputs, showForm);
	};

	return (
		<>
			<div className="flex h-full w-full flex-col p-2">
				<div className="w-full px-5">
					<div
						className={`flex h-full w-full items-center bg-hotely-dk py-5 px-5 text-lg text-hotely-gd ${
							formType === "Save Changes" ? "justify-between" : "justify-end"
						}`}
					>
						{formType === "Save Changes" ? (
							<div className="flex gap-5">
								<button
									className="group px-4 py-2 shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:bg-red-600"
									onClick={deleteHandle}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 64 64"
									>
										<path
											className="group-hover:fill-white"
											fill="#7C6C52"
											d="M54 16h-8v-5c0-2.206-1.794-4-4-4H22c-2.206 0-4 1.794-4 4v5h-8c-1.106 0-2 .894-2 2v2c0 .275.225.5.5.5h3.775l1.544 32.688A4.004 4.004 0 0017.812 57h28.375a3.995 3.995 0 003.994-3.813L51.725 20.5H55.5c.275 0 .5-.225.5-.5v-2c0-1.106-.894-2-2-2zm-12.5 0h-19v-4.5h19V16z"
										></path>
									</svg>
								</button>
							</div>
						) : null}
						<div className="flex gap-5">
							<button
								className="px-4 py-2 font-medium tracking-wider shadow-md shadow-black"
								type="submit"
							>
								{formType}
							</button>
							<button
								className="px-4 py-2 shadow-md shadow-black"
								onClick={() => {
									showForm(false);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									viewBox="0 0 64 64"
								>
									<path
										fill="#7C6C52"
										d="M12.198 12.198a4 4 0 015.657 0l14.143 14.145 14.144-14.145a4 4 0 015.656 5.657L37.654 31.998l14.144 14.144a4 4 0 01-5.656 5.656L31.998 37.654 17.855 51.798a4 4 0 01-5.657-5.656l14.145-14.144-14.145-14.143a4 4 0 010-5.657z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="flex w-full items-center justify-center gap-28 px-10">
					<div className="flex h-96 w-full flex-col justify-evenly">
						<GenInput
							inputType="text"
							inputName="name"
							inputValue={name}
							setInputValue={setName}
							spanText="Name"
							downUpEffect={false}
						/>
						<GenInput
							inputType="text"
							inputName="lastname"
							inputValue={lastname}
							setInputValue={setLastName}
							spanText="Lastname"
							downUpEffect={false}
						/>
						<GenInput
							inputType="text"
							inputName="email"
							inputValue={email}
							setInputValue={setEmail}
							spanText="Email"
							downUpEffect={false}
						/>
						<GenInput
							inputType="text"
							inputName="phone"
							inputValue={phone}
							setInputValue={setPhone}
							spanText="Phone"
							downUpEffect={false}
						/>
					</div>
					<div className="flex h-96 w-full flex-col justify-evenly">
						<GenInput
							inputType="date"
							inputName="checkIn"
							inputValue={checkIn}
							setInputValue={setCheckIn}
							spanText="Check In"
							downUpEffect={false}
						/>
						<GenInput
							inputType="date"
							inputName="checkOut"
							inputValue={checkOut}
							setInputValue={setCheckOut}
							spanText="Check Out"
							downUpEffect={false}
						/>
						<GenInput
							inputType="text"
							inputName="room"
							inputValue={room}
							setInputValue={setRoom}
							spanText="Room"
							downUpEffect={false}
						/>
						<GenInput
							inputType="text"
							inputName="total"
							inputValue={total}
							setInputValue={setTotal}
							spanText="Price"
							downUpEffect={false}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookingInputs;
