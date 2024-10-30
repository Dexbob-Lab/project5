import Layout from '../layouts/Layout';
import { getMenuByNames } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';
import { useEffect, useState } from 'react';

export default function Communication() {
	const { Lang, setCurrObject, CurrObject } = useGlobalData();
	const subMenus = ['notices', 'questions', 'photogallery', 'videogallery'];
	const [c1, c2, c3, c4] = getMenuByNames(subMenus);
	const [SubPage, setSubPage] = useState(c1);

	// useEffect(() => {
	// 	console.log('sub>>>', CurrObject.name);
	// 	console.log('sub>>>', subMenus);
	// 	console.log(
	// 		'sub>>>',
	// 		subMenus.findIndex(menu => menu === CurrObject.name)
	// 	);

	// 	subMenus.findIndex(menu => menu === CurrObject.name) < 0 ? setSubPage(c1) : setSubPage(CurrObject);
	// }, []);

	useEffect(() => {
		console.log('22222>>>', SubPage);
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
