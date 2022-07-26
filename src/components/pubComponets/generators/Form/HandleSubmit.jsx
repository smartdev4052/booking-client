import ClientAxios from "../../../../config/ClientAxios";

const HandleSubmit = (e, formType, formData, emailToken, navigate) => {
	e.preventDefault();

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
		setAlert,
		alertOut,
		emailRegExp,
		jwtokenName,
	} = formData;

	const cleanInputs = () => {
		setName("");
		setPassword("");
		setConfirmPassword("");
		setEmail("");
		setPhone("");
		setWeb("");
	};

	const register = async () => {
		if ([name, email, password, confirmPassword, phone, web].includes("")) {
			setAlert({ error: true, msg: "Empty Fields" });
			alertOut();
			return;
		}

		if (password !== confirmPassword) {
			setAlert({ error: true, msg: "Passwords do not match" });
			alertOut();
			return;
		}

		if (password.length < 8) {
			setAlert({ error: true, msg: "Password size min. 8 characters" });
			alertOut();
			return;
		}

		try {
			const { data } = await ClientAxios.post("/hotel", {
				name,
				password,
				email,
				phone,
				web,
			});

			setAlert({
				error: false,
				msg: data.msg,
			});
			alertOut();
			cleanInputs();
		} catch (error) {
			setAlert({ error: true, msg: error.response.data.msg });
			alertOut();
		}
	};

	const login = async () => {
		if ([email, password].includes("")) {
			setAlert({ error: true, msg: "Empty Fields" });
			alertOut();
			return;
		}

		try {
			const { data } = await ClientAxios.post("/hotel/login", {
				email,
				password,
			});
			localStorage.setItem(jwtokenName, data.jwtoken);
			window.location.href = "/hotel";
		} catch (error) {
			setAlert({ error: true, msg: error.response.data.msg });
			alertOut();
		}
	};

	const forgotPwd = async () => {
		if (String(email).toLowerCase().match(emailRegExp)) {
			try {
				const { data } = await ClientAxios.post("/hotel/forgot-password", {
					email,
				});
				setAlert({ error: false, msg: data.msg });
				alertOut();
			} catch (error) {
				setAlert({ error: true, msg: error.response.data.msg });
				alertOut();
			}
		} else {
			setAlert({ error: true, msg: "Email Incorrect" });
			alertOut();
		}
	};

	const pwdReset = async () => {
		if ([password, confirmPassword].includes("")) {
			setAlert({ error: true, msg: "Empty Fields" });
			alertOut();
			return;
		}

		if (password.length < 8) {
			setAlert({ error: true, msg: "Password size min. 8 characters" });
			alertOut();
			return;
		}

		if (password !== confirmPassword) {
			setAlert({ error: true, msg: "Passwords do not match" });
			alertOut();
			return;
		}

		try {
			const { data } = await ClientAxios.post(
				`/hotel/forgot-password/${emailToken}`,
				{
					password,
				}
			);
			setAlert({ error: false, msg: data.msg });
			alertOut();
			setTimeout(() => {
				navigate("/");
			}, 5000);
		} catch (error) {
			setAlert({ error: true, msg: error.response.data.msg });
			alertOut();
		}
	};

	if (formType === "register") {
		register();
	} else if (formType === "login") {
		login();
	} else if (formType === "forgot-password") {
		forgotPwd();
	} else if (formType === "password-reset") {
		pwdReset();
	}
};

const EmailConfirm = async (formData, emailToken) => {
	const { setAlert, alertOut } = formData;

	try {
		const { data } = await ClientAxios(`/hotel/email-confirm/${emailToken}`);

		setAlert({ error: false, msg: data.msg });
		alertOut();
	} catch (error) {
		setAlert({ error: true, msg: error.response.data.msg });
		alertOut();
	}
};

export { HandleSubmit, EmailConfirm };
