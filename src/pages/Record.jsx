import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';

export default function Record() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<h2>{CurrObject?.text[Lang]}</h2>
			<h3 className='nolist'>기록이 존재하지 않습니다.</h3>
			<div className='spinner'></div>
		</Layout>
	);
}
