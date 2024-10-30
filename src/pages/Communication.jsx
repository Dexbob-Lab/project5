import Layout from '../layouts/Layout';
import { getMenuByNames } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import { useEffect, useState } from 'react';

export default function Communication() {
	const { Lang, setCurrObject, CurrObject } = useGlobalData();
	const subMenus = ['notices', 'questions', 'photogallery', 'videogallery'];
	const [c1, c2, c3, c4] = getMenuByNames(subMenus);
	const [SubPage, setSubPage] = useState(c1);

	useEffect(() => {
		setCurrObject(SubPage);
	}, [SubPage]);

	return (
		<Layout className={CurrObject?.name}>
			<nav className='communicationSubMenu'>
				<div className='pageName'>{CurrObject?.text[Lang]}</div>
				<div className='menuBtn'>
					<button onClick={() => setSubPage(c1)}>{c1?.text[Lang]}</button>
					<button onClick={() => setSubPage(c2)}>{c2?.text[Lang]}</button>
					<button onClick={() => setSubPage(c3)}>{c3?.text[Lang]}</button>
					<button onClick={() => setSubPage(c4)}>{c4?.text[Lang]}</button>
				</div>
			</nav>
			{SubPage && <SubPage.page />}
		</Layout>
	);
}
