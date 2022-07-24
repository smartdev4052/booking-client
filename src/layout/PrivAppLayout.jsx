import { Outlet, Navigate } from "react-router-dom";
import useAuthProvider from "../hooks/privHooks/useAuthProvider";

import Header from "../components/privComponents/Header";
import Loading from "../components/privComponents/Loading";

const PrivAppLayout = () => {
	const { hotel, hotelLoading } = useAuthProvider();
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
