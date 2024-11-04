import { useQuery } from '@tanstack/react-query';

const useYoutubeQuery = () => {
	return useQuery({
		queryKey: ['youtubeList'],
		queryFn: fetchYoutube,
		staleTime: 1000 * 60,
		gcTime: 1000 * 60
	});
};

export default useYoutubeQuery;

const fetchYoutube = async () => {
	const num = 20;
	const api_key = import.meta.env.VITE_YOUTUBE_API;
	let pid = 'PLQZ4zrrwKYcUsgEsQ4yRAHJ12DWkMjjPK';
	const baseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
	const url = `${baseUrl}?part=snippet&key=${api_key}&playlistId=${pid}&maxResults=${num}`;

	const data = await fetch(url);
	const json = await data.json();
	return json.items;
};
