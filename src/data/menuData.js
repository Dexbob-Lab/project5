import Home from '../pages/Home';
import Information from '../pages/Information';
import Course from '../pages/Course';
import Application from '../pages/Application';
import Communication from '../pages/Communication';
import Record from '../pages/Record';
import Course1 from '../pagesubs/Course1';
import Course2 from '../pagesubs/Course2';

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
		text: { en: 'INFORMATION', kr: '대회안내' },
		page: Information,
		type: TYPE.MAIN
	},
	{ name: 'course', path: '/course', text: { en: 'COURSE', kr: '코스안내' }, page: Course, type: TYPE.MAIN },
	{
		name: 'application',
		path: '/application',
		text: { en: 'APPLICATION', kr: '참가신청' },
		page: Application,
		type: TYPE.MAIN
	},
	{
		name: 'communication',
		path: '/communication',
		text: { en: 'COMMUNICATION', kr: '참여마당' },
		page: Communication,
		type: TYPE.MAIN
	},
	{ name: 'record', path: '/record', text: { en: 'RECORD', kr: '기록조회' }, page: Record, type: TYPE.MAIN },
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
