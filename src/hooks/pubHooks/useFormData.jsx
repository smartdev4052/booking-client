import { useContext } from "react";

import FormContext from "../../context/pubContext/FormData";

const useFormData = () => {
	return useContext(FormContext);
};

export default useFormData;
