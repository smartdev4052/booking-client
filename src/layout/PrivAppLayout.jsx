import { Outlet, Navigate } from "react-router-dom";
import useAuthProvider from "../hooks/privHooks/useAuthProvider";

import Header from "../pages/privPages/Header";
import Loading from "../pages/privPages/Loading";

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
							<div className="min-h-screen w-full bg-hotely-dk">
								<div className="flex h-full w-full flex-col gap-10 py-8 lg:h-screen lg:py-0">
									<Header />
									<Outlet />
								</div>
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
