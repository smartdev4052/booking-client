import { createContext, useState } from "react";
import ClientAxios from "../../config/ClientAxios";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [web, setWeb] = useState("");
	const [alert, setAlert] = useState({});

	const jwtokenName = "sl-hotely-jwtoken";
	const emailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const cleanInputs = () => {
		setName("");
		setPassword("");
		setConfirmPassword("");
		setEmail("");
		setPhone("");
		setWeb("");
	};

	const alertOut = () => {
		setTimeout(() => {
			setAlert({});
		}, 5000);
	};

	return (
		<RegisterContext.Provider
			value={{
				name,
				password,
				confirmPassword,
				email,
				phone,
				web,
				alert,
				emailRegExp,
				jwtokenName,
				ClientAxios,
				setName,
				setPassword,
				setConfirmPassword,
				setEmail,
				setPhone,
				setWeb,
				cleanInputs,
				setAlert,
				alertOut,
			}}
		>
			{children}
		</RegisterContext.Provider>
	);
};

export default RegisterContext;
