import { Link } from 'react-router-dom';
import { MENU, TYPE } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import useLink from '../hooks/useLink';

export default function SideMenu() {
	const closeSideMenu = useGlobalData(state => state.closeSideMenu);
	const linkPage = useLink();

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
									<div>{data.text.kr}</div>
								</li>
							);
						}
					})}
				</ul>
			</nav>
		</aside>
	);
}
