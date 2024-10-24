import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MENU, TYPE } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import useLink from '../hooks/useLink';

export default function Header() {
	const toggleSideMenu = useGlobalData(state => state.toggleSideMenu);
	const { pathname } = useLocation();
	const linkPage = useLink();

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
								<li key={idx} className={pathname === data.path ? 'on' : ''} onClick={() => linkPage(data.path)}>
									{data.text.kr}
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
