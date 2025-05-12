import { Route, Routes } from "react-router-dom";
import Auth from "../Pages/Auth";
import Dashboard from "../Pages/Dashboard";
import "./App.css";
import Layout from "../Layout";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Dashboard />} />
				<Route path="auth" element={<Auth />} />
			</Route>
		</Routes>
	);
};
export default App;
