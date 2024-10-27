import Layout from '../layouts/Layout';
import { getMenuByNames } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import { useEffect, useState } from 'react';

export default function Course() {
	const { Lang, setCurrObject, CurrObject } = useGlobalData();
	const [c1, c2] = getMenuByNames(['course1', 'course2']);
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
					<button onClick={() => moveSubPages(c1)}>{c1.text[Lang]}</button>
					<button onClick={() => moveSubPages(c2)}>{c2.text[Lang]}</button>
				</div>
			</nav>
			{SubPage && <SubPage.page />}
		</Layout>
	);
}
