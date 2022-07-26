const LoginForm = (GenInput, formInputData, formFooter) => {
	const { email, setEmail, password, setPassword } = formInputData;

	formFooter.submitBtnText = "Log In";
	formFooter.leftLinkText = "Create Account";
	formFooter.leftLinkTo = "/register";
	formFooter.rightLinkText = "Forgot Password?";
	formFooter.rightLinkTo = "/forgot-password";

	return (
		<>
			<GenInput
				inputType="text"
				inputName="email"
				inputValue={email}
				setInputValue={setEmail}
				spanText="Email"
			/>
			<GenInput
				inputType="password"
				inputName="password"
				inputValue={password}
				setInputValue={setPassword}
				spanText="Password"
			/>
		</>
	);
};

export default LoginForm;
