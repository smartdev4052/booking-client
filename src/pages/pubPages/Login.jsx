import About from "../../components/pubComponets/About";
import FormRegister from "../../components/pubComponets/FormRegister";

const Login = () => {
	return (
		<div className="flex h-full w-full items-center justify-center py-10">
			<div className="mx-auto flex h-full w-3/4">
				<div className="flex h-full w-1/2 items-center justify-center">
					<About description="Log In and Manage" highlight="your Bookings" />
				</div>
				<div className="flex h-full w-1/2 items-center justify-center">
					<FormRegister />
				</div>
			</div>
		</div>
	);
};

export default Login;
