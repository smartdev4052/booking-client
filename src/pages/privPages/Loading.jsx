const Loading = () => {
	return (
		<div className="flex h-screen w-full items-center justify-center bg-hotely-dk">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="54"
				height="54"
				fill="none"
				viewBox="0 0 54 54"
				className="animate-spin"
			>
				<path
					fill="#fff"
					fillRule="evenodd"
					d="M26.999 45.665A18.668 18.668 0 0040.198 13.8a18.664 18.664 0 00-26.399 0A18.667 18.667 0 0027 45.665zm0 8c14.728 0 26.666-11.938 26.666-26.666S41.727.332 27 .332.332 12.271.332 26.999c0 14.728 11.939 26.666 26.667 26.666z"
					clipRule="evenodd"
					opacity="0.2"
				></path>
				<path
					fill="#fff"
					d="M.332 26.999C.332 12.27 12.271.332 26.999.332v8A18.667 18.667 0 008.332 26.999h-8z"
				></path>
			</svg>
		</div>
	);
};

export default Loading;
