import useBookingProvider from "../../../hooks/privHooks/useBookingProvider";

const TBody = () => {
	const { bookings } = useBookingProvider();
	let stripedEffect = false;

	const trBookings = bookings.map((booking) => {
		const bookingValues = {
			name: `${booking.name + " " + booking.lastname}`,
			checkIn: String(booking.checkIn).split("T")[0],
			checkOut: String(booking.checkOut).split("T")[0],
			room: booking.room,
			total: booking.total,
			status: "¿?",
		};

		console.log(bookingValues);

		const tdBooking = Object.values(bookingValues).map((value) => {
			return (
				<td
					className={`w-[14%] border-x-2 border-b-2 border-hotely-dk transition-all duration-300 ease-out first:border-l-0 last:border-r-0 hover:cursor-default hover:bg-hotely-lt-med-gy hover:text-white ${
						stripedEffect ? "bg-red-800" : "bg-green-800"
					}`}
					key={Math.random()}
				>
					{value}
				</td>
			);
		});

		stripedEffect = !stripedEffect;
		return (
			<tr className="h-10" key={Math.random()}>
				{tdBooking}
			</tr>
		);
	});

	return (
		<tbody className="h-full text-center text-hotely-lt-gy">{trBookings}</tbody>
	);
};

export default TBody;
