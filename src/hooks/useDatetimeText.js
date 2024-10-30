import useCombineText from './useCombineText';

export default function useDatetimeText() {
	const combineText = useCombineText();
	return dateTimeText => {
		const textArr = dateTimeText.split('T');
		const date = combineText(textArr[0], '-', '/');
		const time = textArr[1].slice(0, 5);
		return `${date} (${time})`;
	};
}
