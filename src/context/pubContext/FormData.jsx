import { createContext, useState } from "react";

const FormContext = createContext();

export const FormData = ({ children }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [web, setWeb] = useState("");
	const [alert, setAlert] = useState({});

	return (
		<FormContext.Provider
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
			}}
		>
			{children}
		</FormContext.Provider>
	);
};

export default FormContext;
