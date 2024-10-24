import { useNavigate } from 'react-router-dom';
import { MENU } from '../data/menuData';
import useGlobalData from '../hooks/useGlobalData';

export default function useLink() {
	const { setCurrObject, CurrObject } = useGlobalData();
	const navigate = useNavigate();

	return (path, callback = undefined) => {
		setCurrObject(MENU.find(item => item.path === path));
		navigate(path);
		if (callback && typeof callback === 'function') callback([path, CurrObject]);
	};
}
