import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Hero from './Hero';
import QuickDownload from './QuickDownload';
import { useEffect } from 'react';

export default function Mainnet135x() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box component='main'>
			<Hero />
			<Container maxWidth='xl'>
				<QuickDownload />
			</Container>
		</Box>
	);
}
