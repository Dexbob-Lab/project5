import { Link } from 'react-router-dom';
import { MENU, TYPE } from '../data/menuData';

export default function SideMenu() {
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
								<li key={idx} className={data.name}>
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
