import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import Hero from './Hero'
import Main from './Main'
import Sidebar from './Sidebar'

export default function About() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Box component="main">
			<Hero />
			<Container maxWidth="xl">
				<Box sx={{ mt: 10 }}>
					<Grid
						container
						spacing={10}
						sx={{ flexDirection: { xs: 'column-reverse', md: 'initial' } }}
					>
						<Grid item xs={12} md={9}>
							<Main />
						</Grid>
						<Grid item xs={12} md={3}>
							<Sidebar />
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}
