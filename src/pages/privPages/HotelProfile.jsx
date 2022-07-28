import { useState, useEffect } from "react";
import useAuthProvider from "../../hooks/privHooks/useAuthProvider";

const HotelProfile = () => {
	const [showForm, setShowForm] = useState("edit-profile");
	const {
		hotel,
		editProfile,
		changePassword,
		setAlert,
		alertOut,
		alertRunning,
	} = useAuthProvider();
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
			if (
				[password.currentPwd, password.newPwd, password.confirmPwd].includes("")
			) {
				setAlert({ error: true, msg: "Empty Fields" });
				alertOut();
				return;
			}

			if (password.newPwd.length < 8) {
				setAlert({ error: true, msg: "Password size min. 8 characters" });
				alertOut();
				return;
			}

			if (password.newPwd !== password.confirmPwd) {
				setAlert({ error: true, msg: "Passwords do not match" });
				alertOut();
				return;
			}

			setPassword({
				currentPwd: "",
				newPwd: "",
				confirmPwd: "",
			});

			changePassword({
				currentPwd: password.currentPwd,
				newPwd: password.newPwd,
			});
		}
	};

	return (
		<div className="profileAnimation z-0 flex h-full w-full items-center justify-center bg-hotely-dk">
			<div className="flex w-full flex-col gap-2 p-2 sm:w-[512px]">
				<div
					className="flex h-24 w-full gap-1 rounded-2xl bg-opacity-0 px-1 py-4 text-xl font-semibold text-hotely-gd"
					id="profileOptions"
				>
					<button
						className="h-full w-1/2 rounded-l-2xl bg-hotely-med-dk uppercase tracking-wider shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-black"
						onClick={() => {
							setShowForm("edit-profile");
						}}
					>
						Profile
					</button>
					<button
						className="h-full w-1/2 rounded-r-2xl bg-hotely-med-dk uppercase tracking-wider shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-black"
						onClick={() => {
							setShowForm("edit-password");
						}}
					>
						Password
					</button>
				</div>
				<form
					className="w-ful flex h-full flex-col gap-5 rounded-2xl p-5 shadow-md shadow-black transition-all duration-300 ease-out hover:shadow-xl hover:shadow-black"
					onSubmit={handleSubmit}
				>
					<div className="flex h-full w-full flex-col items-center justify-center gap-14 rounded-2xl px-6 py-8 shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-black sm:px-10">
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
						) : (
							<>
								<div className="downUpEffect relative w-full">
									<input
										type="password"
										name="currentPwd"
										value={password.currentPwd || ""}
										className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none`}
										onChange={(e) =>
											setPassword({
												...password,
												[e.target.name]: e.target.value,
											})
										}
									/>
									<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
										Password
									</span>
								</div>

								<div className="downUpEffect relative w-full">
									<input
										type="password"
										name="newPwd"
										value={password.newPwd || ""}
										className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none`}
										onChange={(e) =>
											setPassword({
												...password,
												[e.target.name]: e.target.value,
											})
										}
									/>
									<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
										New Password
									</span>
								</div>

								<div className="downUpEffect relative w-full">
									<input
										type="password"
										name="confirmPwd"
										value={password.confirmPwd || ""}
										className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none`}
										onChange={(e) =>
											setPassword({
												...password,
												[e.target.name]: e.target.value,
											})
										}
									/>
									<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
										Repeat Password
									</span>
								</div>
							</>
						)}
					</div>
					<div className="flex h-24 w-full items-center justify-center rounded-2xl bg-hotely-med-dk p-5 shadow-inner shadow-black">
						<button
							className="hover:sh h-full w-4/5 rounded-2xl bg-hotely-dk text-lg font-medium uppercase tracking-wider text-hotely-gd shadow-md shadow-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-black"
							type="submit"
							{...(alertRunning && { disabled: true })}
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
