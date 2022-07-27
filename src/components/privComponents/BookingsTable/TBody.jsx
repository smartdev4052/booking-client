import useBookingProvider from "../../../hooks/privHooks/useBookingProvider";
import GenKey from "./GenKey";

const TBody = ({ showForm, setFormType, setBookingID }) => {
	const { bookingsCollection } = useBookingProvider();
	let stripedEffect = false;

	const trBookings = bookingsCollection.map((booking) => {
		const bookingValues = {
			name: `${booking.name + " " + booking.lastname}`,
			checkIn: String(booking.checkIn).split("T")[0],
			checkOut: String(booking.checkOut).split("T")[0],
			room: booking.room,
			total: booking.total,
			status: "¿?",
		};

		const tdBooking = Object.values(bookingValues).map((value) => {
			return (
				<td
					className={`w-[14%] border-x-2 border-b-2 border-hotely-dk first:border-l-0 last:border-r-0 ${
						stripedEffect ? "bg-hotely-med-dk" : "bg-hotely-lt-dk"
					}`}
					key={GenKey()}
				>
					{value}
				</td>
			);
		});

		stripedEffect = !stripedEffect;
		return (
			<tr
				className="h-16 text-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:cursor-pointer hover:bg-opacity-100 hover:text-white hover:shadow-md hover:shadow-hotely-lt-gy"
				key={GenKey()}
				onClick={() => {
					showForm(true);
					setFormType("Save Changes");
					setBookingID(booking._id);
				}}
			>
				{tdBooking}
			</tr>
		);
	});

	return (
		<tbody className="h-full text-center tracking-wider text-hotely-lt">
			{trBookings}
		</tbody>
	);
};

export default TBody;
