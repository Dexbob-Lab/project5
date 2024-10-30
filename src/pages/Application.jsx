import Layout from '../layouts/Layout';
import { getMenuByNames } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import { useEffect, useState } from 'react';

export default function Application() {
	const { Lang, setCurrObject, CurrObject } = useGlobalData();
	const [a1, a2, a3] = getMenuByNames(['application1', 'application2', 'application3']);
	const [SubPage, setSubPage] = useState(null);

	const moveSubPages = obj => {
		setCurrObject(obj);
		setSubPage(obj);
	};

	useEffect(() => {
		moveSubPages(a1);
	}, []);

	return (
		<Layout className={CurrObject?.name}>
			<nav className='applicationSubMenu'>
				<div className='pageName'>{CurrObject?.text[Lang]}</div>
				<div className='menuBtn'>
					<button onClick={() => moveSubPages(a1)}>{a1?.text[Lang]}</button>
					<button onClick={() => moveSubPages(a2)}>{a2?.text[Lang]}</button>
					<button onClick={() => moveSubPages(a3)}>{a3?.text[Lang]}</button>
				</div>
			</nav>
			{SubPage && <SubPage.page />}
		</Layout>
	);
}
