import useGlobalData from '../hooks/useGlobalData';
import courseImage from '../assets/images/course2.png';
import altitudeImage from '../assets/images/altitude2.png';
import Map from '../components/Map';

export default function Course2() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<>
			<Map />
			<article className='contents'>
				<p className='title'>{CurrObject?.text[Lang]}</p>
				<div>
					코스거리 : 12.61km
					<br />
					(토지초등학교 - CP 갈림길 왼쪽 - CP 문수제(체크포인트) -토지 초등학교)
					<br />
					(Toji Elementary School - CP Crossroads Left - CP Munsuje (Check Point) - Toji Elementary School)
					<br />
					<br />
					최고고도 : 499.2 m <br />
					획득고도 : 546.0 m <br />
					획득하강 : 540.0 m<br />
					<br />
					코스의 대부분이 임도로 이루어져 있습니다.
					<br />
					<br />
					레이스 시작 시간 : 11월 16일 (토) 9:10 <br />
					레이스 종료 시간 : 11월 16일 (토) 14:10 <br />
					제한 시간 : 5시간 <br />
					참가비용 : 39,000 <br />
					<br />
				</div>
				<br />
				<h3>대회 일정 | Race Schedule</h3>
				<div>
					2024. 11. 16 (토) <br />
					07:30 - 09:00 물품 보관 및 집결 완료 Baggage deposit and gathering <br />
					09:00 - 09:10 개회식 및 출발 준비 Ready to Start <br />
					09:10 레이스 출발 Race Start <br />
					14:10 컷오프 Cut-Off <br />
					<br />
				</div>
				<br />
				<h3>코스명 | Point</h3>
				<div>
					START : 토지초등학교 <br />
					(Toji Elementary School) <br />
					CP 갈림길 , CP 문수제 <br />
					(CP Crossroads, CP Munsuje) <br />
					FINISH : 토지초등학교 <br />
					(Toji Elementary School) <br />
					<br /> <br />
				</div>
			</article>
			<figure className='maps'>
				<p>코스</p>
				<img src={courseImage} alt='' />
				<p>고도</p>
				<img src={altitudeImage} alt='' />
			</figure>
		</>
	);
}
