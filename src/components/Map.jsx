import { useEffect, useRef, useState, useCallback } from 'react';
import { throttle } from 'lodash';
import useGlobalData from '../hooks/useGlobalData';
import { points, mappingGPX } from '../data/mapData';

export default function Map() {
	const kakao = window.kakao;
	const currObject = useGlobalData(state => state.CurrObject);

	const [Index, setIndex] = useState(0);
	const [Terrain, setTerrain] = useState(true);
	const [Roadview, setRoadview] = useState(false);

	const ref_mapFrame = useRef(null);
	const ref_viewFrame = useRef(null);
	const ref_instMap = useRef(null);
	const ref_instView = useRef(null);

	const { current: ref_instClient } = useRef(new kakao.maps.RoadviewClient());
	const { current: ref_instType } = useRef(new kakao.maps.MapTypeControl());
	const { current: ref_instZoom } = useRef(new kakao.maps.ZoomControl());
	const { current: ref_info } = useRef(points(currObject.name));
	const { title, latlng } = ref_info[Index];

	const createMap = useCallback(() => {
		ref_mapFrame.current.innerHTML = '';
		ref_instMap.current = new kakao.maps.Map(ref_mapFrame.current, {
			center: latlng,
			level: 3
		});

		ref_info.map((data, idx) => {
			new kakao.maps.Marker({
				map: ref_instMap.current,
				position: data.latlng,
				title: idx === Index ? '' : data.title
			});
		});

		new kakao.maps.CustomOverlay({
			map: ref_instMap.current,
			position: latlng,
			content: `<div class='mapOverlay'><span class='title'>${title}</span></div>`
		});

		[ref_instType, ref_instZoom].forEach(inst => ref_instMap.current.addControl(inst));
	}, [ref_info, ref_instType, ref_instZoom, Index]);

	const throttleInitPos = throttle(
		useCallback(() => ref_instMap.current.setCenter(latlng), [latlng]),
		300
	);

	useEffect(() => {
		createMap();
		mappingGPX(ref_instMap.current, currObject.name);
		window.addEventListener('resize', throttleInitPos);
		return () => window.removeEventListener('resize', throttleInitPos);
	}, [Index, throttleInitPos]);

	useEffect(() => {
		Terrain
			? ref_instMap.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN)
			: ref_instMap.current.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
	}, [Terrain, ref_instMap.current]);

	useEffect(() => {
		ref_instView.current = new kakao.maps.Roadview(ref_viewFrame.current);
		ref_instClient.getNearestPanoId(latlng, 50, panoId => ref_instView.current.setPanoId(panoId, latlng));
	}, [Roadview, latlng, ref_instClient]);

	return (
		<section className='map'>
			<h2>Location</h2>
			<figure className='mapFrames'>
				<article ref={ref_mapFrame} className={`mapFrame ${!Roadview ? 'on' : ''}`}></article>
				<article ref={ref_viewFrame} className={`viewFrame ${Roadview ? 'on' : ''}`}></article>
			</figure>
			<nav className='btnSet'>
				<ul className='branch'>
					{ref_info.map((data, idx) => (
						<li
							key={idx}
							className={idx === Index ? 'on' : ''}
							onClick={() => {
								setIndex(idx);
								setRoadview(false);
								// [setTerrain, setRoadview].forEach(func => func(false));
							}}>
							{data.title}
						</li>
					))}
				</ul>
				<ul className='btnToggleSet'>
					<li className={Terrain ? 'on' : ''} onClick={() => setTerrain(!Terrain)}>
						{`Terrain ${Terrain ? 'OFF' : 'ON'}`}
					</li>
					<li className={Roadview ? 'on' : ''} onClick={() => setRoadview(!Roadview)}>
						{`Roadview ${Roadview ? 'OFF' : 'ON'}`}
					</li>
				</ul>
			</nav>
		</section>
	);
}
