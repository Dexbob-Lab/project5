import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Register({ course }) {
	const ref_form = useRef(null);
	const ref_elements = useRef([]);
	const shirtSizeList = ['S', 'M', 'L', 'XL', 'XXL'];

	const resetForm = () => {
		ref_elements.current.forEach(dom => {
			if (!dom) return;
			if (dom.type === 'radio') {
				if (dom.value == shirtSizeList[0]) dom.defaultChecked = true;
				else dom.defaultChecked = false;
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
		<div className='register'>
			<form ref={ref_form} onSubmit={sendForm}>
				<input ref={setRef_elements} type='hidden' name='course' value={course} />
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
					<legend>옷사이즈(shirt-size)</legend>
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
				</fieldset>
				<nav className='btnSet'>
					<input type='reset' value='Cancel' />
					<input type='submit' value='Send' />
				</nav>
			</form>
			<div className='info'>
				<h2>Information</h2>
				<ul>
					<li>2024년 지리산 숲길 단감레이스 21.3km 참가 신청서 입니다. 참가비용은 59,000원 입니다.</li>
					<li>허위 작성 시 참가 신청이 취소 될 수 있습니다.</li>
					<li>
						이름, 생년월일 6자리, 연락처, 상세주소, 성별, 이메일을 꼭 기입 해 주시길 바랍니다. <br />
						(잘못기제, 미기제 시 기념품 및 사진 수령이 어려울 수 있습니다)
					</li>
					<li>입금 계좌 : 농협 301-0270-6460-51 / 지리산씨 협동조합</li>
					<li>참가 신청 내역과 입금 확인 후 3일 이내 참가 신청 확정 안내 문자 드립니다.</li>
				</ul>
			</div>
		</div>
	);
}
