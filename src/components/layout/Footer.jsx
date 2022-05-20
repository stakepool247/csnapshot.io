import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { Link } from 'react-router-dom'

export default function Footer() {
	return (
		<Box component="footer" sx={{ pt: 3, pb: 5, mt: 15 }}>
			<Container maxWidth="xl">
				<Grid container spacing={3} sx={{ alignItems: 'flex-end' }}>
					<Grid xs={12} lg={6} item>
						<Stack spacing={1}>
							<Typography
								variant="h5"
								component="span"
								sx={{ color: theme => alpha(theme.palette.text.primary, 0.5) }}
							>
								Powered by
							</Typography>
							<Link to="/">
								<Box
									component="img"
									sx={{ width: { xs: 180, md: 232 } }}
									src="/images/Graph_Text_Subtext 1.png"
									alt="Graph_Text_Subtext 1"
								/>
							</Link>
						</Stack>
					</Grid>
					<Grid item xs={12} lg={6}>
						<Typography
							variant="h5"
							sx={{ color: theme => alpha(theme.palette.text.primary, 0.75) }}
						>
							Check out our StakePool247.io managed Cardano Stake Pool service: safe,
							affordable stake pool management.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}
