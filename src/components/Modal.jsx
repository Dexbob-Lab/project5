import { useEffect } from 'react';
import { FaWindowClose } from 'react-icons/fa';

export default function Modal({ children, closeFunc }) {
	useEffect(() => {
		document.body.style.overflowY = 'hidden';
		return () => (document.body.style.overflowY = 'auto');
	}, []);

	return (
		<aside className='modal'>
			<div className='contents'>{children}</div>
			<button className='btnClose' onClick={closeFunc}>
				<span className='mark1'>CLOSE</span>
				<span className='mark2'>
					<FaWindowClose />
				</span>
			</button>
		</aside>
	);
}
