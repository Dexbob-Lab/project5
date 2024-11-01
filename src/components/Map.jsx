import { useEffect, useRef, useState, useCallback } from 'react';
import { throttle } from 'lodash';
import useGlobalData from '../hooks/useGlobalData';

export default function Map() {
	// const { kakao } = window;
	const gpxPathArr = ['gpx/21.2km.gpx', 'gpx/12.61km.gpx'];
	const current = useGlobalData(state => state.CurrObject);
	const gpxPath = current.name === 'course1' ? gpxPathArr[0] : gpxPathArr[1];
	const data = current.name === 'course1' ? infoData1 : infoData2;

	const [Index, setIndex] = useState(0);
	const [Terrain, setTerrain] = useState(true);
	const [Roadview, setRoadview] = useState(false);

	const ref_mapFrame = useRef(null);
	const ref_viewFrame = useRef(null);
	const ref_instMap = useRef(null);
	const ref_instMarker = useRef(null);
	const ref_instView = useRef(null);

	const { current: ref_instClient } = useRef(new kakao.maps.RoadviewClient());
	const { current: ref_instType } = useRef(new kakao.maps.MapTypeControl());
	const { current: ref_instZoom } = useRef(new kakao.maps.ZoomControl());
	const { current: ref_info } = useRef(data);
	const { latlng } = ref_info[Index];

	// 지도관련 랜더링 함수, 메모이제이션, 의존성배열 변경시에만 재연산
	const createMap = useCallback(() => {
		ref_mapFrame.current.innerHTML = '';
		ref_instMap.current = new kakao.maps.Map(ref_mapFrame.current, {
			center: latlng,
			level: 5
		});
		ref_instMarker.current = new kakao.maps.Marker({
			position: latlng
		});
		ref_instMarker.current.setMap(ref_instMap.current);

		[ref_instType, ref_instZoom].forEach(inst => ref_instMap.current.addControl(inst));
	}, [latlng, ref_instType, ref_instZoom]);

	const throttleInitPos = throttle(
		useCallback(() => ref_instMap.current.setCenter(latlng), [latlng]),
		300
	);

	useEffect(() => {
		createMap();
		mappginGPX(ref_instMap.current, gpxPath);
		window.addEventListener('resize', throttleInitPos);
		return () => window.removeEventListener('resize', throttleInitPos);
	}, [Index, throttleInitPos, createMap, gpxPath]);

	useEffect(() => {
		Terrain
			? ref_instMap.current.addOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN)
			: ref_instMap.current.removeOverlayMapTypeId(kakao.maps.MapTypeId.TERRAIN);
	}, [Terrain]);

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
								[setTerrain, setRoadview].forEach(func => func(false));
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

const kakao = window.kakao;

const infoData1 = [
	{
		title: 'Point1',
		latlng: new kakao.maps.LatLng(35.19854080726603, 127.52813813670825)
	},
	{
		title: 'Point2',
		latlng: new kakao.maps.LatLng(35.213574903960314, 127.52352662360884)
	},
	{
		title: 'Point3',
		latlng: new kakao.maps.LatLng(35.2114744950109, 127.55249592797972)
	},
	{
		title: 'Point4',
		latlng: new kakao.maps.LatLng(35.22103316495608, 127.5742865817417)
	}
];

const infoData2 = [
	{
		title: 'Point1',
		latlng: new kakao.maps.LatLng(35.19667969984804, 127.52861746761987)
	},
	{
		title: 'Point2',
		latlng: new kakao.maps.LatLng(35.213574903960314, 127.52352662360884)
	},
	{
		title: 'Point3',
		latlng: new kakao.maps.LatLng(35.2114744950109, 127.55249592797972)
	}
];

function mappginGPX(map, gpxPath) {
	// GPX 파일 읽기
	const reader = new FileReader();
	reader.onload = e => {
		const gpxData = e.target.result;
		console.log(gpxData);
		parseAndDisplayGPXData(map, gpxData);
	};
	// 파일을 가져오기 위한 XMLHttpRequest 객체 생성
	const xhr = new XMLHttpRequest();
	xhr.open('GET', gpxPath, true);
	xhr.responseType = 'blob';
	xhr.onload = () => {
		if (xhr.status === 200) {
			const fileBlob = xhr.response;
			reader.readAsText(fileBlob);
		}
	};
	// 파일 가져오기 요청 보내기
	xhr.send();
}

// GPX 파일 파싱 및 카카오맵에 경로 표시
function parseAndDisplayGPXData(map, gpxData) {
	const parser = new DOMParser();
	const xmlDoc = parser.parseFromString(gpxData, 'text/xml');
	const path = [];
	const points = xmlDoc.querySelectorAll('trkpt');

	points.forEach(point => {
		const lat = parseFloat(point.getAttribute('lat'));
		const lng = parseFloat(point.getAttribute('lon'));
		path.push(new kakao.maps.LatLng(lat, lng));
	});

	const polyline = new kakao.maps.Polyline({
		path: path,
		strokeWeight: 5,
		strokeColor: '#FF2100',
		strokeOpacity: 0.7
	});

	polyline.setMap(map);

	const bounds = new kakao.maps.LatLngBounds();
	path.forEach(point => {
		bounds.extend(point);
	});
	map.setBounds(bounds);
}
