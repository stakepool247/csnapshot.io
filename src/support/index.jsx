import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Hero from './Hero';
import SupportUs from './SupportUs';
import { useEffect } from 'react';

export default function Support() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Box component='main'>
			<Hero />
			<Container maxWidth='xl'>
				<SupportUs />
			</Container>
		</Box>
	);
}
