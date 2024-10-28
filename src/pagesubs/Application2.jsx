import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';

export default function Application2() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<div className='appliBox'>
			<div className='regForm'>
				<Register>
					<input type='hidden' name='information' value={CurrObject.text[Lang]} />
				</Register>
			</div>
			<div className='regInfo'>
				<h2>Information</h2>
				<ul>
					<li>2024년 지리산 숲길 단감레이스 12.61km 참가 신청서 입니다. 참가비용은 39,000원 입니다.</li>
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
