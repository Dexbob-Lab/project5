import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SideMenu from './layouts/SideMenu';
import { MENU, TYPE, getMenuByPath } from './data/menuData';
import useGlobalData from './hooks/useGlobalData';

function App() {
	const location = useLocation();
	const { CurrObject, setCurrObject, SideMenuFlg } = useGlobalData();
	!CurrObject && setCurrObject(getMenuByPath(location.pathname));
	// console.log(CurrObject);
	return (
		<>
			<Header />
			<Routes location={location} key={location.pathname}>
				{MENU.map((data, idx) => {
					// if (data.type !== TYPE.SUB) return <Route key={idx} path={data.path} element={<data.page />} />;
					return <Route key={idx} path={data.path} element={<data.page />} />;
				})}
			</Routes>
			{SideMenuFlg && <SideMenu />}
			<Footer />
		</>
	);
}

export default App;
