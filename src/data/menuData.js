import Home from '../pages/Home';
import Information from '../pages/Information';
import Course from '../pages/Course';
import Application from '../pages/Application';
import Communication from '../pages/Communication';
import Record from '../pages/Record';
import Course1 from '../pagesubs/Course1';
import Course2 from '../pagesubs/Course2';
import Application1 from '../pagesubs/Application1';
import Application2 from '../pagesubs/Application2';
import Application3 from '../pagesubs/Application3';
import Communication1 from '../pagesubs/Communication1';
import Communication2 from '../pagesubs/Communication2';
import Communication3 from '../pagesubs/Communication3';
import Communication4 from '../pagesubs/Communication4';

export const TYPE = {
	HOME: '0HOME',
	MAIN: '1MAIN',
	SUB: '2SUB'
};

export const MENU = [
	{ name: 'home', path: '/', text: { en: 'DANGAM RACE', kr: '지리산 단감 레이스' }, page: Home, type: TYPE.HOME },
	{
		name: 'information',
		path: '/information',
		text: { en: 'INFORMATION', kr: '대회 안내' },
		page: Information,
		type: TYPE.MAIN
	},
	{ name: 'course', path: '/course', text: { en: 'COURSE', kr: '코스 안내' }, page: Course, type: TYPE.MAIN },
	{
		name: 'application',
		path: '/application',
		text: { en: 'APPLICATION', kr: '참가 신청' },
		page: Application,
		type: TYPE.MAIN
	},
	{
		name: 'communication',
		path: '/communication',
		text: { en: 'COMMUNICATION', kr: '참여 마당' },
		page: Communication,
		type: TYPE.MAIN
	},
	{ name: 'record', path: '/record', text: { en: 'RECORD', kr: '기록 조회' }, page: Record, type: TYPE.MAIN },
	{
		name: 'course1',
		path: '/course/course1',
		text: { en: 'Course (21.2km)', kr: '코스 (21.2km)' },
		page: Course1,
		type: TYPE.SUB
	},
	{
		name: 'course2',
		path: '/course/course2',
		text: { en: 'Course (12.61km)', kr: '코스 (12.61km)' },
		page: Course2,
		type: TYPE.SUB
	},
	{
		name: 'application1',
		path: '/application/application1',
		text: { en: 'Course (21.2km)', kr: '코스 (21.2km)' },
		page: Application1,
		type: TYPE.SUB
	},
	{
		name: 'application2',
		path: '/application/application2',
		text: { en: 'Course (12.61km)', kr: '코스 (12.61km)' },
		page: Application2,
		type: TYPE.SUB
	},
	{
		name: 'application3',
		path: '/application/application3',
		text: { en: 'Volunteer', kr: '자원 봉사' },
		page: Application3,
		type: TYPE.SUB
	},
	{
		name: 'notices',
		path: '/communication/communication1',
		text: { en: 'Notices', kr: '공지 사항' },
		page: Communication1,
		type: TYPE.SUB
	},
	{
		name: 'questions',
		path: '/communication/communication2',
		text: { en: 'Questions', kr: '문의 사항' },
		page: Communication2,
		type: TYPE.SUB
	},
	{
		name: 'photogallery',
		path: '/communication/communication3',
		text: { en: 'Photo Gallery', kr: '포토 갤러리' },
		page: Communication3,
		type: TYPE.SUB
	},
	{
		name: 'videogallery',
		path: '/communication/communication4',
		text: { en: 'Video Gallery', kr: '동영상 갤러리' },
		page: Communication4,
		type: TYPE.SUB
	}
];

export const getMenuByPath = path => {
	return MENU.find(item => item.path === path);
};
export const getMenuByName = name => {
	return MENU.find(item => item.name === name);
};
export const getMenuByNames = names => {
	return names.map(data => getMenuByName(data));
};
