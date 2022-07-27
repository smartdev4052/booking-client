import { Outlet, Navigate, Link } from "react-router-dom";

import useAuthProvider from "../hooks/privHooks/useAuthProvider";
import useBookingProvider from "../hooks/privHooks/useBookingProvider";

import Header from "../components/privComponents/Header";
import Loading from "../components/privComponents/Loading";
import Alert from "../components/Alert";

const PrivAppLayout = () => {
	const {
		hotel,
		hotelLoading,
		hotelSignOut,
		jwtokenName,
		showMobileMenu,
		setShowMobileMenu,
	} = useAuthProvider();

	const { alert } = useBookingProvider();
	const jwtoken = localStorage.getItem(jwtokenName);

	return (
		<>
			<div>
				{(() => {
					if (jwtoken && hotelLoading) {
						return <Loading />;
					} else if (jwtoken && hotel?._id) {
						return (
							<div className="min-h-screen w-full flex-col items-center justify-between bg-hotely-dk">
								<div className="h-full w-full">
									<Header />
								</div>
								<div className="justify- mt-6 flex h-full w-full items-center">
									<Outlet />
								</div>

								{alert.msg && <Alert alert={alert} />}
								{showMobileMenu ? (
									<div className="fixed right-0 top-0 z-50 h-full w-full bg-black bg-opacity-25 backdrop-blur-sm lg:hidden">
										<div
											className="mobileMenuAnimation fixed right-0 top-0  flex h-screen w-1/2 flex-col bg-hotely-dk shadow-xl shadow-black"
											id="mobileMenu"
										>
											<div className="px-3 py-3">
												{/* Close */}
												<button
													className="rounded-full bg-hotely-med-dk p-1 transition-all duration-200 ease-out hover:scale-105"
													onClick={() => {
														document
															.querySelector("#mobileMenu")
															.classList.add("mobileMenuAnimationClose");
														setTimeout(() => {
															setShowMobileMenu(false);
														}, 900);
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
											<nav className="flex h-full w-full flex-col items-center justify-between text-xl font-medium uppercase text-hotely-gd">
												<div className="mt-12 flex w-full flex-col gap-12">
													<Link
														to="/hotel"
														className="w-full bg-hotely-med-dk py-5 text-center font-semibold tracking-wider shadow-md shadow-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black"
														onClick={() => {
															setShowMobileMenu(false);
														}}
													>
														Bookings
													</Link>
													<Link
														to="/hotel/profile"
														className="w-full bg-hotely-med-dk py-5 text-center font-semibold tracking-wider shadow-md shadow-black transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-black"
														onClick={() => {
															setShowMobileMenu(false);
														}}
													>
														Profile
													</Link>
												</div>
												<div className="flex w-full">
													<Link
														to="/"
														className="w-full py-5 text-center font-semibold tracking-wider shadow-md shadow-black transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-hotely-med-dk hover:shadow-lg hover:shadow-black"
														onClick={hotelSignOut}
													>
														Sign Out
													</Link>
												</div>
											</nav>
										</div>
									</div>
								) : null}
							</div>
						);
					} else {
						return <Navigate to="/" replace />;
					}
				})()}
			</div>
		</>
	);
};

export default PrivAppLayout;
