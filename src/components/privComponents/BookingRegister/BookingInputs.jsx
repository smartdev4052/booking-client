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

	const formCloseAnimation = (e) => {
		e.preventDefault();
		document
			.querySelector("#bookingForm")
			.classList.add("bookingFormAnimationClose");
		setTimeout(() => {
			showForm(false);
		}, 900);
	};

	return (
		<>
			<div className="flex h-min w-full flex-col gap-2 rounded-2xl bg-hotely-dk p-4">
				<div className="h-full w-full">
					<div
						className={`flex h-full w-full items-center justify-between rounded-2xl bg-hotely-med-dk py-3 px-3 text-lg text-hotely-gd opacity-75 shadow-md shadow-black transition-all duration-300 ease-out hover:opacity-100 hover:shadow-lg hover:shadow-black
						
						`}
					>
						<button
							className="rounded-full bg-hotely-dk px-4 py-2 shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-black"
							onClick={formCloseAnimation}
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

						<div className="flex gap-5">
							<button
								className="rounded-full bg-hotely-dk px-4 py-2 font-medium tracking-wider shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-black"
								type="submit"
							>
								{formType}
							</button>
							{formType === "Save Changes" ? (
								<button
									className="group rounded-full bg-hotely-dk px-4 py-2 font-medium tracking-wider shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:bg-red-800 hover:shadow-lg hover:shadow-black"
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
							) : null}
						</div>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center rounded-2xl px-8 opacity-75 shadow-md shadow-black transition-all duration-300 ease-out hover:opacity-100 hover:shadow-lg hover:shadow-black md:flex-row md:gap-20">
					<div className="flex h-96 w-full flex-col justify-evenly transition-all duration-300 ease-out hover:scale-105">
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
					<div className="w-2/3 border-b-2 border-b-hotely-med-dk md:hidden"></div>
					<div className="flex h-96 w-full flex-col justify-evenly transition-all duration-300 ease-out hover:scale-105">
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
