import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
	return (
		<Box sx={{ backgroundImage: "url('/images/BG Pattern.svg')" }}>
			<Navbar />
			<Box>
				<Outlet />
			</Box>
			<Footer />
		</Box>
	)
}
