import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../layouts/Layout';
import Modal from '../components/Modal';
import useGlobalData from '../hooks/useGlobalData';
import useDatetimeText from '../hooks/useDatetimeText';
// import { fetchAllNotice } from '../hooks/useServerData';

export default function Communication1() {
	const { NoticeFlg, CurrObject, toggleNoticeModal } = useGlobalData();
	const [Notice, setNotice] = useState([]);
	const [Search, setSearch] = useState('');
	const [Index, setIndex] = useState(-1);
	const datetimeText = useDatetimeText();
	// const fetchAll = fetchAllNotice();

	const baseUrl = import.meta.env.VITE_BOARD_URL;

	const handleSearch = e => {
		e.preventDefault();
		setSearch(e.target[0].value);
		e.target[0].value = '';
	};

	useEffect(() => {
		fetchAllNotice(`${baseUrl}/notice/`, setNotice);
	}, []);

	useEffect(() => {
		if (!Search) return;
		axios
			.get(`${baseUrl}/notice-search/?search=${Search}`)
			.then(res => {
				setNotice(res.data);
			})
			.catch(err => console.log(err.message));
	}, [Search]);

	return (
		<>
			<div className='noticeTable'>
				{/* <button>
					<Link to={`/posts-add`}>WRITE POST</Link>
				</button> */}
				<form className='searchBox' onSubmit={handleSearch}>
					<input type='text' />
					<button>Search</button>
				</form>
				<table>
					<thead>
						<tr>
							<th>번호</th>
							<th>제 목</th>
							<th>닉네임</th>
							<th>등록일</th>
							<th>조회수</th>
						</tr>
					</thead>
					<tbody>
						{Notice?.map((data, idx) => {
							return (
								<tr
									key={idx}
									onClick={() => {
										toggleNoticeModal();
										setIndex(idx);
									}}>
									<td>{data.id}</td>
									<td>{data.title}</td>
									<td>{data.nickname}</td>
									<td>{datetimeText(data.updated)}</td>
									<td>{data.view_count}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{NoticeFlg && <Modal closeFunc={toggleNoticeModal}>공지사항 검색({Index})</Modal>}
		</>
	);
}

const fetchAllNotice = (url, setFunc) => {
	axios.get(url).then(res => {
		setFunc(res.data);
	});
};
