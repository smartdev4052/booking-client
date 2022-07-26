//* Handlers
import RegisterHandler from "./RegisterHandler";
import LoginHandler from "./LoginHandler";
import ForgotPwdHandler from "./ForgotPwdHandler";
import PwdResetHandler from "./PwdResetHandler";

const HandleSubmit = (formType, formInputData, emailToken) => {
	if (formType === "register") {
		RegisterHandler(formInputData);
	} else if (formType === "login") {
		LoginHandler(formInputData);
	} else if (formType === "forgot-password") {
		ForgotPwdHandler(formInputData);
	} else if (formType === "password-reset") {
		PwdResetHandler(formInputData, emailToken);
	}
};

export default HandleSubmit;
