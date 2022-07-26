const PwdResetForm = (GenInput, formInputData, formFooter) => {
	const { password, setPassword, confirmPassword, setConfirmPassword } =
		formInputData;

	formFooter.submitBtnText = "Set Up";
	formFooter.leftLinkText = "Create Account";
	formFooter.leftLinkTo = "/register";
	formFooter.rightLinkText = "Registered? Log In";
	formFooter.rightLinkTo = "/";
	return (
		<>
			<GenInput
				inputType="password"
				inputName="password"
				inputValue={password}
				setInputValue={setPassword}
				spanText="New Password"
			/>
			<GenInput
				inputType="password"
				inputName=""
				inputValue={confirmPassword}
				setInputValue={setConfirmPassword}
				spanText="Repeat Password"
			/>
		</>
	);
};

export default PwdResetForm;
