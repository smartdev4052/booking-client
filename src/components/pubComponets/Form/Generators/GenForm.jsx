import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import useRegisterProvider from "../../../../hooks/pubHooks/useRegisterProvider";
import Alert from "../../../Alert";

import CreateForm from "../Presets/CreateForm";
import SubmitHandler from "../Handlers/SubmitHandler";
import EmailConfirmHandler from "../Handlers/EmailConfirmHandler";

const GenForm = ({ formType }) => {
	const formInputData = useRegisterProvider();
	const { emailToken } = useParams();

	let formFooter = {
		submitBtnText: "",
		leftLinkText: "",
		leftLinkTo: "",
		rightLinkText: "",
		rightLinkTo: "",
	};

	useEffect(() => {
		if (
			String(window.location.pathname).toLowerCase().match("/email-confirm/*")
		) {
			EmailConfirmHandler(formInputData, emailToken);
		}
	}, []);

	const submitFormHandler = (e) => {
		e.preventDefault();
		SubmitHandler(formType, formInputData, emailToken);
	};

	return (
		<div className="formAnimation w-full">
			<div className="mx-auto h-full w-full rounded-3xl transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-black sm:w-[512px] sm:shadow-lg sm:shadow-black">
				<form
					className="tracking-wides flex h-full w-full flex-col items-center justify-between gap-14 px-4 py-6 text-lg font-light tracking-wider sm:px-8 xl:px-12"
					onSubmit={submitFormHandler}
				>
					<div className="mt-4 flex w-full flex-col gap-14">
						{CreateForm(formType, formFooter, formInputData)}
					</div>

					<div className="flex w-full flex-col gap-8">
						<div className="w-full">
							<button
								type="submit"
								className="h-12 w-full rounded-3xl bg-hotely-dk text-2xl font-normal tracking-wider text-hotely-gd shadow-md shadow-black transition-all duration-300 ease-out hover:shadow-lg hover:shadow-black"
							>
								{formFooter.submitBtnText}
							</button>
						</div>

						<div className="flex w-full flex-col items-center justify-between gap-3 text-hotely-gd sm:flex-row xl:gap-0 ">
							<Link
								to={formFooter.leftLinkTo}
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								{formFooter.leftLinkText}
							</Link>
							<Link
								to={formFooter.rightLinkTo}
								className="opacity-75 transition-all duration-300 ease-out hover:opacity-100"
							>
								{formFooter.rightLinkText}
							</Link>
						</div>
					</div>
				</form>
			</div>
			{formInputData.alert.msg && <Alert alert={formInputData.alert} />}
		</div>
	);
};

export default GenForm;
