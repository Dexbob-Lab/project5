import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className='footer'>
			<hr />
			<Link to='/'>
				<img src='logo1.png' width='50' alt='' />
			</Link>
			<section> 2024, All Rights Reserved.</section>
		</footer>
	);
}
