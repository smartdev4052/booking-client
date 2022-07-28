import { useState } from "react";

import THead from "./THead";
import TBody from "./TBody";

import BookingForm from "../BookingRegister/BookingForm";

const Table = () => {
	const [showForm, setShowForm] = useState(false);
	const [formType, setFormType] = useState("");
	const [bookingID, setBookingID] = useState("");

	return (
		<>
			<div
				className="flex h-14 w-full items-end justify-start pl-4 lg:h-20"
				id="registerBtn"
			>
				<button
					className="group flex h-14 w-36 translate-y-2 items-center justify-center gap-2 rounded-t-2xl bg-hotely-med-dk transition-all duration-300 ease-out hover:translate-y-0 hover:shadow-xl hover:shadow-black"
					onClick={() => {
						setShowForm(true);
						setFormType("Register");
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							className="transition-all duration-300 ease-out group-hover:fill-white"
							fill="#cecece"
							d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 6a.75.75 0 00-.743.648l-.007.102v4.5h-4.5a.75.75 0 00-.102 1.493l.102.007h4.5v4.5a.75.75 0 001.493.102l.007-.102v-4.5h4.5a.75.75 0 00.102-1.493l-.102-.007h-4.5v-4.5A.75.75 0 0012 6z"
						></path>
					</svg>
					<span className="text-lg font-medium tracking-wider text-hotely-lt group-hover:text-white">
						Register
					</span>
				</button>
			</div>
			<div
				className="z-10 h-full w-full overflow-x-scroll overflow-y-scroll rounded-t-2xl shadow-lg shadow-black transition-all duration-200 ease-out hover:shadow-2xl hover:shadow-black"
				id="bookingTable"
			>
				<table className="max-h-full min-w-[1024px] uppercase lg:w-full">
					<THead />
					<TBody
						showForm={setShowForm}
						setFormType={setFormType}
						setBookingID={setBookingID}
					/>
				</table>
			</div>
			{showForm ? (
				<BookingForm
					showForm={setShowForm}
					formType={formType}
					bookingID={bookingID}
				/>
			) : null}
		</>
	);
};

export default Table;
