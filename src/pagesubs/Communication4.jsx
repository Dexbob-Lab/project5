import { useRef, useState } from 'react';
import Pic from '../components/Pic';
import Modal from '../components/Modal';
import useGlobalData from '../hooks/useGlobalData';
import useYoutubeQuery from '../hooks/useYoutube';
import useShortenText from '../hooks/useShortenText';
import useCombineText from '../hooks/useCombineText';

export default function Communication4() {
	const [Index, setIndex] = useState(-1);
	const ref_video = useRef(null);

	const { YoutubeFlg, toggleYoutubeModal } = useGlobalData();
	const { data, isPending } = useYoutubeQuery();

	const shortenText = useShortenText();
	const combineText = useCombineText();

	return (
		<>
			{isPending && <p className='videoLoading'>Video Gallery Loading...</p>}
			<section ref={ref_video} className='videoList on'>
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
