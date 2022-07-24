import { Outlet, Navigate } from "react-router-dom";
import useAuthProvider from "../hooks/privHooks/useAuthProvider";

const PrivAppLayout = () => {
	const { hotel, hotelLoading } = useAuthProvider();
	const jwtoken = localStorage.getItem("hotely-jwtoken");

	return (
		<>
			<div className="container mx-auto flex h-screen items-center justify-center bg-white">
				{(() => {
					if (jwtoken && hotelLoading) {
						return <h1 className="text-black">LOADING...</h1>;
					} else if (jwtoken && hotel?._id) {
						return (
							<main className="container mx-auto flex h-full w-full items-center justify-center bg-hotely-dk text-center text-xl">
								<Outlet />
							</main>
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
