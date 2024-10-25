import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';

export default function Record() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<p>{CurrObject?.text[Lang]}</p>
		</Layout>
	);
}
