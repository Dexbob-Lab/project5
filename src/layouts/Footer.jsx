import useLink from '../hooks/useLink';

export default function Footer() {
	const linkPage = useLink();
	return (
		<footer className='footer'>
			<button onClick={() => linkPage('/')}>
				<img src='logo1.png' width='50' alt='' />
			</button>
			<section> 2024, All Rights Reserved.</section>
		</footer>
	);
}
