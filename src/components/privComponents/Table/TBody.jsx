const TBody = () => {
	return (
		<tbody className="group h-14 text-hotely-lt-gy">
			<tr>
				<th className="w-[14%] border-x-2 border-hotely-dk bg-hotely-dk-gy bg-opacity-25 transition-all duration-300 ease-out first:border-l-0 last:border-r-0 hover:cursor-default hover:text-white">
					<div className="flex h-full w-full items-center justify-between px-6">
						{/* Delete */}
						<button
							className="transition-all duration-300 ease-out hover:scale-110"
							title="Delete"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="none"
								viewBox="0 0 32 32"
							>
								<path
									fill="#7C6C52"
									d="M5.647 7.53a7.53 7.53 0 1115.059 0 7.53 7.53 0 01-15.059 0zM0 20.705c0-2.095 1.7-3.765 3.782-3.765h11.76a10.31 10.31 0 00-2.365 6.588c0 2.453.852 4.706 2.277 6.481-.743.072-1.506.108-2.277.108-3.492 0-6.745-.727-9.158-2.265C1.568 26.291 0 23.887 0 20.706zm32 2.823a8.47 8.47 0 11-16.94 0 8.47 8.47 0 0116.94 0zm-4.98-2.157a.942.942 0 00-1.333-1.332l-2.158 2.159-2.157-2.16a.942.942 0 00-1.332 1.333l2.159 2.157-2.16 2.158a.941.941 0 101.333 1.332l2.157-2.159 2.158 2.16a.943.943 0 001.332-1.333l-2.159-2.158 2.16-2.157z"
								></path>
							</svg>
						</button>
						{/* Edit */}
						<button
							className="transition-all duration-300 ease-out hover:scale-110"
							title="Edit"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="none"
								viewBox="0 0 32 32"
							>
								<path
									fill="#7C6C52"
									d="M14.323 24.173l6.525-5.891H3.798c-.5 0-.993.088-1.454.26-.46.173-.88.425-1.232.744a3.427 3.427 0 00-.823 1.113c-.191.416-.29.862-.289 1.312v1.4c0 .873.304 1.723.862 2.433 2.343 2.968 6.025 4.588 10.947 4.884a2.908 2.908 0 01.108-.855l.77-2.79a5.5 5.5 0 011.638-2.61h-.002zM13.496 0a9.23 9.23 0 013.23.58 8.55 8.55 0 012.737 1.652 7.618 7.618 0 011.83 2.472c.423.925.642 1.916.642 2.917 0 1-.219 1.991-.643 2.916a7.618 7.618 0 01-1.829 2.472 8.549 8.549 0 01-2.738 1.652 9.231 9.231 0 01-3.229.58c-2.238 0-4.384-.803-5.967-2.232-1.582-1.429-2.471-3.367-2.471-5.388s.889-3.96 2.471-5.389C9.112.802 11.26 0 13.496 0zM25.48 16.255l-9.962 8.995a4.011 4.011 0 00-1.192 1.9l-.773 2.791c-.077.278-.073.569.012.845.085.276.247.527.471.73.224.202.503.348.808.424.306.076.628.08.935.01l3.088-.696a4.674 4.674 0 002.107-1.078l9.96-8.995c.696-.659 1.079-1.537 1.067-2.446-.012-.91-.418-1.78-1.13-2.423s-1.675-1.01-2.683-1.02c-1.007-.01-1.98.335-2.708.963z"
								></path>
							</svg>
						</button>
						{/* Info */}
						<button
							className="transition-all duration-300 ease-out hover:scale-110"
							title="Info"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="none"
								viewBox="0 0 32 32"
							>
								<path
									fill="#7C6C52"
									d="M13.177 0a7.53 7.53 0 100 15.059 7.53 7.53 0 000-15.059zM3.782 16.941A3.766 3.766 0 000 20.706c0 3.183 1.568 5.583 4.019 7.147 2.413 1.538 5.666 2.265 9.158 2.265.771 0 1.536-.036 2.277-.108a10.31 10.31 0 01-2.277-6.48c0-2.504.888-4.8 2.366-6.589H3.782zm18.57 2.824a1.177 1.177 0 112.354 0 1.177 1.177 0 01-2.353 0zm2.119 7.53a.941.941 0 01-1.883 0v-3.766a.941.941 0 011.883 0v3.765zm-9.412-3.766a8.47 8.47 0 1116.941 0 8.47 8.47 0 01-16.941 0zm1.882 0a6.588 6.588 0 1013.176 0 6.588 6.588 0 00-13.176 0z"
								></path>
							</svg>
						</button>
					</div>
				</th>
			</tr>
		</tbody>
	);
};

export default TBody;
