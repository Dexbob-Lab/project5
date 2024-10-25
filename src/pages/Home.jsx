import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';

export default function Home() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<h1>{CurrObject?.text[Lang]}</h1>
			<div className='spinner'></div>
		</Layout>
	);
}
