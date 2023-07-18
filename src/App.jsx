import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import defaultTheme from './theme/default';
import { ThemeProvider } from '@mui/material/styles';

// Routes
import Home from './views/home';
import Mainnet from './views/mainnet';
import Testnet from './views/testnet';
import About from './views/about';
import SnapshotDownload from './views/snapshotDownload';
import Support from './views/support';

export default function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<Home />} />
						<Route path='/mainnet' element={<Mainnet />} />
						<Route path='/testnet' element={<Testnet />} />
						<Route
							path='/mainnet-snapshot'
							element={<SnapshotDownload chain='mainnet' />}
						/>
						<Route
							path='/testnet-snapshot'
							element={<SnapshotDownload chain='testnet' />}
						/>
						<Route path='/support-us' element={<Support />} />
						<Route path='/about' element={<About />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}
