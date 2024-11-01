import Layout from '../layouts/Layout';
import Pic from '../components/Pic';
import useGlobalData from '../hooks/useGlobalData';
import InformationImg from '../assets/images/information.png';

export default function Information() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<nav className='informSubMenu'>
				<div className='pageName'>{CurrObject?.text[Lang]}</div>
			</nav>
			<figure>
				<div>
					<img src={InformationImg} className='pic' onClick={e => e.target.classList.toggle('on')}></img>
				</div>
			</figure>
			<article className='contents'>
				<h3>대회명 | TITLE</h3>
				<p>지리산 숲길 단감 레이스</p>
				<br />
				<h3>접수 기간 | REGISTRATION</h3>
				<p>2024년 08월 28일 ~ 11월 01일(선착순)</p>
				<br />
				<h3>대회 일정 | RACE</h3>
				<p>SCHEDULE 21.2k : 2024.11.16(SAT) 09:00a.m.</p>
				<p>12.61k : 2024.11.16(SAT) 09:10a.m. </p>
				<br />
				<h3>대회 장소 | VENUE</h3>
				<p>전라남도 구례군 토지면 섬진강대로 5038</p>
				<p>토지초등학교 운동장</p>
				<p>( 5038 Seomjingang-daero, Jido-myeon, Gurye-gun, Jeollanam-do Toji Elementary School Playground)</p>
				<br />
				<h3>대회 종목 | RACE</h3>
				<p>21.3k, 12.61k</p>
				<br />
				<h3>참가비 | FEE</h3>
				<p>21.2km - 59,000KRW</p>
				<p>12.61km - 39,000KRW</p>
				<br />
				<h3>기념품 | SOUVENIR</h3>
				<p>배번, 완주 메달, 기록증, 단감 외</p>
				<p>*기념품은 완주 시 제공됩니다.</p>
				<br />
				<h3>시상 | AWARDS</h3>
				<p>각 부분 남녀 1-5위</p>
				<p>1st - 5th place for men & women in each category</p>
				<p>특산품 : 1-5위</p>
				<p>(건타임 시간 측정)</p>
				<br />
				<h3>기타 | ETC</h3>
				<p>물품보관소 및 탈의실, 화장실 운영</p>
				<br />
				<h3>주최 및 주관 | ORGANIZER</h3>
				<p>여는 이 : 지리산씨 협동조합</p>
				<p>도우는 이 :관광두레 외</p>
				<p>
					함께하는 이 : 참여하시는 모든 러너, 자원봉사자, 구례마라톤클럽, 자라는 공동체, 지리담, 트렉스, 협진티앤디,
					구례역대합실
				</p>
				<br />
				<p>※상기 내용은 주최 측의 사정에 따라 일부 변경될 수 있습니다.</p>
				<p>The above contents are subject to change.</p>
				<br />
			</article>
		</Layout>
	);
}
