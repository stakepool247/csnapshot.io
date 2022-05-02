import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import HeroLayout from '../../components/common/HeroLayout'

export default function Hero() {
	return (
		<Box component="section">
			<HeroLayout>
				<Typography variant="h1" marginBottom={3}>
					About cSnapshots
				</Typography>
			</HeroLayout>
		</Box>
	)
}
