import { useContext } from "react";
import AuthContext from "../../context/privContext/AuthProvider";

const useAuthProvider = () => {
	return useContext(AuthContext);
};

export default useAuthProvider;
