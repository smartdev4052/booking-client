import { useContext } from "react";
import BookingContext from "../../context/privContext/BookingProvider";

const useBookingProvider = () => {
	return useContext(BookingContext);
};

export default useBookingProvider;
