import { useEffect } from 'react';

export default function Modal({ children, closeFunc }) {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';
		return () => (document.body.style.overflowY = 'auto');
	}, []);

	return (
		<aside className='modal'>
			<div className='contents'>{children}</div>
			<button className='btnClose' onClick={closeFunc}>
				CLOSE
			</button>
		</aside>
	);
}
