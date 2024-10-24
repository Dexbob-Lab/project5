import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { MENU } from './data/menuData';
import SideMenu from './layouts/SideMenu';
import { useGlobalData } from './hooks/useGlobalData';

function App() {
	const location = useLocation();
	const sideMenuFlg = useGlobalData(state => state.SideMenuFlg);
	return (
		<>
			<Header />
			<Routes location={location} key={location.pathname}>
				{MENU.map((data, idx) => {
					return <Route key={idx} path={data.path} element={<data.page />} />;
				})}
			</Routes>
			{sideMenuFlg && <SideMenu />}
			<Footer />
		</>
	);
}

export default App;
