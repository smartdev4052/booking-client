import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FormData } from "./context/pubContext/FormData";
import { AuthProvider } from "./context/privContext/AuthProvider";

import PubAppLayout from "./layout/PubAppLayout";
import GenPubPage from "./pages/pubPages/GenPubPage";

import PrivAppLayout from "./layout/PrivAppLayout";
import BookingAdmin from "./pages/privPages/BookingAdmin";

function App() {
	return (
		<BrowserRouter>
			<FormData>
				<AuthProvider>
					<Routes>
						{/* Public Routes (noAuth) */}
						<Route path="/" element={<PubAppLayout />}>
							<Route
								index
								element={<GenPubPage aboutType="login" formType="login" />}
							/>
							<Route
								path="register"
								element={
									<GenPubPage aboutType="register" formType="register" />
								}
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

						{/* Private Routes (Auth) */}
						<Route path="/admin" element={<PrivAppLayout />}>
							<Route index element={<BookingAdmin />} />
						</Route>
					</Routes>
				</AuthProvider>
			</FormData>
		</BrowserRouter>
	);
}

export default App;
