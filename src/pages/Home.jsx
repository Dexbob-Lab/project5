import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';

export default function Home() {
	const { CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<h1>{CurrObject?.text.kr}</h1>
			<div className='spinner'></div>
		</Layout>
	);
}
