import Home from '../pages/Home';
import Information from '../pages/Information';
import Course from '../pages/Course';
import Application from '../pages/Application';
import Communication from '../pages/Communication';
import Record from '../pages/Record';

export const TYPE = {
	HOME: '0HOME',
	MAIN: '1MAIN',
	SUB: '2SUB'
};

export const MENU = [
	{ name: 'home', path: '/', text: { en: 'HOME', kr: '메인화면' }, page: Home, type: TYPE.HOME },
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
	{ name: 'record', path: '/record', text: { en: 'RECORD', kr: '기록조회' }, page: Record, type: TYPE.MAIN }
];
