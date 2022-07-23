import ClientAxios from "../../../../config/ClientAxios";

const HandleSubmit = (e, formType, formData) => {
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

	const forgotPwd = () => {
		console.log("FORGOT PWD");
		setAlert({ error: false, msg: "FORGOT PWD" });
		alertOut();
	};

	const pwdReset = () => {
		console.log("PWD RESET");
		setAlert({ error: false, msg: "PWD RESET" });
		alertOut();
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
