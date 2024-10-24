import { Link, useLocation } from 'react-router-dom';
import { MENU, TYPE } from '../data/menuData';
import { useGlobalData } from '../hooks/useGlobalData';
import { FaBars } from 'react-icons/fa';

export default function Header() {
	const toggleSideMenu = useGlobalData(state => state.toggleSideMenu);
	const { pathname } = useLocation();
	return (
		<header className='header'>
			<Link to='/'>
				<img src='logo1.png' width='50' alt='' />
			</Link>
			<nav>
				<ul className='gnb'>
					{MENU.map((data, idx) => {
						if (data.type === TYPE.MAIN) {
							return (
								<li key={idx} className={pathname === data.path ? 'on' : ''}>
									<Link to={data.path}>{data.display}</Link>
								</li>
							);
						}
					})}
				</ul>
			</nav>
			<button className='btnMenuToggle' onClick={toggleSideMenu}>
				<FaBars />
			</button>
		</header>
	);
}
