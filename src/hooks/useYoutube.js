import { useQuery } from '@tanstack/react-query';

const useYoutubeQuery = (opt = { num: 10 }) => {
	return useQuery({
		queryKey: ['youtubeList', opt],
		queryFn: fetchYoutube,
		staleTime: 1000 * 60,
		gcTime: 1000 * 60
	});
};

export default useYoutubeQuery;

const fetchYoutube = async ({ queryKey }) => {
	const num = queryKey[1].num;
	console.log('youtube ', num);
	const api_key = import.meta.env.VITE_YOUTUBE_API;
	let pid = 'PLQZ4zrrwKYcUsgEsQ4yRAHJ12DWkMjjPK';
	const baseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
	const url = `${baseUrl}?part=snippet&key=${api_key}&playlistId=${pid}&maxResults=${num}`;

	const data = await fetch(url);
	const json = await data.json();
	return json.items;
};
