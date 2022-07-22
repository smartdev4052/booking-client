import { useState } from "react";
import { Link } from "react-router-dom";

import GenInput from "../../helpers/hotelForm/GenInput";

const GenForm = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [web, setWeb] = useState("");

	return (
		<div className="formAnimation w-full">
			<div className="mx-auto h-full w-full rounded-3xl transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-black sm:h-[366px] sm:w-[512px] xl:shadow-lg xl:shadow-black">
				<form className="tracking-wides flex h-full w-full flex-col items-center justify-between gap-14 px-4 py-6 text-lg font-light tracking-wider sm:px-8 xl:px-12">
					<div className="mt-4 flex w-full flex-col gap-16">
						<GenInput
							dataType="email"
							inputName="email"
							inputValue={email}
							setValue={setEmail}
							tagName="Email"
						/>
						<GenInput
							dataType="password"
							inputName="password"
							inputValue={password}
							setValue={setPassword}
							tagName="Password"
						/>
					</div>

					<div className="flex w-full flex-col gap-8">
						<div className="w-full">
							<button
								type="submit"
								className="h-12 w-full rounded-3xl bg-hotely-dk text-2xl font-normal tracking-wider text-hotely-gd shadow-md shadow-black transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black"
							>
								Log In
							</button>
						</div>

						<div className="flex w-full flex-col items-center justify-between gap-3 text-hotely-gd sm:flex-row xl:gap-0 ">
							<Link
								to="/register"
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								Create Account
							</Link>
							<Link
								to="/forgot-password"
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								Forgot Password?
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default GenForm;
