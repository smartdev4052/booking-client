const PwdResetHandler = async (
	{ password, confirmPassword, ClientAxios, setAlert, alertOut, cleanInputs },
	emailToken
) => {
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
			cleanInputs();
		}, 3000);
		setTimeout(() => {
			window.location.href = "/";
		}, 5000);
	} catch (error) {
		setAlert({ error: true, msg: error.response.data.msg });
		alertOut();
	}
};

export default PwdResetHandler;
