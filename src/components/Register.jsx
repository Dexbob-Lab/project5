import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Register({ children, isVolunteer = false }) {
	const ref_form = useRef(null);
	const ref_elements = useRef([]);
	const shirtSizeList = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
	const genderList = ['남성(Male)', '여성(Female)'];
	const accommList = ['O', 'X'];

	const resetForm = () => {
		ref_elements.current.forEach(dom => {
			if (!dom) return;
			if (dom.name === 'shirt_size') {
				if (dom.value == shirtSizeList[0]) dom.checked = true;
				else dom.checked = false;
			} else if (dom.name === 'gender') {
				if (dom.value == genderList[0]) dom.checked = true;
				else dom.checked = false;
			} else if (dom.name === 'accommodation') {
				if (dom.value == accommList[0]) dom.checked = true;
				else dom.checked = false;
			} else if (dom.type === 'date') {
				dom.defaultValue = '1970-01-01';
			} else {
				dom.value = '';
			}
		});
	};

	const sendForm = e => {
		e.preventDefault();

		emailjs
			.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, ref_form.current, {
				publicKey: import.meta.env.VITE_PUBLIC_KEY
			})
			.then(res => {
				console.log(res);
				alert('등록되었습니다.');
				resetForm();
			})
			.catch(err => {
				alert('에러 발생!\n' + err);
				console.log(err);
			});
	};
	let cnt = 0;
	const setRef_elements = dom => (ref_elements.current[cnt++] = dom);

	return (
		<form ref={ref_form} className='register' onSubmit={sendForm}>
			<span>
				<label htmlFor='uName'>이름(Name)</label>
				<input ref={setRef_elements} type='text' name='user_name' id='uName' placeholder='Leave your name' required />
			</span>
			<span>
				<label htmlFor='uBirth'>생년월일(Date of Birth)</label>
				<input ref={setRef_elements} type='date' name='user_birth' id='uBirth' defaultValue='1970-01-01' required />
			</span>
			<span>
				<label htmlFor='uPhone'>연락처(Phone Number)</label>
				<input
					ref={setRef_elements}
					type='tel'
					name='user_phone'
					id='uPhone'
					placeholder='Leave your phone number'
					required
				/>
			</span>
			<span>
				<label htmlFor='uAddress'>주소(Address)</label>
				<input
					ref={setRef_elements}
					type='text'
					name='user_address'
					id='uAddress'
					placeholder='Leave your address'
					required
				/>
			</span>
			<span>
				<label htmlFor='uMail'>이메일(e-mail)</label>
				<input
					ref={setRef_elements}
					type='email'
					name='user_email'
					id='uMail'
					placeholder='Leave your email'
					required
				/>
			</span>
			<span>
				<label htmlFor='uPassword'>비밀번호(password)</label>
				<input
					ref={setRef_elements}
					type='password'
					name='user_password'
					id='uPassword'
					placeholder='Leave your password'
					required
				/>
			</span>
			<fieldset>
				<legend>성별(gender)</legend>
				<div className='radioBtn'>
					{genderList.map((data, idx) => {
						return (
							<label key={idx}>
								<input
									ref={setRef_elements}
									type='radio'
									name='gender'
									value={data}
									defaultChecked={idx == 0 ? 'true' : ''}
								/>{' '}
								{data}
							</label>
						);
					})}
				</div>
			</fieldset>
			<fieldset>
				<legend>옷사이즈(shirt-size)</legend>
				<div className='radioBtn'>
					{shirtSizeList.map((data, idx) => {
						return (
							<label key={idx}>
								<input
									ref={setRef_elements}
									type='radio'
									name='shirt_size'
									value={data}
									defaultChecked={idx == 0 ? 'true' : ''}
								/>{' '}
								{data}
							</label>
						);
					})}
				</div>
			</fieldset>
			<div className='refer'>
				<sub>※ SIZE: S(85), M(90), L(95), XL(100), XXL(110), XXXL(120)</sub>
			</div>
			{isVolunteer && (
				<>
					<span>
						<label htmlFor='motivation'>참여동기(motivation)</label>
						<input
							ref={setRef_elements}
							type='text'
							name='motivation'
							id='motivation'
							placeholder='Leave your motivation'
							required
						/>
					</span>
					<span>
						<label htmlFor='motivation'>원하는 분야(desired sector))</label>
						<input
							ref={setRef_elements}
							type='text'
							name='sector'
							id='sector'
							placeholder='Leave your desired sector'
							required
						/>
					</span>
					<fieldset>
						<legend>숙소이용여부(accommodation)</legend>
						<div className='radioBtn'>
							{accommList.map((data, idx) => {
								return (
									<label key={idx}>
										<input
											ref={setRef_elements}
											type='radio'
											name='accommodation'
											value={data}
											defaultChecked={idx == 0 ? 'true' : ''}
										/>{' '}
										{data}
									</label>
								);
							})}
						</div>
					</fieldset>
				</>
			)}
			{children}
			<nav className='btnSet'>
				<input type='reset' value='Cancel' />
				<input type='submit' value='Send' />
			</nav>
		</form>
	);
}
