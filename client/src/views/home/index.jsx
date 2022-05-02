import Box from '@mui/material/Box'
import Hero from './Hero'
import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<Box component="main">
			<Hero />
		</Box>
	)
}
