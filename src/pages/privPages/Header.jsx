import { Link } from "react-router-dom";

import useAuthProvider from "../../hooks/privHooks/useAuthProvider";

const Header = () => {
	const { signOut } = useAuthProvider();

	return (
		<div className="flex h-32 w-full items-center justify-center shadow-xl shadow-black">
			<div className="flex h-28 w-[90%] ">
				<div className="flex h-full w-1/2 items-center justify-center">
					<a
						href="https://github.com/sebastianlacoste/hotely-client"
						target="_blank"
						rel="noopener noreferrer"
						className="scale-[60%] sm:scale-75"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="477"
							height="91"
							fill="none"
							viewBox="0 0 477 91"
						>
							<path
								fill="#A5A5A5"
								d="M37.157 87.784H0V85.5c6.494 0 10.222-2.284 10.222-9.139V13.83c0-6.854-3.728-9.139-10.222-9.139V2.406h37.157v2.285c-6.373 0-10.22 2.285-10.22 9.14V76.36c0 6.855 3.847 9.14 10.22 9.14v2.284z"
							></path>
							<path
								fill="#545454"
								d="M45.695 34.273l8.177 10.824-8.177 10.822-8.175-10.822 8.175-10.824z"
							></path>
							<path
								fill="#A5A5A5"
								d="M91.39 87.784H54.113V85.5c6.493 0 10.22-2.284 10.22-9.139V13.83c0-6.854-3.727-9.139-10.22-9.139V2.406H91.39v2.285c-6.493 0-10.22 2.285-10.22 9.14V76.36c0 6.855 3.727 9.14 10.22 9.14v2.284zM143.669 0c-25.732 0-44.49 20.2-44.49 45.09 0 24.89 18.758 45.09 44.49 45.09 25.731 0 44.488-20.2 44.488-45.09C188.157 20.2 169.4 0 143.669 0zm0 86.332c-16.233 0-25.732-18.517-25.732-41.242 0-22.725 9.379-41.242 25.732-41.242 16.232 0 25.611 18.517 25.611 41.242 0 22.725-9.259 41.242-25.611 41.242z"
							></path>
							<path
								fill="#919191"
								d="M191.685 2.406l-1.443 19.84 2.285.36c2.645-10.22 7.695-16.593 18.637-16.593h7.455v70.34c0 6.975-3.848 9.14-10.221 9.14v2.284h37.155v-2.285c-6.493 0-10.221-2.164-10.221-9.138V6.014h7.455c10.942 0 15.992 6.372 18.517 16.593l2.405-.361-1.443-19.84h-70.581z"
							></path>
							<path
								fill="#7D7D7D"
								d="M331.295 87.777l3.727-20.32-2.284-.482c-3.367 10.461-9.98 17.195-20.922 17.195h-8.176c-4.088 0-7.575-1.443-7.575-7.816v-30.06h16.593c6.853 0 9.018 4.569 9.018 11.062h2.405V31.504h-2.405c0 6.493-2.165 11.183-9.018 11.183h-16.593V13.709c0-6.253 3.487-7.696 7.575-7.696h6.613c10.942 0 15.992 5.652 18.517 15.872l2.284-.48-1.442-18.999h-60.481v2.285c6.493 0 10.22 2.164 10.22 9.018v62.645c0 6.974-3.727 9.138-10.22 9.138v2.285h62.164z"
							></path>
							<path
								fill="#686868"
								d="M407.218 67.216l-2.285-.481c-3.366 10.46-9.499 17.434-20.441 17.434h-7.815c-4.088 0-7.575-1.442-7.575-7.815V13.829c0-6.854 3.847-9.138 10.22-9.138V2.406h-37.154v2.285c6.493 0 10.22 2.284 10.22 9.138v62.525c0 6.853-3.727 9.138-10.22 9.138v2.285h61.683l3.367-20.561z"
							></path>
							<path
								fill="#545454"
								d="M450.845 4.69c4.69 0 6.493.362 7.696 1.684.962 1.203.962 3.728-1.203 8.297l-14.188 30.3-15.631-31.262c-2.165-4.329-2.044-6.012-1.082-7.455.841-.962 2.765-1.563 5.891-1.563V2.406h-38.476v2.285c7.695 0 12.024 4.328 18.757 16.232l15.271 30.661v24.77c0 6.974-3.728 9.138-10.221 9.138v2.285h37.154v-2.285c-6.372 0-10.1-2.164-10.1-9.138V50.743l15.391-32.345c6.012-12.024 9.379-13.707 16.593-13.707V2.406h-25.852v2.285z"
							></path>
						</svg>
					</a>
				</div>
				<div className="flex h-full w-1/2 items-center justify-center">
					<nav className="flex w-1/2 justify-between text-xl uppercase text-hotely-gd">
						<Link
							to="/admin"
							className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
						>
							Bookings
						</Link>
						<Link
							to="/admin"
							className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
						>
							Profile
						</Link>
						<Link
							to="/"
							className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							onClick={signOut}
						>
							Sign Out
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
