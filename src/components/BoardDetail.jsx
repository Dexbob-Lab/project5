import { useEffect, useRef, useState } from 'react';
import useDatetimeText from '../hooks/useDatetimeText';
import axios from 'axios';

export default function BoradDetail({ data = {}, clickEvent }) {
	// const [Notice, setNotice] = useState([]);
	const ref_nickname = useRef(null);
	const ref_password = useRef(null);
	const ref_title = useRef(null);
	const ref_contents = useRef(null);
	const ref_is_lock = useRef(null);
	const datetimeText = useDatetimeText();
	const baseUrl = import.meta.env.VITE_BOARD_URL;

	const handleUpdate = () => {
		if (ref_password.current.value !== data.password) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}
		if (!confirm('게시글을 수정하시겠습니까?')) return;
		const updateData = {
			id: data.id,
			nickname: ref_nickname.current.value,
			password: ref_password.current.value,
			title: ref_title.current.value,
			contents: ref_contents.current.value,
			is_lock: ref_is_lock.current.checked,
			view_count: data.view_count
		};
		axios
			.put(`${baseUrl}/notice/${data.id}/`, updateData)
			.then(res => {
				console.log(res);
				clickEvent();
			})
			.catch(err => console.log(err));
	};

	const handleDelete = () => {
		if (ref_password.current.value !== data.password) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}
		if (!confirm('게시글을 삭제하겠습니까?')) return;
		axios
			.delete(`${baseUrl}/notice/${data.id}/`)
			.then(res => {
				console.log(res);
				clickEvent();
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		// 	axios.get(`http://localhost:8000/posts/${slug}`).then(res => setPost(res.data));
		console.log(data);
	}, []);

	return (
		<div className='boardDetail'>
			<form>
				<ul>
					<li>
						<label htmlFor='nickname'>닉네임</label>
						<input
							ref={ref_nickname}
							type='text'
							name='nickname'
							id='nickname'
							placeholder='닉네임을 입력하세요.'
							defaultValue={data?.nickname}
							required
						/>
					</li>
					<li>
						<label htmlFor='title'>제목</label>
						<input
							ref={ref_title}
							type='text'
							name='title'
							id='title'
							placeholder='제목을 입력하세요.'
							defaultValue={data?.title}
							required
						/>
					</li>
					<li>
						<label htmlFor='contents'>내용</label>
						<textarea
							ref={ref_contents}
							name='contents'
							id='contents'
							placeholder='내용을 입력하세요.'
							defaultValue={data?.contents}
							required></textarea>
					</li>
					<li>
						<label htmlFor='password'>비밀번호</label>
						<input
							ref={ref_password}
							type='password'
							name='password'
							id='password'
							placeholder='비밀번호를 입력하세요.'
							required
						/>
					</li>
					<li>
						<label htmlFor='is_lock'>비밀글지정</label>
						<input
							ref={ref_is_lock}
							type='checkbox'
							name='is_lock'
							id='is_lock'
							defaultChecked={data?.is_lock ? 'checked' : ''}
						/>
					</li>
					<li>
						<label>갱신일</label>
						{datetimeText(data?.updated)}
					</li>
					<li>
						<label>등록일</label>
						{datetimeText(data?.created)}
					</li>
				</ul>
				<div className='btnBox'>
					<input type='reset' value='Initailize' />
					<input type='button' onClick={handleUpdate} value='Update' />
					<input type='button' onClick={handleDelete} value='Delete' />
				</div>
			</form>
		</div>
	);
}
