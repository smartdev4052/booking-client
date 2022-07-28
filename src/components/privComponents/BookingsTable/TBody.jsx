import useBookingProvider from "../../../hooks/privHooks/useBookingProvider";
import GenKey from "./GenKey";

const TBody = ({ showForm, setFormType, setBookingID }) => {
	const { bookingsCollection } = useBookingProvider();
	let stripedEffect = false;

	const trBookings = bookingsCollection.map((booking) => {
		const checkStatus = () => {
			const checkIn = booking.checkIn.split("T")[0];
			const checkOut = booking.checkOut.split("T")[0];
			const currentDate = new Date().toISOString().split("T")[0];

			if (checkIn > currentDate && currentDate < checkOut) {
				return "pending";
			} else if (currentDate >= checkIn && currentDate < checkOut) {
				return "active";
			} else {
				return "finished";
			}
		};

		const bookingValues = {
			name: `${booking.name + " " + booking.lastname}`,
			checkIn: String(booking.checkIn).split("T")[0],
			checkOut: String(booking.checkOut).split("T")[0],
			room: booking.room,
			total: booking.total,
			status: checkStatus(),
		};

		const statusColor = (value) => {
			if (value === "pending") {
				return "text-yellow-400 tracking-widest font-medium";
			} else if (value === "active") {
				return "text-green-400 tracking-widest font-medium";
			} else if (value === "finished") {
				return "text-red-400 tracking-widest font-medium";
			}
		};

		const tdBooking = Object.values(bookingValues).map((value) => {
			return (
				<td
					className={`w-[14%] border-x-2 border-b-2 border-hotely-dk font-medium first:border-l-0 last:border-r-0 ${
						stripedEffect ? "bg-hotely-lt-dk" : "bg-hotely-med-dk"
					} ${statusColor(value)}`}
					key={GenKey()}
				>
					{value}
				</td>
			);
		});

		stripedEffect = !stripedEffect;
		return (
			<tr
				className="h-16 text-lg opacity-75 transition-all duration-300 ease-out hover:-translate-y-1 hover:cursor-pointer hover:bg-opacity-100 hover:opacity-100 hover:shadow-md hover:shadow-hotely-lt-gy"
				key={GenKey()}
				onClick={() => {
					showForm(true);
					setFormType("Save Changes");
					setBookingID(booking._id);
				}}
				title="View Data"
			>
				{tdBooking}
			</tr>
		);
	});

	return (
		<tbody className="h-full text-center tracking-wider text-white">
			{trBookings}
		</tbody>
	);
};

export default TBody;
