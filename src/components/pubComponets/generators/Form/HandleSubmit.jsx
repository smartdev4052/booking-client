const HandleSubmit = (e, formType, setAlert) => {
	e.preventDefault();

	const alertOut = () => {
		setTimeout(() => {
			setAlert({});
		}, 10000);
	};

	const register = (e) => {
		console.log("REGISTER");
		setAlert({ error: false, msg: "REGISTER" });
		alertOut();
	};

	const login = (e) => {
		console.log("LOGIN");
		setAlert({ error: false, msg: "LOGIN" });
		alertOut();
	};

	const forgotPwd = (e) => {
		console.log("FORGOT PWD");
		setAlert({ error: false, msg: "FORGOT PWD" });
		alertOut();
	};

	const pwdReset = (e) => {
		console.log("PWD RESET");
		setAlert({ error: false, msg: "PWD RESET" });
		alertOut();
	};

	if (formType === "register") {
		register(e);
	} else if (formType === "login") {
		login(e);
	} else if (formType === "forgot-password") {
		forgotPwd(e);
	} else if (formType === "password-reset") {
		pwdReset(e);
	}
};

export default HandleSubmit;
