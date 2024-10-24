import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className='footer'>
			<Link to='/'>
				<img src='logo1.png' alt='' />
			</Link>
			<section> 2024, All Rights Reserved.</section>
		</footer>
	);
}
