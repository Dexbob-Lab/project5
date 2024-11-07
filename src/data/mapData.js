const kakao = window.kakao;

const gpxPaths = ['gpx/21.2km.gpx', 'gpx/12.61km.gpx', ''];
const gpxPath = course => {
	return course === 'course1' ? gpxPaths[0] : course === 'course2' ? gpxPaths[1] : gpxPaths[2];
};
const getLatLng = (lat, lng) => new kakao.maps.LatLng(lat, lng);

const infoData1 = [
	{
		title: 'Point 1',
		latlng: getLatLng(35.19854080726603, 127.52813813670825)
	},
	{
		title: 'Point 2',
		latlng: getLatLng(35.213574903960314, 127.52352662360884)
	},
	{
		title: 'Point 3',
		latlng: getLatLng(35.2114744950109, 127.55249592797972)
	},
	{
		title: 'Point 4',
		latlng: getLatLng(35.22103316495608, 127.5742865817417)
	}
];

const infoData2 = [
	{
		title: 'Point 1',
		latlng: getLatLng(35.19667969984804, 127.52861746761987)
	},
	{
		title: 'Point 2',
		latlng: getLatLng(35.213574903960314, 127.52352662360884)
	},
	{
		title: 'Point 3',
		latlng: getLatLng(35.2114744950109, 127.55249592797972)
	}
];

const infoData3 = [
	{
		title: '오시는 길',
		latlng: getLatLng(35.19716017554816, 127.5279837075072)
	}
];

export const points = course => {
	return course === 'course1' ? infoData1 : course === 'course2' ? infoData2 : infoData3;
};

export function mappingGPX(map, course) {
	const gpxFile = gpxPath(course);
	if (!gpxFile) {
		map.setLevel(4);
		return;
	}
	// GPX 파일 읽기
	const reader = new FileReader();
	reader.onload = e => {
		const gpxData = e.target.result;
		parseAndDisplayGPXData(map, gpxData);
	};
	// 파일을 가져오기 위한 XMLHttpRequest 객체 생성
	const xhr = new XMLHttpRequest();
	xhr.open('GET', gpxFile, true);
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
