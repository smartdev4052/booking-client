import GenInput from "../Generators/GenInput";

//* Forms
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPwdForm from "./ForgotPwdForm";
import PwdResetForm from "./PwdResetForm";

const CreateForm = (formType, formFooter, formInputData) => {
	if (formType === "login") {
		return LoginForm(GenInput, formInputData, formFooter);
	} else if (formType === "register") {
		return RegisterForm(GenInput, formInputData, formFooter);
	} else if (formType === "forgot-password") {
		return ForgotPwdForm(GenInput, formInputData, formFooter);
	} else if (formType === "password-reset") {
		return PwdResetForm(GenInput, formInputData, formFooter);
	}
};

export default CreateForm;
