import Visual from '../components/Visual';
import Map from '../components/Map';
import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';
import useYoutubeQuery from '../hooks/useYoutube';
import { AiTwotoneAlert } from 'react-icons/ai';

export default function Home() {
	const { Lang, CurrObject } = useGlobalData();
	const { data } = useYoutubeQuery({ num: 1 });
	console.log(data);
	return (
		<Layout className={CurrObject?.name}>
			<h1>{CurrObject?.text[Lang]}</h1>

			<Visual />
			<HomeInfo />
		</Layout>
	);
}
// Swiper 컴포넌트 안쪽에서 호출할 버튼 컴포넌트
function HomeInfo() {
	return (
		<>
			<div className='homeInfo'>
				<h2>오시는길</h2>
				<article className='homeArticle'>
					<h3>대회 장소</h3>
					<p>전라남도 구례군 토지면 섬진강대로 5038</p>
					<p>토지초등학교 운동장</p>
					<br />
					<h3>이용시간</h3>
					<p>평일 : 09:00 ~ 18:00</p>
					<p>주말/공휴일 : 휴무</p>
					<br />
					<h3>전화번호</h3>
					<p>070-8880-0352</p>
				</article>
				<article className='homeArticle'>
					<h3>사업자정보</h3>
					<p>상호명 : 지리산씨협동조합</p>
					<p>대표자 : 임현수</p>
					<p>이메일 : jirisanc@gmail.com</p>
					<br />
					<h3>사업자정보</h3>
					<p>예금주 : 지리산씨협동조합</p>
					<p>입금은행 : 농협</p>
					<p>계좌번호 : 301-0270-6460-51</p>
					<br />
					<p>※ 사업자정보를 꼭 확인 후 이체하세요.</p>
					<p>
						<a
							href='https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&oquery=%EC%9D%B8%ED%84%B0%EB%84%B7+%EC%82%AC%EA%B8%B0%EC%A1%B0%ED%9A%8C&ie=utf8&query=%EC%9D%B8%ED%84%B0%EB%84%B7+%EC%82%AC%EA%B8%B0%EC%A1%B0%ED%9A%8C'
							target='_blank'>
							<AiTwotoneAlert /> 계좌 신고 여부 확인
						</a>
					</p>
				</article>
			</div>
			<Map />
		</>
	);
}
