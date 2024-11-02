import { useEffect, useRef, useState } from 'react';
import Pic from '../components/Pic';
import Modal from '../components/Modal';
import useGlobalData from '../hooks/useGlobalData';
import useShortenText from '../hooks/useShortenText';
import useCombineText from '../hooks/useCombineText';
import useYoutubeQuery from '../hooks/useYoutube';

export default function Communication4() {
	const { YoutubeFlg, toggleYoutubeModal } = useGlobalData();
	const [Index, setIndex] = useState(-1);
	const ref_video = useRef(null);

	const shortenText = useShortenText();
	const combineText = useCombineText();

	const { data, isPending } = useYoutubeQuery();
	isPending && console.log('Youtube Loading...');

	useEffect(() => {
		ref_video.current.classList.remove('on');
		setTimeout(() => {
			ref_video.current.classList.add('on');
		}, 500);
	}, []);

	return (
		<>
			{isPending && <p>Youtube Loading...</p>}
			<section ref={ref_video} id='videoList' className='videoList on'>
				{data?.length === 0 && <p>검색 결과가 없습니다.</p>}
				{data?.map((vid, idx) => {
					return (
						<article key={idx}>
							<Pic
								className='thumb'
								src={vid.snippet.thumbnails.high.url}
								shadow={true}
								style={{ cursor: 'pointer' }}
								onClick={() => {
									toggleYoutubeModal();
									setIndex(idx);
								}}
							/>
							<div className='txt'>
								<h3>{shortenText(vid.snippet.title, 60)}</h3>
								<p>{shortenText(vid.snippet.description, 150)}</p>
								<span>{combineText(vid.snippet.publishedAt.slice(0, 10), '-', '.')}</span>
							</div>
						</article>
					);
				})}
			</section>
			{YoutubeFlg && (
				<Modal closeFunc={toggleYoutubeModal}>
					<figure className='vidFrame'>
						<iframe
							title='youtube'
							type='text/html'
							src={`https://www.youtube.com/embed/${data[Index]?.snippet.resourceId.videoId}`}></iframe>
					</figure>
				</Modal>
			)}
		</>
	);
}
