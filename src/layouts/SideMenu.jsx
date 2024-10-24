import { Link } from 'react-router-dom';
import { MENU, TYPE } from '../data/menuData';
import { useGlobalData } from '../hooks/useGlobalData';

export default function SideMenu() {
	const closeSideMenu = useGlobalData(state => state.closeSideMenu);
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
								<li key={idx} className={data.name} onClick={closeSideMenu}>
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
