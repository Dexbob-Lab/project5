import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';

export default function Communication1() {
	const { Lang, CurrObject } = useGlobalData();

	return <div className='appliBox'> 공지사항 게시판</div>;
}
