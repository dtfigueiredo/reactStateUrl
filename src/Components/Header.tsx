import { Link } from 'react-router-dom';

export function Header() {
	return (
		<header>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/store'>Store</Link>
			</nav>
		</header>
	);
}
