import { Link, useLocation } from 'react-router-dom';
import { MENU, TYPE } from '../data/menuData';
import { useGlobalData } from '../hooks/useGlobalData';

export default function SideMenu() {
	const closeSideMenu = useGlobalData(state => state.closeSideMenu);
	const { pathname } = useLocation();
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
								<li key={idx} onClick={closeSideMenu}>
									<Link to={data.path}>{data.display}</Link>
								</li>
							);
						}
					})}
				</ul>
			</nav>
		</aside>
	);
}
