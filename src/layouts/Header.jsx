import { Link } from 'react-router-dom';
import { MENU, TYPE } from '../data/menuData';

export default function Header() {
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
								<li key={idx} className={data.name}>
									<Link to={data.path}>{data.display}</Link>
								</li>
							);
						}
					})}
				</ul>
			</nav>
			<button className='btnMenuToggle'></button>
		</header>
	);
}
