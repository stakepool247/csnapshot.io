import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Card from '../../components/common/Card';
import HeroLayout from '../../components/common/HeroLayout';
import { appsDetails } from '../../helper/common';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import AlertTitle from '@mui/material/AlertTitle';


export default function Hero() {
	const isMobile = useMediaQuery('(max-width:800px)');

	return (
		<Box component='section'>
			<HeroLayout
				sx={{
					minHeight: 300,
					py: 10,
					pb: { xs: (theme) => `calc(190px + ${theme.spacing(5)})`, md: 27 },
				}}
			>
				<Typography textAlign='center' variant='h1' marginBottom={3}>
					Download the latest Cardano{' '}
					<Box component='br' sx={{ display: { xs: 'none', md: 'block' } }} />{' '}
					blockchain snapshot
				</Typography>
				<Typography textAlign='center' variant='h5'>
					We are updating the snapshots daily, so you can sync your Cardano node
					much faster!
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
			<Box component='br' sx={{ display: { xs: 'none', md: 'block' } }} />{' '}
			{!isMobile && (
        <Container maxWidth="xl" sx={{ textAlign: 'center' }}>
          <Alert  severity="warning">
		  
            <Typography textAlign="left" variant="h5">
			{/* <AlertTitle>Support Needed</AlertTitle> */}
              <strong>Please support us </strong> in keeping the Cardano Snapshots site operational by donating some ADA to the following address:
            </Typography>
            <Typography textAlign="left" variant="h5" component="ib">
              addr1q8c2gh9q7n4ecuc70yp24hz2nwfv6sak760vmcdym44aatxrnjdz0sgztmp89a9l8lra3nqd59zfaz57ghl53qh7dhssgyfv7y
            </Typography>
          </Alert>
        </Container>
      )}
		</Box>
	);
}
