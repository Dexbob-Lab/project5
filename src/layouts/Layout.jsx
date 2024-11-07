import { useEffect, useState } from 'react';
import { throttle } from 'lodash';
import { FaCircleUp } from 'react-icons/fa6';

export default function Layout({ className, children }) {
	const [Visible, setVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', throttleGoTopBtn);
		return () => {
			window.removeEventListener('scroll', throttleGoTopBtn);
		};
	}, []);
	const throttleGoTopBtn = throttle(() => (window.scrollY > 0 ? setVisible(true) : setVisible(false)), 300);

	const handleScroll = () => {
		if (!window.scrollY) return;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<main className={className}>
			<section>{children}</section>
			{Visible && (
				<button id='goTopBtn' onClick={handleScroll}>
					<FaCircleUp />
				</button>
			)}
		</main>
	);
}
