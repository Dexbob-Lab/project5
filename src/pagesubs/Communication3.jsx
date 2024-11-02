import { useEffect, useRef, useState } from 'react';
import Pic from '../components/Pic';
import Modal from '../components/Modal';
import useGlobalData from '../hooks/useGlobalData';
import useFlickrQuery from '../hooks/useFlickr';

export default function Communication3() {
	const [Index, setIndex] = useState(-1);
	const [Option, setOption] = useState({ page: 1 });
	const ref_gallery = useRef(null);
	const ref_search = useRef(null);

	const { FlickrFlg, toggleFlickrModal } = useGlobalData();
	const { data, isPending } = useFlickrQuery(Option);

	const URL_BASE = 'https://live.staticflickr.com';

	useEffect(() => {
		ref_gallery.current.classList.remove('on');
		setTimeout(() => {
			ref_gallery.current.classList.add('on');
		}, 500);
	}, [Option]);

	const setPageOption = page => {
		setOption({ page: page, tags: ref_search.current.value.trim() });
	};

	const handleSearch = e => {
		e.preventDefault();
		setPageOption(1);
	};

	const mouseDownEvent = e => e.target.style.setProperty('opacity', 0.8);
	const mouseUpEvent = e => e.target.style.setProperty('opacity', 1);

	return (
		<>
			<article className='galleryBtn'>
				<form id='searchPhoto' onSubmit={handleSearch}>
					<input ref={ref_search} type='text' placeholder='Enter a search word.' />
					<button onMouseDown={mouseDownEvent} onMouseUp={mouseUpEvent}>
						Search
					</button>
				</form>
				<ul>
					<li
						onClick={() => setPageOption(Option.page > 1 ? Option.page - 1 : 1)}
						onMouseDown={mouseDownEvent}
						onMouseUp={mouseUpEvent}>
						{`<< Before`}
					</li>
					<li onClick={() => setPageOption(Option.page + 1)} onMouseDown={mouseDownEvent} onMouseUp={mouseUpEvent}>
						{`After >>`}
					</li>
				</ul>
			</article>
			{isPending && <p className='photoLoading'>Photo Gallery Loading...</p>}
			<section ref={ref_gallery} className='galleryList'>
				{data?.length === 0 && <p>검색 결과가 없습니다.</p>}
				{data?.map((data, idx) => {
					return (
						<article key={idx}>
							<Pic
								className='pic'
								src={`${URL_BASE}/${data.server}/${data.id}_${data.secret}_z.jpg`}
								shadow
								onClick={() => {
									toggleFlickrModal();
									setIndex(idx);
								}}
							/>
							<h3>{data.title}</h3>
							<div className='profile'>
								<img
									src={`http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg`}
									alt='${data.owner}'
								/>
								<span className='userID'>${data.owner}</span>
							</div>
						</article>
					);
				})}
			</section>

			{FlickrFlg && (
				<Modal closeFunc={toggleFlickrModal}>
					<Pic
						style={{ width: '100%', height: '100%' }}
						src={`${URL_BASE}/${data[Index].server}/${data[Index].id}_${data[Index].secret}_b.jpg`}
						shadow
					/>
				</Modal>
			)}
		</>
	);
}
