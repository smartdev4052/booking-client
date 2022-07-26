import GenInput from "./GenInput";
import useRegisterProvider from "../../../../hooks/pubHooks/useRegisterProvider";

const fromLogin = (formsInputs) => {
	const { email, setEmail, password, setPassword } = formsInputs;

	return (
		<>
			<GenInput
				dataType="text"
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
		confirmPassword,
		setConfirmPassword,
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
				dataType="text"
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
				dataType="password"
				inputName="confirmPassword"
				inputValue={confirmPassword}
				setValue={setConfirmPassword}
				tagName="Repeat Password"
			/>
			<GenInput
				dataType="text"
				inputName="email"
				inputValue={email}
				setValue={setEmail}
				tagName="Email"
			/>
			<GenInput
				dataType="text"
				inputName="phone"
				inputValue={phone}
				setValue={setPhone}
				tagName="Phone"
			/>
			<GenInput
				dataType="text"
				inputName="web"
				inputValue={web}
				setValue={setWeb}
				tagName="Web"
			/>
		</>
	);
};

const formEditProfile = (formsInputs) => {
	const { name, setName, email, setEmail, phone, setPhone, web, setWeb } =
		formsInputs;
	return (
		<>
			<GenInput
				dataType="text"
				inputName="name"
				inputValue={name}
				setValue={setName}
				tagName="Name"
				downUpEffect={false}
			/>
			<GenInput
				dataType="text"
				inputName="email"
				inputValue={email}
				setValue={setEmail}
				tagName="Email"
				downUpEffect={false}
			/>
			<GenInput
				dataType="text"
				inputName="phone"
				inputValue={phone}
				setValue={setPhone}
				tagName="Phone"
				downUpEffect={false}
			/>
			<GenInput
				dataType="text"
				inputName="web"
				inputValue={web}
				setValue={setWeb}
				tagName="Web"
				downUpEffect={false}
			/>
		</>
	);
};

const fromForgotPwd = (formsInputs) => {
	const { email, setEmail } = formsInputs;
	return (
		<>
			<GenInput
				dataType="text"
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
		return fromLogin(useRegisterProvider());
	} else if (formType === "register") {
		footer.buttonText = "Register";
		footer.left = "Registered? Log In";
		footer.leftTo = "/";
		footer.right = "Forgot Password?";
		footer.rightTo = "/forgot-password";
		return fromRegister(useRegisterProvider());
	} else if (formType === "forgot-password") {
		footer.buttonText = "Send Link";
		footer.left = "Create Account";
		footer.leftTo = "/register";
		footer.right = "Registered? Log In";
		footer.rightTo = "/";
		return fromForgotPwd(useRegisterProvider());
	} else if (formType === "password-reset") {
		footer.buttonText = "Set Up";
		footer.left = "Create Account";
		footer.leftTo = "/register";
		footer.right = "Registered? Log In";
		footer.rightTo = "/";
		return fromPwdReset(useRegisterProvider());
	}
};

export {
	fromLogin,
	fromRegister,
	fromForgotPwd,
	fromPwdReset,
	createForm,
	formEditProfile,
};
