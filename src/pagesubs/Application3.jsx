import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';
import volunteerImage from '../assets/images/volunteer.png';

export default function Application3() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<div className='appliBox3'>
			<div className='regInfo'>
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
