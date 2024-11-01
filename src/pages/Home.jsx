import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';
import Visual from '../components/Visual';

export default function Home() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<h1>{CurrObject?.text[Lang]}</h1>
			<Visual />
		</Layout>
	);
}
