import { useEffect, useRef, useState } from 'react';
import Modal from '../components/Modal';
import Pic from '../components/Pic';
import useGlobalData from '../hooks/useGlobalData';
import useFlickrQuery from '../hooks/useFlickr';

export default function Communication3() {
	const { FlickrFlg, toggleFlickrModal } = useGlobalData();
	const ref_gallery = useRef(null);
	const ref_search = useRef(null);
	const [Index, setIndex] = useState(-1);
	const [Option, setOption] = useState({ type: 'mine' });

	const baseUrl = 'https://live.staticflickr.com';

	const { data: Flickr, isPending } = useFlickrQuery(Option);
	isPending && console.log('Gallery Loading...');

	useEffect(() => {
		ref_gallery.current.classList.remove('on');
		setTimeout(() => {
			ref_gallery.current.classList.add('on');
		}, 500);
	}, [Option]);

	const handleSearch = e => {
		e.preventDefault();
		if (!ref_search.current.value.trim()) return alert('검색어를 입력해 주세요.');
		setOption({ type: 'search', tags: ref_search.current.value.trim() });
		ref_search.current.value = '';
	};
	return (
		<>
			<article className='galleryBtn'>
				<ul>
					<li onClick={() => setOption({ type: 'mine' })} className={Option.type === 'mine' ? 'on' : ''}>
						My Gallery
					</li>
					<li onClick={() => setOption({ type: 'interest' })} className={Option.type === 'interest' ? 'on' : ''}>
						Interest Gallery
					</li>
				</ul>
				<form onSubmit={handleSearch}>
					<input ref={ref_search} type='text' placeholder='검색어를 입력하세요.' />
					<button>Search</button>
				</form>
			</article>
			<section ref={ref_gallery} className='galleryList'>
				{Flickr?.length === 0 && <p>검색 결과가 없습니다.</p>}
				{Flickr?.map((data, idx) => {
					return (
						<article
							key={idx}
							onClick={() => {
								toggleFlickrModal();
								setIndex(idx);
							}}>
							<Pic className='pic' src={`${baseUrl}/${data.server}/${data.id}_${data.secret}_z.jpg`} shadow />
							<h3>{data.title}</h3>
						</article>
					);
				})}
			</section>

			<div className='notice'>
				<p>This web page was created for study purpose, not for commercial use.</p>
				<p>The Images below is sourced from unplash.com</p>
			</div>
			{FlickrFlg && (
				<Modal closeFunc={toggleFlickrModal}>
					<Pic
						style={{ width: '100%', height: '100%' }}
						src={`${baseUrl}/${Flickr[Index].server}/${Flickr[Index].id}_${Flickr[Index].secret}_b.jpg`}
						shadow
					/>
				</Modal>
			)}
		</>
	);
}
