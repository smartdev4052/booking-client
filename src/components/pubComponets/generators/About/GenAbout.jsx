import About from "./About";

const GenAbout = ({ aboutType }) => {
	const about = () => {
		if (aboutType === "login") {
			return (
				<About description="Log In and Manage" highlight="your Bookings" />
			);
		} else if (aboutType === "register") {
			return (
				<About description="Sign Up and Manage" highlight="your Bookings" />
			);
		} else if (aboutType === "email-confirm") {
			return <About description="" highlight="Email Confirmed" />;
		} else if (aboutType === "forgot-password") {
			return (
				<About
					description="We will send you a"
					highlight="Password Reset Link"
				/>
			);
		} else if (aboutType === "password-reset") {
			return <About description="Set Up your new" highlight="Password" />;
		}
	};

	return about();
};

export default GenAbout;
