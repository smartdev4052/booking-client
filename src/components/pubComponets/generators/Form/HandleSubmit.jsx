import ClientAxios from "../../../../config/ClientAxios";

const HandleSubmit = (e, formType, formData, emailToken = "") => {
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
	} = formData;

	const emailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const alertOut = () => {
		setTimeout(() => {
			setAlert({});
		}, 5000);
	};

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
		console.log("LOGIN");
		setAlert({ error: false, msg: "LOGIN" });
		alertOut();
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
				window.location.href = "/";
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
	const { setAlert } = formData;

	const alertOut = () => {
		setTimeout(() => {
			setAlert({});
		}, 5000);
	};

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
