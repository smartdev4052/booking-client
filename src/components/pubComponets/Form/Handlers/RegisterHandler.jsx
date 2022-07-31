const Register = async ({
	name,
	email,
	password,
	confirmPassword,
	phone,
	web,
	cleanInputs,
	setAlert,
	alertOut,
	ClientAxios,
}) => {
	if ([name, email, password, confirmPassword, phone, web].includes("")) {
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

export default Register;
