export default function useShortenText() {
	return (text, size) => {
		const mark = ' ... ';
		const len = size - mark.length;
		return text?.length > len ? text.slice(0, len) + mark : text;
	};
}
