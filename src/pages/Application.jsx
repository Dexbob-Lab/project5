import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';
import Register from '../components/Register';

export default function Application() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<p>{CurrObject?.text[Lang]}</p>
			<Register />
		</Layout>
	);
}
