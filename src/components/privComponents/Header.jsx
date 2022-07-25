import { Link } from "react-router-dom";

import useAuthProvider from "../../hooks/privHooks/useAuthProvider";

const Header = () => {
	const { signOut } = useAuthProvider();

	return (
		<div className="z-10 flex h-32 w-full items-center justify-center shadow-xl shadow-black">
			<div className="gitHubAnimation absolute -top-[3px] left-[33px] cursor-pointer">
				<a
					href="https://github.com/sebastianlacoste/hotely-client"
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="group">
						{/* Tag */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="48"
							height="58"
							fill="none"
							viewBox="0 0 48 58"
							className="transition-all duration-200 ease-out group-hover:scale-105"
						>
							<path
								fill="#7C6C52"
								d="M0 58V1a3 3 0 013-3h42a3 3 0 013 3v57L24 45.59 0 58z"
							></path>
						</svg>
						{/* GitHub */}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="31"
							height="30"
							fill="none"
							viewBox="0 0 31 30"
							className="absolute left-[8px] top-2 transition-all duration-200 ease-in group-hover:scale-110"
						>
							<path
								fill="#F6F6F6"
								fillRule="evenodd"
								d="M15.5 0C6.936 0 0 6.882 0 15.38c0 6.805 4.437 12.553 10.598 14.59.775.135 1.066-.326 1.066-.73 0-.365-.02-1.576-.02-2.864-3.894.711-4.902-.942-5.212-1.807-.174-.443-.93-1.807-1.588-2.173-.543-.288-1.318-1-.02-1.019 1.221-.019 2.093 1.115 2.383 1.577 1.395 2.326 3.624 1.672 4.515 1.269.136-1 .542-1.673.988-2.057-3.449-.385-7.053-1.711-7.053-7.594 0-1.672.601-3.057 1.59-4.133-.156-.385-.698-1.961.154-4.076 0 0 1.298-.403 4.263 1.577 1.24-.346 2.557-.52 3.875-.52 1.317 0 2.635.174 3.875.52 2.964-2 4.262-1.577 4.262-1.577.853 2.115.31 3.691.155 4.076.988 1.076 1.589 2.441 1.589 4.133 0 5.902-3.623 7.21-7.072 7.594.562.48 1.046 1.403 1.046 2.845 0 2.057-.019 3.71-.019 4.23 0 .403.29.883 1.066.73a15.518 15.518 0 007.645-5.61A15.324 15.324 0 0031 15.378C31 6.882 24.064 0 15.5 0z"
								clipRule="evenodd"
							></path>
						</svg>
					</div>
				</a>
			</div>
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
					<nav className="flex w-1/2 justify-between text-xl font-medium uppercase text-hotely-gd">
						<Link
							to="/admin"
							className="opacity-80 transition-all duration-300 ease-out hover:-translate-y-1 hover:opacity-100"
						>
							Bookings
						</Link>
						<Link
							to="/admin"
							className="opacity-80 transition-all duration-300 ease-out hover:-translate-y-1 hover:opacity-100"
						>
							Profile
						</Link>
						<Link
							to="/"
							className="opacity-80 transition-all duration-300 ease-out hover:-translate-y-1 hover:opacity-100"
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
