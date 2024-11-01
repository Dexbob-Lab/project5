export default function useGPXMapping(map, path) {
	// GPX 파일 읽기
	const reader = new FileReader();
	reader.onload = e => {
		const gpxData = e.target.result;
		console.log(gpxData);
		parseAndDisplayGPXData(map, gpxData);
	};
	// 파일을 가져오기 위한 XMLHttpRequest 객체 생성
	const xhr = new XMLHttpRequest();
	xhr.open('GET', path, true);
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
	const { kakao } = window;
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
		strokeColor: '#FF0000',
		strokeOpacity: 0.7
	});

	polyline.setMap(map);

	// 맵 중심과 줌 레벨 설정
	const bounds = new kakao.maps.LatLngBounds();
	path.forEach(point => {
		bounds.extend(point);
	});
	map.setBounds(bounds);
}
