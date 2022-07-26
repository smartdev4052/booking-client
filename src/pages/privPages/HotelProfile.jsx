import { useState, useEffect } from "react";
import useAuthProvider from "../../hooks/privHooks/useAuthProvider";
import GenInput from "../../components/pubComponets/generators/Form/GenInput";

const HotelProfile = () => {
	const [showForm, setShowForm] = useState("edit-profile");
	const { hotel, editProfile, setAlert, alertOut } = useAuthProvider();
	const [profile, setProfile] = useState({});

	const [password, setPassword] = useState({
		currentPwd: "",
		newPwd: "",
		confirmPwd: "",
	});

	useEffect(() => {
		setProfile(hotel);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (showForm === "edit-profile") {
			if (
				[profile.name, profile.email, profile.phone, profile.web].includes("")
			) {
				setAlert({ error: true, msg: "Empty Fields" });
				alertOut();
				return;
			}

			editProfile(profile);
		} else if (showForm === "edit-password") {
			if (password !== confirmPassword) {
				setAlert({ error: true, msg: "Passwords do not match" });
				alertOut();
				return;
			}

			if (password.length < 8) {
				setAlert({ error: true, msg: "Password size min. 8 characters" });
				alertOut();
				return;
			}
			setAlert({ error: false, msg: "EDIT PASSWORD" });
			alertOut();
		}
	};

	return (
		<div className="flex h-screen w-full items-center bg-hotely-dk">
			<div className="mx-auto flex w-[512px] flex-col">
				<div className="flex h-24 w-full gap-3 py-3 text-xl font-medium text-hotely-gd">
					<button
						className="h-full w-1/2 tracking-wider shadow-lg shadow-black transition-all duration-300 ease-out hover:scale-x-105"
						onClick={() => {
							setShowForm("edit-profile");
						}}
					>
						Profile
					</button>
					<button
						className="h-full w-1/2 tracking-wider shadow-lg shadow-black transition-all duration-300 ease-out hover:scale-105"
						onClick={() => {
							setShowForm("edit-password");
						}}
					>
						Password
					</button>
				</div>
				<form
					className="w-ful h-full rounded-xl shadow-lg shadow-black"
					onSubmit={handleSubmit}
				>
					<div className="mt-5 flex h-[312px] w-full flex-col items-center justify-center gap-10 bg-hotely-dk px-10 pt-5">
						{showForm === "edit-profile" ? (
							<>
								<div className="downUpEffect relative w-full">
									<input
										type="text"
										name="name"
										value={profile.name || ""}
										className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none`}
										onChange={(e) =>
											setProfile({
												...profile,
												[e.target.name]: e.target.value,
											})
										}
									/>
									<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
										Name
									</span>
								</div>

								<div className="downUpEffect relative w-full">
									<input
										type="text"
										name="email"
										value={profile.email || ""}
										className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none`}
										onChange={(e) =>
											setProfile({
												...profile,
												[e.target.name]: e.target.value,
											})
										}
									/>
									<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
										Email
									</span>
								</div>

								<div className="downUpEffect relative w-full">
									<input
										type="text"
										name="phone"
										value={profile.phone || ""}
										className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none`}
										onChange={(e) =>
											setProfile({
												...profile,
												[e.target.name]: e.target.value,
											})
										}
									/>
									<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
										Phone
									</span>
								</div>

								<div className="downUpEffect relative w-full">
									<input
										type="text"
										name="web"
										value={profile.web || ""}
										className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none`}
										onChange={(e) =>
											setProfile({
												...profile,
												[e.target.name]: e.target.value,
											})
										}
									/>
									<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
										Web
									</span>
								</div>
							</>
						) : null}
					</div>
					<div className="flex h-24 w-full items-center justify-center p-5">
						<button
							className="h-full w-1/2 bg-hotely-dk text-lg font-medium tracking-wider text-hotely-gd shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105"
							type="submit"
						>
							Save Changes
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default HotelProfile;
