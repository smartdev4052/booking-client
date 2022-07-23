import GenInput from "./GenInput";
import useFormData from "../../../../hooks/pubHooks/useFormData";

const fromLogin = (formsInputs) => {
	const { email, setEmail, password, setPassword } = formsInputs;

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

const fromRegister = (formsInputs) => {
	const {
		name,
		setName,
		password,
		setPassword,
		email,
		setEmail,
		phone,
		setPhone,
		web,
		setWeb,
	} = formsInputs;
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

const fromForgotPwd = (formsInputs) => {
	const { email, setEmail } = formsInputs;
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

const fromPwdReset = (formsInputs) => {
	const { password, setPassword, confirmPassword, setConfirmPassword } =
		formsInputs;
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

const createForm = (formType, footer) => {
	if (formType === "login") {
		footer.buttonText = "Log In";
		footer.left = "Create Account";
		footer.leftTo = "/register";
		footer.right = "Forgot Password?";
		footer.rightTo = "/forgot-password";
		return fromLogin(useFormData());
	} else if (formType === "register") {
		footer.buttonText = "Register";
		footer.left = "Registered? Log In";
		footer.leftTo = "/";
		footer.right = "Forgot Password?";
		footer.rightTo = "/forgot-password";
		return fromRegister(useFormData());
	} else if (formType === "forgot-password") {
		footer.buttonText = "Send Link";
		footer.left = "Create Account";
		footer.leftTo = "/register";
		footer.right = "Registered? Log In";
		footer.rightTo = "/";
		return fromForgotPwd(useFormData());
	} else if (formType === "password-reset") {
		footer.buttonText = "Set Up";
		return fromPwdReset(useFormData());
	}
};

export { fromLogin, fromRegister, fromForgotPwd, fromPwdReset, createForm };
