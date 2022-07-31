const RegisterForm = (GenInput, formInputData, formFooter) => {
	const {
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
	} = formInputData;

	formFooter.submitBtnText = "Sign Up";
	formFooter.leftLinkText = "Registered? Log In";
	formFooter.leftLinkTo = "/";
	formFooter.rightLinkText = "Forgot Password?";
	formFooter.rightLinkTo = "/forgot-password";

	return (
		<>
			<GenInput
				inputType="text"
				inputName="name"
				inputValue={name}
				setInputValue={setName}
				spanText="Name"
			/>
			<GenInput
				inputType="password"
				inputName="password"
				inputValue={password}
				setInputValue={setPassword}
				spanText="Password"
			/>
			<GenInput
				inputType="password"
				inputName="confirmPassword"
				inputValue={confirmPassword}
				setInputValue={setConfirmPassword}
				spanText="Repeat Password"
			/>
			<GenInput
				inputType="text"
				inputName="email"
				inputValue={email}
				setInputValue={setEmail}
				spanText="Email"
			/>
			<GenInput
				inputType="text"
				inputName="phone"
				inputValue={phone}
				setInputValue={setPhone}
				spanText="Phone"
			/>
			<GenInput
				inputType="text"
				inputName="web"
				inputValue={web}
				setInputValue={setWeb}
				spanText="Web"
			/>
		</>
	);
};

export default RegisterForm;
