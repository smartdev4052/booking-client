import { useState } from "react";
import THead from "./THead";
import TBody from "./TBody";

import BookingForm from "../Register/BookingForm";

const Table = () => {
	const [showForm, setShowForm] = useState(false);
	const [formType, setFormType] = useState("");
	const [bookingID, setBookingID] = useState("");

	return (
		<>
			<div className="flex h-24 w-full items-end justify-start pl-4">
				<button
					className="flex h-14 w-36 translate-y-2 items-center justify-center gap-2 rounded-t-xl bg-hotely-lt-med-gy transition-all duration-300 ease-out hover:translate-y-0 hover:shadow-xl hover:shadow-black"
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
							fill="#F6F6F6"
							d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 6a.75.75 0 00-.743.648l-.007.102v4.5h-4.5a.75.75 0 00-.102 1.493l.102.007h4.5v4.5a.75.75 0 001.493.102l.007-.102v-4.5h4.5a.75.75 0 00.102-1.493l-.102-.007h-4.5v-4.5A.75.75 0 0012 6z"
						></path>
					</svg>
					<span className="text-lg font-medium tracking-wider text-white">
						Register
					</span>
				</button>
			</div>
			<div
				className="z-10 h-full w-full min-w-[200px] overflow-y-auto overflow-x-visible rounded-t-xl shadow-2xl shadow-black"
				id="bookingTable"
			>
				<table className="max-h-full w-full uppercase">
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
