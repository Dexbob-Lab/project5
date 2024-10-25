import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';
import courseImage from '../assets/images/course1.png';

export default function Course1() {
	const { Lang, CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<p>{CurrObject?.text[Lang]}</p>

			<img src={courseImage} alt='' />
		</Layout>
	);
}
