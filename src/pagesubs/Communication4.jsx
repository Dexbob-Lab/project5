import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';

export default function Communication4() {
	const { Lang, CurrObject } = useGlobalData();

	return <div className='appliBox'>동영상 갤러리</div>;
}
