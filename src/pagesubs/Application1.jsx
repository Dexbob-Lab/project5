import Register from '../components/Register';
import useGlobalData from '../hooks/useGlobalData';

export default function Course1() {
	const { Lang, CurrObject } = useGlobalData();

	return (
		<>
			<Register course={CurrObject.text[Lang]} />
		</>
	);
}
