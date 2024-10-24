import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SideMenu from './layouts/SideMenu';
import { MENU } from './data/menuData';
import useGlobalData from './hooks/useGlobalData';

function App() {
	const location = useLocation();
	const { CurrObject, setCurrObject, SideMenuFlg } = useGlobalData();
	!CurrObject && setCurrObject(MENU.find(item => item.path === location.pathname));

	return (
		<>
			<Header />
			<Routes location={location} key={location.pathname}>
				{MENU.map((data, idx) => {
					return <Route key={idx} path={data.path} element={<data.page />} />;
				})}
			</Routes>
			{SideMenuFlg && <SideMenu />}
			<Footer />
		</>
	);
}

export default App;
