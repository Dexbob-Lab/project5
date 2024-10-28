import Layout from '../layouts/Layout';
import { getMenuByNames } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import { useEffect, useState } from 'react';

export default function Communication() {
	const { Lang, setCurrObject, CurrObject } = useGlobalData();
	const [c1, c2, c3, c4] = getMenuByNames(['notices', 'questions', 'photogallery', 'videogallery']);
	const [SubPage, setSubPage] = useState(null);

	const moveSubPages = obj => {
		setCurrObject(obj);
		setSubPage(obj);
	};

	useEffect(() => {
		moveSubPages(c1);
	}, []);

	return (
		<Layout className={CurrObject?.name}>
			<nav className='subMenu'>
				<div className='pageName'>{CurrObject?.text[Lang]}</div>
				<div className='menuBtn'>
					<button onClick={() => moveSubPages(c1)}>{c1?.text[Lang]}</button>
					<button onClick={() => moveSubPages(c2)}>{c2?.text[Lang]}</button>
					<button onClick={() => moveSubPages(c3)}>{c3?.text[Lang]}</button>
					<button onClick={() => moveSubPages(c4)}>{c4?.text[Lang]}</button>
				</div>
			</nav>
			{SubPage && <SubPage.page />}
		</Layout>
	);
}
