import { useNavigate } from 'react-router-dom';
import { getMenuByPath } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';

export default function useLink() {
	const { setCurrObject, CurrObject } = useGlobalData();
	const navigate = useNavigate();

	return (path, callback = undefined) => {
		setCurrObject(getMenuByPath(path));
		navigate(path);
		if (callback && typeof callback === 'function') callback([path, CurrObject]);
	};
}
