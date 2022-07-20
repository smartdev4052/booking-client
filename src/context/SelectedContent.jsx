import { createContext, useState } from "react";

const SelectedContext = createContext();

export const SelectedContent = ({ children }) => {
	const [selectedContent, setSelectedContent] = useState(
		import.meta.env.VITE_ENV_CONTENT
	);

	return (
		<SelectedContext.Provider
			value={{
				selectedContent,
				setSelectedContent,
			}}
		>
			{children}
		</SelectedContext.Provider>
	);
};

export default SelectedContext;
