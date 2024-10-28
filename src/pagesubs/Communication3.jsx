import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';

export default function Communication3() {
	const { Lang, CurrObject } = useGlobalData();

	return <div className='appliBox'>포토 갤러리</div>;
}
