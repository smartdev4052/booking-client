const THead = ({ desing }) => {
	const headers = [
		"Actions",
		"Guest",
		"Check In",
		"Check Out",
		"Room",
		"Total",
		"Status",
	];

	const genHeaders = headers.map((head) => (
		<th className="w-[14%] border-x-2 border-hotely-dk bg-hotely-dk-gy transition-all duration-300 ease-out first:border-l-0 last:border-r-0 hover:cursor-default hover:bg-hotely-med-gy hover:text-white">
			{head}
		</th>
	));

	return <thead className="group h-12 text-hotely-lt-gy">{genHeaders}</thead>;
};

export default THead;
