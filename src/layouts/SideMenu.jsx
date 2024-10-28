import { Link } from 'react-router-dom';
import { MENU, TYPE } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import useLink from '../hooks/useLink';
import { useEffect } from 'react';
import { throttle } from 'lodash';

export default function SideMenu() {
	const { Lang, closeSideMenu } = useGlobalData();
	const linkPage = useLink();
	const closePanel = throttle(() => window.innerWidth >= 1000 && closeSideMenu(), 500);

	useEffect(() => {
		window.addEventListener('resize', closePanel);
		return () => window.removeEventListener('resize', closePanel);
	}, [closePanel]);

	return (
		<aside className='sideMenu'>
			<div className='logo'>
				<Link to='/'>
					<img src='logo1.png' width='50' alt='' />
				</Link>
			</div>
			<nav>
				<ul className='mnb'>
					{MENU.map((data, idx) => {
						if (data.type === TYPE.MAIN) {
							return (
								<li key={idx} onClick={() => linkPage(data.path, closeSideMenu)}>
									<div>{data.text[Lang]}</div>
								</li>
							);
						}
					})}
				</ul>
			</nav>
		</aside>
	);
}
