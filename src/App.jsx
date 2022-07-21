import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SelectedContent } from "./context/SelectedContent";

import PubAppLayout from "./layout/PubAppLayout";
import Login from "./pages/pubPages/Login";

function App() {
	return (
		<BrowserRouter>
			<SelectedContent>
				<Routes>
					{/* Public Routes (noAuth) */}
					<Route path="/" element={<PubAppLayout />}>
						<Route index element={<Login />} />
					</Route>
				</Routes>
			</SelectedContent>
		</BrowserRouter>
	);
}

export default App;
