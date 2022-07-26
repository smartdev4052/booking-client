const LoginHandler = async ({
	email,
	password,
	ClientAxios,
	jwtokenName,
	setAlert,
	alertOut,
	cleanInputs,
}) => {
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
		cleanInputs();
		window.location.href = "/hotel";
	} catch (error) {
		setAlert({ error: true, msg: error.response.data.msg });
		alertOut();
	}
};

export default LoginHandler;
