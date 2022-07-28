import { Outlet, Navigate } from "react-router-dom";

import useAuthProvider from "../hooks/privHooks/useAuthProvider";
import useBookingProvider from "../hooks/privHooks/useBookingProvider";

import Header from "../components/privComponents/Header";
import Loading from "../components/privComponents/Loading";
import MobileMenu from "../components/privComponents/MobileMenu";
import Alert from "../components/Alert";

const PrivAppLayout = () => {
	const { hotel, hotelLoading, jwtokenName, showMobileMenu } =
		useAuthProvider();

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
								<div className="justify- mt-6 flex h-full w-full items-center overflow-hidden">
									<Outlet />
								</div>

								{showMobileMenu && <MobileMenu />}
								{alert.msg && <Alert alert={alert} />}
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
