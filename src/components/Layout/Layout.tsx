import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const Layout = () => {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<Suspense>
					<Outlet />
				</Suspense>
			</main>
			<footer>Footer</footer>
		</>
	);
};

export default Layout;
