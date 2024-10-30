import { useState } from 'react';
import Layout from '../layouts/Layout';
import Pic from '../components/Pic';
import Modal from '../components/Modal';
import useGlobalData from '../hooks/useGlobalData';
import useShortenText from '../hooks/useShortenText';
import useCombineText from '../hooks/useCombineText';
import useYoutubeQuery from '../hooks/useYoutube';

export default function Communication4() {
	const { YoutubeFlg, CurrObject, toggleYoutubeModal } = useGlobalData();
	const [Index, setIndex] = useState(-1);

	const shortenText = useShortenText();
	const combineText = useCombineText();

	const { data, isPending } = useYoutubeQuery();
	isPending && console.log('Youtube Loading...');

	return (
		<>
			<Layout className={CurrObject?.name}>
				{isPending && <p>Youtube Loading...</p>}
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
			</Layout>
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
