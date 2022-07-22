const genFormInput = ({
	dataType = "text",
	inputName,
	inputValue,
	setValue,
	tagName,
}) => {
	const emailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const verifyTypeText = () => {
		if (inputValue !== "" && dataType !== "email" && dataType !== "password") {
			if (inputValue.match(/^ *$/) !== null) {
				return "border-red-400";
			} else {
				return "border-green-400";
			}
		}
	};

	const verifyTypeEmail = () => {
		if (inputValue !== "" && dataType !== "password" && dataType === "email") {
			if (!String(inputValue).toLowerCase().match(emailRegExp)) {
				return "border-red-400";
			} else {
				return "border-green-400";
			}
		}
	};

	return (
		<div className="inputForm relative w-full">
			<input
				type={dataType}
				name={inputName}
				value={inputValue}
				placeholder=" "
				className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none ${verifyTypeText()} ${verifyTypeEmail()}`}
				onChange={(e) => setValue(e.target.value)}
			/>
			<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
				{tagName}
			</span>
		</div>
	);
};

export default genFormInput;
