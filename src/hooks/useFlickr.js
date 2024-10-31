import { useQuery } from '@tanstack/react-query';

export const useFlickrQuery = (opt = {}) => {
	return useQuery({
		queryKey: ['GalleryList', opt],
		queryFn: fetchFlickr,
		staleTime: 1000 * 60,
		gcTime: 1000 * 60
	});
};

export default useFlickrQuery;

const fetchFlickr = async opt => {
	const options = { page: 1, per_page: 20, ...opt.queryKey[1] };
	const api_key = import.meta.env.VITE_FLICKR_API;
	// const myID = import.meta.env.VITE_MY_ID;
	let url = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	url += `&method=flickr.photos.search&api_key=${api_key}`;
	url += `&per_page=${options.per_page}&page=${options.page}`;
	url += `&text=마라톤${options.tags ? `&tags=${options.tags}` : ''}`;

	const data = await fetch(url);
	const json = await data.json();
	return json.photos.photo;
};
