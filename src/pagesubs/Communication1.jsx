import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';
import useGlobalData from '../hooks/useGlobalData';
import Board from '../components/Board';
import BoardDetail from '../components/BoardDetail';

export default function Communication1() {
	const { NoticeFlg, NoticeLockFlg, toggleNoticeModal, toggleNoticeLockModal } = useGlobalData();
	const [Notice, setNotice] = useState([]);
	const [Search, setSearch] = useState('');
	const [Password, setPassword] = useState(null);
	const [Index, setIndex] = useState(-1);

	const baseUrl = import.meta.env.VITE_BOARD_URL;

	const boardClickEvent = idx => {
		setIndex(idx);
		Notice[idx].is_lock ? toggleNoticeLockModal() : toggleNoticeModal();
	};

	const handleSearch = e => {
		e.preventDefault();
		setSearch(e.target[0].value);
		e.target[0].value = '';
	};

	const handlePassword = e => {
		e.preventDefault();
		setPassword(e.target[0].value);
		e.target[0].value = '';
	};

	useEffect(() => {
		Search
			? fetchAllNotice(`${baseUrl}/notice-search/?search=${Search}`, setNotice)
			: fetchAllNotice(`${baseUrl}/notice/`, setNotice);
	}, [Search]);

	useEffect(() => {
		Password &&
			fetchAllNotice(`${baseUrl}/notice-password/?id=${Notice[Index].id}&pw=${Password}`, null, res => {
				setPassword(null);
				if (res.data) {
					toggleNoticeLockModal();
					toggleNoticeModal();
				} else {
					alert('비밀번호가 일치하지 않습니다.');
				}
			});
	}, [Password]);

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
			{NoticeLockFlg && (
				<Modal closeFunc={toggleNoticeLockModal}>
					<form className='passwordBox' onSubmit={handlePassword}>
						<aside>
							<div>
								비밀글 입니다. <br />
								비밀번호를 입력해 주세요.
							</div>
							<input type='password' placeholder='enter your password.' required />
							<input type='submit' value='Password' />
						</aside>
					</form>
				</Modal>
			)}
			{NoticeFlg && (
				<Modal closeFunc={toggleNoticeModal}>
					<BoardDetail data={Notice} clickEvent={boardClickEvent}></BoardDetail>
				</Modal>
			)}
		</>
	);
}

const fetchAllNotice = (url, setFunc, thenFunc = undefined, catchFunc = undefined) => {
	axios
		.get(url)
		.then(res => {
			setFunc && setFunc(res.data);
			thenFunc && thenFunc(res);
		})
		.catch(err => {
			console.log(err.message);
			catchFunc && catchFunc(err);
		});
};
