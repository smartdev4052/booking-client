import { useState } from "react";
import { Link } from "react-router-dom";

import Alert from "../../../Alert";
import { createForm } from "./PresetForms";

const GenForm = ({ formType }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [web, setWeb] = useState("");

	const [alert, setAlert] = useState({});

	let footer = {
		buttonText: "",
		left: "",
		leftTo: "",
		right: "",
		rightTo: "",
	};

	const checkForm = createForm(
		formType,
		{
			name,
			setName,
			password,
			setPassword,
			confirmPassword,
			setConfirmPassword,
			email,
			setEmail,
			phone,
			setPhone,
			web,
			setWeb,
		},
		footer
	);

	const handleSubmit = (e) => {
		e.preventDefault();
		setAlert({ error: false, msg: "Email Incorrect. Plase input again" });
		setTimeout(() => {
			setAlert({});
		}, 10000);
	};

	return (
		<div className="formAnimation w-full">
			<div className="mx-auto h-full w-full rounded-3xl transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-black sm:w-[512px] xl:shadow-lg xl:shadow-black">
				<form
					className="tracking-wides flex h-full w-full flex-col items-center justify-between gap-14 px-4 py-6 text-lg font-light tracking-wider sm:px-8 xl:px-12"
					onSubmit={handleSubmit}
				>
					<div className="mt-4 flex w-full flex-col gap-8 xl:gap-16">
						{checkForm}
					</div>

					<div className="flex w-full flex-col gap-8">
						<div className="w-full">
							<button
								type="submit"
								className="h-12 w-full rounded-3xl bg-hotely-dk text-2xl font-normal tracking-wider text-hotely-gd shadow-md shadow-black transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black"
							>
								{footer.buttonText}
							</button>
						</div>

						<div className="flex w-full flex-col items-center justify-between gap-3 text-hotely-gd sm:flex-row xl:gap-0 ">
							<Link
								to={footer.leftTo}
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								{footer.left}
							</Link>
							<Link
								to={footer.rightTo}
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								{footer.right}
							</Link>
						</div>
					</div>
				</form>
			</div>
			{alert.msg && <Alert alert={alert} />}
		</div>
	);
};

export default GenForm;
