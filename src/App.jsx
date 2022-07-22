import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SelectedContent } from "./context/SelectedContent";

import PubAppLayout from "./layout/PubAppLayout";
import GenPubPage from "./pages/pubPages/GenPubPage";

function App() {
	return (
		<BrowserRouter>
			<SelectedContent>
				<Routes>
					{/* Public Routes (noAuth) */}
					<Route path="/" element={<PubAppLayout />}>
						<Route
							index
							element={<GenPubPage aboutType="login" formType="login" />}
						/>
						<Route
							path="register"
							element={<GenPubPage aboutType="register" formType="register" />}
						/>
						<Route
							path="email-confirm/:emailToken"
							element={
								<GenPubPage aboutType="email-confirm" formType="login" />
							}
						/>
						<Route
							path="forgot-password"
							element={
								<GenPubPage
									aboutType="forgot-password"
									formType="forgot-password"
								/>
							}
						/>
						<Route
							path="forgot-password/:emailToken"
							element={
								<GenPubPage
									aboutType="password-reset"
									formType="password-reset"
								/>
							}
						/>
					</Route>
				</Routes>
			</SelectedContent>
		</BrowserRouter>
	);
}

export default App;
