import Layout from '../layouts/Layout';
import useGlobalData from '../hooks/useGlobalData';
import courseImage from '../assets/images/course2.png';

export default function Course2() {
	const { CurrObject } = useGlobalData();
	return (
		<Layout className={CurrObject?.name}>
			<p>{CurrObject?.text.kr}</p>

			<img src={courseImage} alt='' />
		</Layout>
	);
}
