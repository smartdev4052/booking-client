const THead = () => {
	const headers = ["Guest", "Check In", "Check Out", "Room", "Total", "Status"];

	const genHeaders = headers.map((head) => (
		<th
			className="w-[14%] border-x-2 border-b-2 border-hotely-dk bg-hotely-gd font-medium transition-all duration-300 ease-out first:rounded-tl-xl first:border-l-0 last:rounded-tr-xl last:border-r-0 hover:cursor-default hover:text-white"
			key={Math.random()}
		>
			{head}
		</th>
	));

	return (
		<thead className="sticky top-0 z-10 h-14 text-lg tracking-widest text-white">
			<tr>{genHeaders}</tr>
		</thead>
	);
};

export default THead;
