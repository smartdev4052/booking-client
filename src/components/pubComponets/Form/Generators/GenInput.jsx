import useRegisterProvider from "../../../../hooks/pubHooks/useRegisterProvider";

const GenInput = ({
	inputType = "text",
	inputName,
	inputValue,
	setInputValue,
	spanText,
	downUpEffect = true,
}) => {
	const { emailRegExp } = useRegisterProvider();

	const verifyBlanks = () => {
		if (
			inputValue !== "" &&
			inputName !== "email" &&
			inputType !== "password"
		) {
			if (inputValue.match(/^ *$/) !== null) {
				return "border-red-400";
			} else {
				return "border-green-400";
			}
		}
	};

	const verifyEmail = () => {
		if (
			inputValue !== "" &&
			inputType !== "password" &&
			inputName === "email"
		) {
			if (!String(inputValue).toLowerCase().match(emailRegExp)) {
				return "border-red-400";
			} else {
				return "border-green-400";
			}
		}
	};

	return (
		<div className="downUpEffect relative w-full">
			<input
				type={inputType}
				name={inputName}
				value={inputValue}
				{...(downUpEffect && { placeholder: " " })}
				className={`w-full border-b-[1px] bg-transparent py-1 pl-1 text-hotely-lt-gy outline-none ${verifyBlanks()} ${verifyEmail()}`}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<span className="pointer-events-none absolute left-1 translate-y-0 text-xl tracking-wider text-hotely-lt-gy text-opacity-50 transition-all duration-300 ease-out">
				{spanText}
			</span>
		</div>
	);
};

export default GenInput;
