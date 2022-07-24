import { Outlet, Navigate } from "react-router-dom";

import useAuthProvider from "../hooks/privHooks/useAuthProvider";
import useBookingProvider from "../hooks/privHooks/useBookingProvider";

import Header from "../components/privComponents/Header";
import Loading from "../components/privComponents/Loading";
import Alert from "../components/Alert";

const PrivAppLayout = () => {
	const { hotel, hotelLoading } = useAuthProvider();
	const { alert } = useBookingProvider();
	const jwtoken = localStorage.getItem("hotely-jwtoken");

	return (
		<>
			<div>
				{(() => {
					if (jwtoken && hotelLoading) {
						return <Loading />;
					} else if (jwtoken && hotel?._id) {
						return (
							<div className="max-w-fill flex max-h-full min-h-full min-w-full flex-col items-center justify-between bg-hotely-dk">
								<Header />
								<Outlet />
								{alert.msg && <Alert alert={alert} />}
							</div>
						);
					} else {
						return <Navigate to="/" />;
					}
				})()}
			</div>
		</>
	);
};

export default PrivAppLayout;
