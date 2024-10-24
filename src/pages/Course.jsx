import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';

export default function Course() {
	const { CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<p>{CurrObject?.text.kr}</p>
		</Layout>
	);
}
