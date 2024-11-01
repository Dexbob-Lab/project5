import useGlobalData from '../hooks/useGlobalData';
import courseImage from '../assets/images/course1.png';
import altitudeImage from '../assets/images/altitude1.png';
import Map from '../components/Map';

export default function Course1() {
	const { Lang, CurrObject } = useGlobalData();

	return (
		<>
			<Map gpxPath={'gpx/21.2km.gpx'} />
			<article className='contents'>
				<h3 className='title'>{CurrObject?.text[Lang]}</h3>
				<div>
					코스거리 : 21.2km
					<br />
					(토지초등학교 - CP 갈림길 오른쪽 - CP 임도 끝(체크포인트) - CP갈림길 오른쪽 - CP 문수제(체크포인트) -
					토지초등학교)
					<br />
					(Toji Elementary School - Right of CP Crossroads - CP End of forest road (Check Point) - Right of CP
					Crossroads - CP Munsuje (Check Point) - Toji Elementary School)
					<br />
					<br />
					최고 고도 : 499.2 m <br />
					획득고도 : 1,579.0 m <br />
					획득하강 : 1,604.0 m <br />
					<br />
					코스의 대부분이 임도로 이루어져 있습니다.
					<br />
					<br />
					레이스 시작 시간 : 11월 16일 (토) 9:00 <br />
					레이스 종료 시간 : 11월 16일 (토) 16:00 <br />
					제한 시간 : 7시간 <br />
					참가비용 : 59,000 <br />
					<br />
				</div>
				<br />
				<h3>대회 일정 | Race Schedule</h3>
				<div>
					2024. 11. 16 (토) <br />
					07:30 - 08:50 물품 보관 및 집결 완료 Baggage deposit and gathering <br />
					08:50 - 09:00 개회식 및 출발 준비 Ready to Start <br />
					09:00 레이스 출발 Race Start <br />
					16:00 컷 오프 Cut-Off <br />
				</div>
				<br />
				<h3>코스명 | Point</h3>
				<div>
					START : 토지초등학교 <br />
					(Toji Elementary School) <br />
					CP 갈림길 , CP 임도 끝, CP 문수제 <br />
					(CP Crossroads, CP End of forest road, CP Munsuje) <br />
					FINISH : 토지초등학교 <br />
					(Toji Elementary School)
					<br /> <br />
				</div>
			</article>
			<article className='maps'>
				<p>코스</p>
				<img src={courseImage} alt='코스' className='pic' />
				<p>고도</p>
				<img src={altitudeImage} alt='고도' className='pic' />
			</article>
		</>
	);
}
