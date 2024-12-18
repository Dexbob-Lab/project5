import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination, Virtual } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import { useFlickrQuery } from '../hooks/useFlickr';
import Pic from '../components/Pic';
import 'swiper/css';
import 'swiper/css/virtual';

export default function Visual() {
	const SRC_BASE = 'https://live.staticflickr.com';
	const [Index, setIndex] = useState(-1);
	const [Option, setOption] = useState({ page: 2 });
	const { data, isPending } = useFlickrQuery(Option);
	const autoplayStart = swiper => setTimeout(() => swiper.autoplay.start(), 500);

	return (
		<figure className='visual'>
			<div className='textBox'>
				{!isPending &&
					data?.map((el, idx) => (
						<h2 key={idx} className={Index === idx ? 'on' : ''}>
							{el.title}
						</h2>
					))}
			</div>
			<Swiper
				modules={[Autoplay, Pagination, Virtual]}
				pagination={{ type: 'fraction' }}
				slidesPerView={1}
				// spaceBetween={10}
				breakpoints={{
					1000: {
						slidesPerView: 2
						// spaceBetween: 10
					},
					2000: {
						slidesPerView: 3,
						spaceBetween: 0
					}
				}}
				grabCursor={true}
				loop={true}
				centeredSlides={true}
				autoplay={{
					delay: 2000,
					disableOnInteraction: true
				}}
				onInit={swiper => {
					setTimeout(() => {
						swiper.update();
						swiper.slideTo(0);
						autoplayStart(swiper);
					}, 500);
				}}
				onSwiper={autoplayStart}
				onSlideChange={el => setIndex(el.realIndex)}>
				{!isPending &&
					data.map((pic, idx) => {
						if (idx >= 20) return;
						return (
							<SwiperSlide key={idx} virtualIndex={idx}>
								{/* swiperSlide 요소에는 바로 css모션 스타일 적용 비권장 */}
								<div className='inner'>
									<Pic
										src={`${SRC_BASE}/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
										style={{ width: '100%', height: '100%' }}
										shadow
									/>
								</div>
							</SwiperSlide>
						);
					})}
				<BtnStart />
			</Swiper>
		</figure>
	);
}

// Swiper 컴포넌트 안쪽에서 호출할 버튼 컴포넌트
function BtnStart() {
	const swiper = useSwiper();

	return (
		<button className='btnStart' hidden={swiper.autoplay.running} onClick={() => swiper.autoplay.start()}>
			<FaPlay />
		</button>
	);
}
