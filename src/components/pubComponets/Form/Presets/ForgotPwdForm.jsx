const ForgotPwdForm = (GenInput, formInputData, formFooter) => {
	const { email, setEmail } = formInputData;

	formFooter.submitBtnText = "Send Link";
	formFooter.leftLinkText = "Create Account";
	formFooter.leftLinkTo = "/register";
	formFooter.rightLinkText = "Registered? Log In";
	formFooter.rightLinkTo = "/";
	return (
		<>
			<GenInput
				inputType="text"
				inputName="email"
				inputValue={email}
				setInputValue={setEmail}
				spanText="Email"
			/>
		</>
	);
};

export default ForgotPwdForm;
