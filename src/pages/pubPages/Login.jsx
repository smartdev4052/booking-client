import About from "../../components/pubComponets/About";
import GenForm from "../../helpers/hotelForm/GenForm";

const Login = () => {
	return (
		<div className="flex h-full w-full items-center justify-center py-10">
			<div className="mx-auto flex h-full w-full flex-col items-center justify-center xl:w-[1280px] xl:flex-row">
				<div className="flex h-full w-full items-center justify-center xl:w-1/2">
					<About description="Log In and Manage" highlight="your Bookings" />
				</div>
				<div className="flex h-full w-full items-start justify-center xl:w-1/2 xl:items-center">
					<GenForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
