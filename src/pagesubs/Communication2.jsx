import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../components/Modal';
import Board from '../components/Board';
import BoardDetail from '../components/BoardDetail';
import useGlobalData from '../hooks/useGlobalData';

export default function Communication2() {
	const [Question, setQuestion] = useState([]);
	const [Search, setSearch] = useState('');
	const [Password, setPassword] = useState(null);
	const [Index, setIndex] = useState(-1);

	const { BoardFlg, BoardLockFlg, toggleBoardModal, toggleBoardLockModal } = useGlobalData();

	const URL_BASE = import.meta.env.VITE_BOARD_URL + '/qs/question';

	const boardClickEvent = idx => {
		setIndex(idx);
		Question[idx].lockon ? toggleBoardLockModal() : toggleBoardModal();
	};

	const questionClickEvent = () => {
		toggleBoardModal();
		setSearch(Search + ' ');
		setIndex(-1);
	};

	const handleSearch = e => {
		e.preventDefault();
		// 빈 값을 넣었을때도 리로딩하여 검색을 시키기 위해 값을 변동시켜줌
		const search = e.target[0].value.trim() ? e.target[0].value : Search.trim() ? '' : Search + ' ';
		setSearch(search);
		e.target[0].value = '';
	};

	const handlePassword = e => {
		e.preventDefault();
		setPassword(e.target[0].value);
		e.target[0].value = '';
	};

	useEffect(() => {
		Search
			? fetchAllQuestion(`${URL_BASE}-search/?search=${Search}`, setQuestion)
			: fetchAllQuestion(`${URL_BASE}/`, setQuestion);
	}, [Search]);

	useEffect(() => {
		Password &&
			fetchAllQuestion(`${URL_BASE}-password/?id=${Question[Index].id}&pw=${Password}`, null, res => {
				setPassword(null);
				if (res.data) {
					toggleBoardLockModal();
					toggleBoardModal();
				} else {
					alert('비밀번호가 일치하지 않습니다.');
				}
			});
	}, [Password]);

	const mouseDownEvent = e => e.target.style.setProperty('opacity', 0.8);
	const mouseUpEvent = e => e.target.style.setProperty('opacity', 1);

	return (
		<>
			<Board data={Question} clickEvent={boardClickEvent}>
				<form id='searchQuestion' onSubmit={handleSearch}>
					<div>
						<input type='text' placeholder='enter a search word.' />
						<input type='submit' value='Search' onMouseDown={mouseDownEvent} onMouseUp={mouseUpEvent} />
					</div>
					<input
						type='button'
						value='Write'
						onClick={questionClickEvent}
						onMouseDown={mouseDownEvent}
						onMouseUp={mouseUpEvent}
					/>
				</form>
			</Board>
			{BoardLockFlg && (
				<Modal closeFunc={toggleBoardLockModal}>
					<form id='passwordQuestion' onSubmit={handlePassword}>
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
			{BoardFlg && (
				<Modal closeFunc={questionClickEvent}>
					<BoardDetail
						baseUrl={URL_BASE}
						data={Index < 0 ? {} : Question[Index]}
						clickEvent={questionClickEvent}></BoardDetail>
				</Modal>
			)}
		</>
	);
}

const fetchAllQuestion = (url, setFunc, thenFunc = undefined, catchFunc = undefined) => {
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
