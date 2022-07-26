import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import useRegisterProvider from "../../../../hooks/pubHooks/useRegisterProvider";
import Alert from "../../../Alert";

import { createForm } from "./PresetForms";
import { HandleSubmit, EmailConfirm } from "./HandleSubmit";

const GenForm = ({ formType }) => {
	const formData = useRegisterProvider();
	const navigate = useNavigate();
	let footer = {
		buttonText: "",
		left: "",
		leftTo: "",
		right: "",
		rightTo: "",
	};

	const { emailToken } = useParams();

	useEffect(() => {
		if (
			String(window.location.pathname).toLowerCase().match("/email-confirm/*")
		) {
			EmailConfirm(formData, emailToken);
		}
	}, []);

	const submitForm = (e) => {
		HandleSubmit(e, formType, formData, emailToken, navigate);
	};

	const checkForm = createForm(formType, footer);

	return (
		<div className="formAnimation w-full">
			<div className="mx-auto h-full w-full rounded-3xl transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-black sm:w-[512px] sm:shadow-lg sm:shadow-black">
				<form
					className="tracking-wides flex h-full w-full flex-col items-center justify-between gap-14 px-4 py-6 text-lg font-light tracking-wider sm:px-8 xl:px-12"
					onSubmit={submitForm}
				>
					<div className="mt-4 flex w-full flex-col gap-14">{checkForm}</div>

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
			{formData.alert.msg && <Alert alert={formData.alert} />}
		</div>
	);
};

export default GenForm;
