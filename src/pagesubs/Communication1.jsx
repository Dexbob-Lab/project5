import { useState, useEffect } from 'react';
import axios from 'axios';
// import Layout from '../layouts/Layout';
import Modal from '../components/Modal';
import useGlobalData from '../hooks/useGlobalData';
// import useDatetimeText from '../hooks/useDatetimeText';
import Board from '../components/Board';
// import { fetchAllNotice } from '../hooks/useServerData';

export default function Communication1() {
	const { NoticeFlg, CurrObject, toggleNoticeModal } = useGlobalData();
	const [Notice, setNotice] = useState([]);
	const [Search, setSearch] = useState('');
	const [Index, setIndex] = useState(-1);
	// const datetimeText = useDatetimeText();
	// const fetchAll = fetchAllNotice();

	const baseUrl = import.meta.env.VITE_BOARD_URL;

	const boardClickEvent = idx => {
		toggleNoticeModal();
		setIndex(idx);
	};

	const handleSearch = e => {
		e.preventDefault();
		setSearch(e.target[0].value);
		e.target[0].value = '';
	};

	useEffect(() => {
		fetchAllNotice(`${baseUrl}/notice/`, setNotice);
	}, []);

	useEffect(() => {
		Search
			? fetchAllNotice(`${baseUrl}/notice-search/?search=${Search}`, setNotice)
			: fetchAllNotice(`${baseUrl}/notice/`, setNotice);
	}, [Search]);

	return (
		<>
			<Board data={Notice} clickEvent={boardClickEvent}>
				<form className='searchBox' onSubmit={handleSearch}>
					<div>
						<input type='text' placeholder='enter a search word.' />
						<input type='submit' value='Search' />
					</div>
					<input type='button' value='Insert' />
				</form>
			</Board>
			{NoticeFlg && <Modal closeFunc={toggleNoticeModal}>공지사항 검색({Index})</Modal>}
		</>
	);
}

const fetchAllNotice = (url, setFunc) => {
	axios
		.get(url)
		.then(res => {
			setFunc(res.data);
		})
		.catch(err => console.log(err.message));
};
