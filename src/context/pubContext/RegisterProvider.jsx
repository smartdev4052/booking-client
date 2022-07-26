import { createContext, useState } from "react";

const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [web, setWeb] = useState("");
	const [alert, setAlert] = useState({});
	const emailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const jwtokenName = "sl-hotely-jwtoken";

	const alertOut = () => {
		setTimeout(() => {
			setAlert({});
		}, 5000);
	};

	return (
		<RegisterContext.Provider
			value={{
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
				alert,
				setAlert,
				alertOut,
				emailRegExp,
				jwtokenName,
			}}
		>
			{children}
		</RegisterContext.Provider>
	);
};

export default RegisterContext;
