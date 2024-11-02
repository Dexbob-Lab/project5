import { useEffect, useRef } from 'react';
import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';
import volunteerImage from '../assets/images/volunteer.png';

export default function Application3() {
	const ref_img = useRef(null);

	const { Lang, CurrObject } = useGlobalData();

	useEffect(() => {
		ref_img.current.classList.remove('on');
		setTimeout(() => {
			ref_img.current.classList.add('on');
		}, 500);
	}, []);

	return (
		<div className='applicationBox3'>
			<div ref={ref_img} className='regInfo'>
				<img src={volunteerImage} alt='' />
			</div>
			<div className='regForm'>
				<Register isVolunteer={true}>
					<input type='hidden' name='information' value={CurrObject.text[Lang]} />
				</Register>
			</div>
		</div>
	);
}
