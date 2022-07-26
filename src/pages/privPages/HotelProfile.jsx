const HotelProfile = () => {
	return (
		<div className="flex h-screen w-full items-center bg-hotely-dk">
			<div className="mx-auto flex h-[777px] w-[512px] flex-col bg-green-100">
				<div className="h-24 w-full bg-green-200">
					<button className="h-full w-1/2 bg-green-300">Profile</button>
					<button className="h-full w-1/2 bg-green-400">Password</button>
				</div>
				<div className="w-ful h-full bg-red-100">
					<div className="flex h-[612px] w-full items-center justify-center bg-red-200">
						<h1>Inputs</h1>
					</div>
					<div className="h-24 w-full bg-red-300 p-5">
						<button className="h-full w-full bg-red-400">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HotelProfile;
