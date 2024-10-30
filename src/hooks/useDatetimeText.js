import useCombineText from './useCombineText';

export default function useDatetimeText() {
	const combineText = useCombineText();
	return datetimeText => {
		if (!datetimeText) return;
		const textArr = datetimeText.split('T');
		const date = combineText(textArr[0], '-', '/');
		const time = textArr[1].slice(0, 5);
		return `${date} (${time})`;
	};
}
