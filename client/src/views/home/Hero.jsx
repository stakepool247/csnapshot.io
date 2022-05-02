import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Card from '../../components/common/Card'
import HeroLayout from '../../components/common/HeroLayout'
import { appsDetails } from '../../helper/common'

export default function Hero() {
	return (
		<Box component="section">
			<HeroLayout
				sx={{
					minHeight: 300,
					py: 10,
					pb: { xs: theme => `calc(190px + ${theme.spacing(5)})`, md: 27 },
				}}
			>
				<Typography textAlign="center" variant="h1" marginBottom={3}>
					Download latest cardano-node{' '}
					<Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} /> snapshot DB
					files
				</Typography>
				<Typography textAlign="center" variant="h5">
					so you can get your node up and running faster! We are updating snapshots daily!
				</Typography>
			</HeroLayout>
			<Stack
				direction={{ xs: 'column', md: 'row' }}
				spacing={3}
				sx={{
					justifyContent: 'center',
					alignItems: { xs: 'center', md: 'initial' },
					textAlign: 'center',
					mt: { xs: 0, md: '-155px' },
					position: 'relative',
				}}
			>
				{appsDetails.map(({ id, ...rest }) => (
					<Card datam={rest} key={id} />
				))}
			</Stack>
		</Box>
	)
}
