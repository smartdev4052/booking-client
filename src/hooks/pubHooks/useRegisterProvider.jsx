import { useContext } from "react";

import RegisterContext from "../../context/pubContext/RegisterProvider";

const useRegisterProvider = () => {
	return useContext(RegisterContext);
};

export default useRegisterProvider;
