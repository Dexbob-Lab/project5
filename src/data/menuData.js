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
	{ name: 'home', path: '/', display: 'HOME', page: Home, type: TYPE.HOME },
	{ name: 'information', path: '/information', display: 'INFORMATION', page: Information, type: TYPE.MAIN },
	{ name: 'course', path: '/course', display: 'COURSE', page: Course, type: TYPE.MAIN },
	{ name: 'application', path: '/application', display: 'APPLICATION', page: Application, type: TYPE.MAIN },
	{ name: 'communication', path: '/communication', display: 'COMMUNICATION', page: Communication, type: TYPE.MAIN },
	{ name: 'record', path: '/record', display: 'RECORD', page: Record, type: TYPE.MAIN }
];
