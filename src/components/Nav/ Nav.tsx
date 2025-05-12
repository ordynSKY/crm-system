import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Dashboard</NavLink>
				</li>
				<li>
					<NavLink to="/auth">Auth</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
