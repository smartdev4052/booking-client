const EmailConfirm = async (
	{ ClientAxios, setAlert, alertOut, cleanInputs },
	emailToken
) => {
	try {
		const { data } = await ClientAxios(`/hotel/email-confirm/${emailToken}`);

		setAlert({ error: false, msg: data.msg });
		alertOut();
		cleanInputs();
	} catch (error) {
		setAlert({ error: true, msg: error.response.data.msg });
		alertOut();
	}
};

export default EmailConfirm;
