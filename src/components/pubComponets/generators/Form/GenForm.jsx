import { useState } from "react";
import { Link } from "react-router-dom";

import GenInput from "./GenInput";

const GenForm = ({ formType }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [web, setWeb] = useState("");

	let buttonText = "";
	let footerLeft = "";
	let footerRight = "";

	const fromLogin = () => {
		return (
			<>
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
			</>
		);
	};

	const fromRegister = () => {
		return (
			<>
				<GenInput
					dataType="name"
					inputName="name"
					inputValue={name}
					setValue={setName}
					tagName="Name"
				/>
				<GenInput
					dataType="password"
					inputName="password"
					inputValue={password}
					setValue={setPassword}
					tagName="Password"
				/>
				<GenInput
					dataType="email"
					inputName="email"
					inputValue={email}
					setValue={setEmail}
					tagName="Email"
				/>
				<GenInput
					dataType="phone"
					inputName="phone"
					inputValue={phone}
					setValue={setPhone}
					tagName="Phone"
				/>
				<GenInput
					dataType="web"
					inputName="web"
					inputValue={web}
					setValue={setWeb}
					tagName="Web"
				/>
			</>
		);
	};

	const fromForgotPassword = () => {
		return (
			<>
				<GenInput
					dataType="email"
					inputName="email"
					inputValue={email}
					setValue={setEmail}
					tagName="Email"
				/>
			</>
		);
	};

	const fromPasswordReset = () => {
		return (
			<>
				<GenInput
					dataType="password"
					inputName="password"
					inputValue={password}
					setValue={setPassword}
					tagName="New Password"
				/>
				<GenInput
					dataType="password"
					inputName=""
					inputValue={confirmPassword}
					setValue={setConfirmPassword}
					tagName="Repeat Password"
				/>
			</>
		);
	};

	const checkFormType = () => {
		if (formType === "login") {
			buttonText = "Log In";
			footerLeft = "Create Account";
			footerRight = "Forgot Password?";
			return fromLogin();
		} else if (formType === "register") {
			buttonText = "Register";
			footerLeft = "Registered? Log In";
			footerRight = "Forgot Password?";
			return fromRegister();
		} else if (formType === "forgot-password") {
			buttonText = "Send Link";
			footerLeft = "Create Account";
			footerRight = "Registered? Log In";
			return fromForgotPassword();
		} else if (formType === "password-reset") {
			buttonText = "Set Up";
			return fromPasswordReset();
		}
	};

	return (
		<div className="formAnimation w-full">
			<div className="mx-auto h-full w-full rounded-3xl transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-black sm:w-[512px] xl:shadow-lg xl:shadow-black">
				<form className="tracking-wides flex h-full w-full flex-col items-center justify-between gap-14 px-4 py-6 text-lg font-light tracking-wider sm:px-8 xl:px-12">
					<div className="mt-4 flex w-full flex-col gap-8 xl:gap-16">
						{checkFormType()}
					</div>

					<div className="flex w-full flex-col gap-8">
						<div className="w-full">
							<button
								type="submit"
								className="h-12 w-full rounded-3xl bg-hotely-dk text-2xl font-normal tracking-wider text-hotely-gd shadow-md shadow-black transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black"
							>
								{buttonText}
							</button>
						</div>

						<div className="flex w-full flex-col items-center justify-between gap-3 text-hotely-gd sm:flex-row xl:gap-0 ">
							<Link
								to="/register"
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								{footerLeft}
							</Link>
							<Link
								to="/forgot-password"
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								{footerRight}
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default GenForm;
