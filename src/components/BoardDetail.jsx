import { useEffect, useRef } from 'react';
import useDatetimeText from '../hooks/useDatetimeText';
import axios from 'axios';

export default function BoradDetail({ baseUrl, data = {}, clickEvent }) {
	const ref_nickname = useRef(null);
	const ref_password = useRef(null);
	const ref_title = useRef(null);
	const ref_contents = useRef(null);
	const ref_lockon = useRef(null);
	const datetimeText = useDatetimeText();

	const isInsertForm = () => {
		// 데이터가 존재하면 수정/삭제, 비어있으면 등록
		for (let key in data) {
			return false;
		}
		return true;
	};
	const checkRequired = () => {
		const target = [ref_nickname, ref_title, ref_contents, ref_password];
		const idx = target.findIndex(data => !data.current.value.trim());
		return idx < 0;
	};
	const handleInsert = () => {
		if (!checkRequired()) {
			alert('전 항목 필수 입력 입니다.');
			return;
		}
		if (!confirm('게시글을 등록하시겠습니까?')) return;
		const insertData = {
			nickname: ref_nickname.current.value,
			password: ref_password.current.value,
			title: ref_title.current.value,
			contents: ref_contents.current.value,
			lockon: ref_lockon.current.checked
		};
		axios
			.post(`${baseUrl}/`, insertData)
			.then(res => {
				console.log(res);
				clickEvent();
			})
			.catch(err => console.log(err));
	};

	const handleUpdate = () => {
		if (ref_password.current.value !== data.password) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}
		if (!checkRequired()) {
			alert('전 항목 필수 입력 입니다.');
			return;
		}
		if (!confirm('게시글을 수정하시겠습니까?')) return;
		const updateData = {
			id: data.id,
			nickname: ref_nickname.current.value,
			password: ref_password.current.value,
			title: ref_title.current.value,
			contents: ref_contents.current.value,
			lockon: ref_lockon.current.checked
		};
		axios
			.put(`${baseUrl}/${data.id}/`, updateData)
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
			.delete(`${baseUrl}/${data.id}/`)
			.then(res => {
				console.log(res);
				clickEvent();
			})
			.catch(err => console.log(err));
	};

	useEffect(() => {
		if (!isInsertForm()) {
			const updateData = {
				id: data.id,
				hits: data.hits + 1
			};
			axios
				.put(`${baseUrl}-hits/${data.id}/`, updateData)
				.then(res => {
					console.log(res);
				})
				.catch(err => console.log(err));
		}
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
						<label htmlFor='lockon'>비밀글지정</label>
						<input
							ref={ref_lockon}
							type='checkbox'
							name='lockon'
							id='lockon'
							defaultChecked={data?.lockon ? 'checked' : ''}
						/>
					</li>
					<li className={isInsertForm() ? 'hide' : ''}>
						<label>갱신일</label>
						{datetimeText(data?.updated)}
					</li>
					<li className={isInsertForm() ? 'hide' : ''}>
						<label>등록일</label>
						{datetimeText(data?.created)}
					</li>
				</ul>
				<div className='btnBox'>
					<input type='reset' value='Initailize' />
					{!isInsertForm() && <input type='button' onClick={handleDelete} value='Delete' />}
					{!isInsertForm() && <input type='button' onClick={handleUpdate} value='Update' />}
					{isInsertForm() && <input type='button' onClick={handleInsert} value='Insert' />}
				</div>
			</form>
		</div>
	);
}
