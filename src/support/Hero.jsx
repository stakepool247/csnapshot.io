import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HeroLayout from '../../components/common/HeroLayout';

export default function Hero() {
	return (
		<Box component='section'>
			<HeroLayout>
				<Typography variant='h1' marginBottom={3}>
					Support{' '}
					<Box
						component='span'
						sx={{ color: 'primary.main', fontWeight: 'bold' }}
					>
						cSnapshots.io
					</Box>{' '}
					project
				</Typography>
			</HeroLayout>
		</Box>
	);
}
