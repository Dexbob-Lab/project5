import useDatetimeText from '../hooks/useDatetimeText';

export default function BoradDetail({ children, data }) {
	const datetimeText = useDatetimeText();

	return <div className='board'>{children}</div>;
}
