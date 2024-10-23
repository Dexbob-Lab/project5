import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Information from './pages/Information';
import Course from './pages/Course';
import Application from './pages/Application';
import Communication from './pages/Communication';
import Record from './pages/Record';

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
