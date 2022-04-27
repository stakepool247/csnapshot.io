import NavBar from './components/navbar/NavBar';
import MainPage from './page/mainpage/MainPage';
import Footer from './components/footer/Footer';
import NotFound from './page/notfound/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Snapshot from './page/snapshot/Snapshot';
import AboutUs from './page/aboutus/AboutUs';

function App() {
	return (
		<div>
			<Router>
				<div className='App'>
					<NavBar />
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/mainnet' element={<Snapshot chain='mainnet' />} />
						<Route path='/testnet' element={<Snapshot chain='testnet' />} />
						<Route path='/about-us' element={<AboutUs />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
