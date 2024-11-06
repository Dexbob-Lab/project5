import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { MENU, TYPE } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import useLink from '../hooks/useLink';

export default function Header() {
	const { Lang, toggleSideMenu } = useGlobalData();
	const { pathname } = useLocation();
	const linkPage = useLink();

	return (
		<header className='header'>
			<div className='movewrap'>
				<div>
					<div className='moving'></div>
				</div>
			</div>
			<button onClick={() => linkPage('/')}>
				<img src='logo/logo1.png' width='50' alt='' />
			</button>
			<ul className='gnb'>
				{MENU.map((data, idx) => {
					if (data.type === TYPE.MAIN) {
						return (
							<li key={idx} className={pathname === data.path ? 'on' : ''} onClick={() => linkPage(data.path)}>
								{data.text[Lang]}
							</li>
						);
					}
				})}
			</ul>
			<button className='btnMenuToggle' onClick={toggleSideMenu}>
				<FaBars />
			</button>
		</header>
	);
}
