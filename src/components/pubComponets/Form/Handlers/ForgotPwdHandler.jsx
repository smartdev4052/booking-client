const ForgotPwd = async ({
	email,
	ClientAxios,
	emailRegExp,
	cleanInputs,
	setAlert,
	alertOut,
}) => {
	if (String(email).toLowerCase().match(emailRegExp)) {
		try {
			const { data } = await ClientAxios.post("/hotel/forgot-password", {
				email,
			});
			setAlert({ error: false, msg: data.msg });
			alertOut();
			cleanInputs();
		} catch (error) {
			setAlert({ error: true, msg: error.response.data.msg });
			alertOut();
		}
	} else {
		setAlert({ error: true, msg: "Email Incorrect" });
		alertOut();
	}
};

export default ForgotPwd;
