import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';

export default function Communication2() {
	const { Lang, CurrObject } = useGlobalData();

	return <div className='appliBox'>문의사항 게시판</div>;
}
