import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import defaultTheme from './theme/default';
import { ThemeProvider } from '@mui/material/styles';

// Routes
import Home from './views/home';
import Mainnet from './views/mainnet';
import Testnet from './views/testnet';
import Mainnet135x from './views/mainnet135x';
import About from './views/about';
import SnapshotDownload from './views/snapshotDownload';

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/mainnet' element={<Mainnet />} />
						<Route path='/testnet' element={<Testnet />} />
						<Route path='/mainnet-1-35-x' element={<Mainnet135x />} />
						<Route
							path='/mainnet-snapshot'
							element={<SnapshotDownload chain='mainnet' />}
						/>
						{/* <Route
							path='/testnet-snapshot'
							element={<SnapshotDownload chain='testnet' />}
						/>
						<Route
							path='/mainnet-1-35-x'
							element={<SnapshotDownload chain='mainnet-1-35-x' />}
						/> */}
						<Route path='/about' element={<About />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}
