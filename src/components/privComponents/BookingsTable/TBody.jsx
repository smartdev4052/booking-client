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

			{!bookingsCollection.length && (
				<div className="emptyBoxAnimation absolute top-1/2 left-1/2 flex -translate-x-1/2 scale-125 flex-col items-center justify-center gap-10 sm:translate-y-1/4">
					<span
						className="cursor-default text-2xl font-black text-hotely-lt"
						id="emptyText"
					>
						Register your first <span className="">booking</span>
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="190"
						height="169"
						fill="none"
						viewBox="0 0 190 169"
						id="emptyBox"
					>
						<path
							fill="#363636"
							d="M178.884 97.077l-33.068-44.66a7.31 7.31 0 00-5.887-2.964H40.073a7.308 7.308 0 00-5.887 2.964L1.117 97.077V151.5a11.166 11.166 0 0011.165 11.165H167.74a11.166 11.166 0 0011.165-11.165l-.021-54.424z"
						></path>
						<path
							fill="#363636"
							d="M167.74 163.659H12.262a12.181 12.181 0 01-12.18-12.18V97.075a1.015 1.015 0 01.193-.61l33.069-44.66a8.383 8.383 0 016.709-3.38h99.856a8.384 8.384 0 016.709 3.38l33.068 44.66c.129.178.196.391.193.61v54.424a12.18 12.18 0 01-12.139 12.16zM2.132 97.409v54.09a10.149 10.149 0 0010.15 10.15H167.74a10.148 10.148 0 0010.15-10.15v-54.09l-32.866-44.406a6.345 6.345 0 00-5.075-2.557H40.073a6.345 6.345 0 00-5.075 2.557L2.132 97.41z"
						></path>
						<path
							fill="#A5A5A5"
							d="M178.885 97.076v54.425a11.165 11.165 0 01-11.165 11.165H12.263a11.164 11.164 0 01-11.165-11.165V97.076h48.12l4.528 22.331a8.884 8.884 0 008.708 7.105h55.663a8.913 8.913 0 008.749-7.258l4.182-22.238 47.837.06z"
						></path>
						<path
							fill="#363636"
							d="M167.73 163.661H12.262a12.177 12.177 0 01-12.18-12.18V97.077a1.015 1.015 0 011.015-1.015h48.121a1.015 1.015 0 011.015.812l4.527 22.33a7.887 7.887 0 007.714 6.323h55.663a7.885 7.885 0 007.744-6.435l4.182-22.238a1.012 1.012 0 011.015-.823h47.817a1.013 1.013 0 011.015 1.015v54.425a12.178 12.178 0 01-7.517 11.262 12.191 12.191 0 01-4.663.928zM2.132 98.091v53.41a10.149 10.149 0 0010.15 10.15H167.73a10.148 10.148 0 0010.15-10.15v-53.41h-45.97l-4.06 21.407a9.925 9.925 0 01-9.744 8.12H62.474a9.914 9.914 0 01-9.703-7.947l-4.385-21.58H2.132z"
						></path>
						<path
							fill="#363636"
							d="M40.164 140.487H20.23a1.016 1.016 0 010-2.03h19.934a1.016 1.016 0 01.718 1.733c-.19.19-.448.297-.718.297z"
						></path>
						<path
							fill="#4A4A4A"
							d="M53.966 36.084a2.03 2.03 0 01-1.614-.812l-13.814-18.27a2.033 2.033 0 113.248-2.446l13.804 18.27a2.03 2.03 0 01-.396 2.841 2.03 2.03 0 01-1.228.417zm65.407 0a2.083 2.083 0 01-1.229-.417 2.033 2.033 0 01-.395-2.842l13.814-18.27a2.029 2.029 0 013.586.963 2.032 2.032 0 01-.348 1.484l-13.804 18.27a2.04 2.04 0 01-1.624.812zm-31.11-6.09a2.03 2.03 0 01-2.03-2.03V2.74a2.03 2.03 0 014.06 0v25.223a2.03 2.03 0 01-2.03 2.03z"
						></path>
						<path
							fill="#7C6C52"
							d="M184.84 132.734h-58.454a3.948 3.948 0 00-3.948 3.949v26.704a3.948 3.948 0 003.948 3.949h58.454a3.949 3.949 0 003.948-3.949v-26.704a3.949 3.949 0 00-3.948-3.949z"
						></path>
						<path
							fill="#363636"
							d="M184.843 168.36h-58.454a4.974 4.974 0 01-4.963-4.963v-26.715a4.974 4.974 0 014.963-4.963h58.454a4.972 4.972 0 014.963 4.963v26.715a4.974 4.974 0 01-4.963 4.963zm-58.454-34.611a2.933 2.933 0 00-2.933 2.933v26.715a2.933 2.933 0 002.933 2.933h58.454a2.937 2.937 0 002.071-.862c.55-.549.86-1.294.862-2.071v-26.715a2.937 2.937 0 00-.862-2.071 2.937 2.937 0 00-2.071-.862h-58.454z"
						></path>
						<path
							fill="#CECECE"
							d="M132.438 143.168h7.774v2.334h-5.257v2.132h4.963v2.324h-4.963v2.335h5.542v2.324h-8.059v-11.449zm9.774 3.552h2.334v1.066c.082-.166.192-.317.325-.446a2.01 2.01 0 01.498-.406c.207-.124.429-.223.659-.295.265-.074.538-.112.812-.111a3.092 3.092 0 011.462.335c.434.238.774.618.964 1.075a2.593 2.593 0 011.015-1.086 3.509 3.509 0 012.812-.06c.34.169.633.42.852.73.222.329.377.698.457 1.086.093.437.137.883.132 1.33v4.639h-2.426v-4.578a1.852 1.852 0 00-.233-.944.887.887 0 00-.833-.396 1.564 1.564 0 00-.7.142 1.122 1.122 0 00-.457.376 1.685 1.685 0 00-.243.568 2.884 2.884 0 00-.071.68v4.152h-2.426V149.908c-.01-.202-.051-.4-.122-.589a1.018 1.018 0 00-.315-.467 1.009 1.009 0 00-.639-.193c-.261-.009-.52.05-.751.173a1.116 1.116 0 00-.447.446 1.9 1.9 0 00-.203.64c-.016.25-.016.501 0 .751v3.908h-2.426l-.03-7.857zm14.291 0h2.233v1.015c.111-.156.241-.299.386-.426.161-.159.346-.292.548-.396.216-.12.444-.219.68-.294.261-.074.531-.112.802-.112a4.185 4.185 0 011.583.295 3.79 3.79 0 011.218.842c.343.374.609.812.782 1.289a4.69 4.69 0 01.274 1.634 5.07 5.07 0 01-.244 1.574 4.32 4.32 0 01-.72 1.329 3.413 3.413 0 01-1.117.934 3.173 3.173 0 01-1.502.345 4.044 4.044 0 01-1.421-.233 2.218 2.218 0 01-1.076-.802v4.527h-2.426V146.72zm2.233 3.929a2.028 2.028 0 00.508 1.441 1.875 1.875 0 001.431.548 1.846 1.846 0 001.431-.548 2.302 2.302 0 000-2.883 1.84 1.84 0 00-1.431-.548 1.873 1.873 0 00-1.431.548 2.025 2.025 0 00-.508 1.482v-.04zm13.083-1.899h-2.141v2.619a3.408 3.408 0 000 .589 1.1 1.1 0 00.142.467c.083.13.203.233.345.294.196.081.407.119.619.112h.518a.893.893 0 00.477-.193v2.03a3.485 3.485 0 01-.843.193 6.214 6.214 0 01-.862.051c-.38.004-.759-.04-1.127-.132a2.542 2.542 0 01-.903-.406 1.89 1.89 0 01-.609-.741 2.512 2.512 0 01-.224-1.097v-3.786h-1.553v-2.03h1.553v-2.324h2.426v2.324h2.142l.04 2.03zm5.756 7.105c-.163.417-.325.792-.478 1.117-.13.307-.324.584-.568.812a2.215 2.215 0 01-.883.507 4.795 4.795 0 01-1.401.163 5.723 5.723 0 01-1.817-.284l.325-2.03c.354.16.738.243 1.127.243.227.007.453-.023.67-.091.162-.051.308-.142.426-.264a1.53 1.53 0 00.284-.406l.244-.568.173-.457-3.462-7.877h2.619l2.03 5.187 1.736-5.187h2.486l-3.511 9.135z"
						></path>
					</svg>
				</div>
			)}
		</tbody>
	);
};

export default TBody;
