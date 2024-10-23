import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/home';
import Information from './pages/home';
import Course from './pages/home';
import Application from './pages/home';
import Communication from './pages/home';
import Record from './pages/home';

function App() {
	const location = useLocation();
	return (
		<>
			<Header />
			<h1>지리산 단감 레이스</h1>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/information' element={<Information />} />
				<Route path='/course' element={<Course />} />
				<Route path='/application' element={<Application />} />
				<Route path='/communication' element={<Communication />} />
				<Route path='/record' element={<Record />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
