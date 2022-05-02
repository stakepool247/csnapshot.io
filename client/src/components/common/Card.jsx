import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import { seemoreButton } from './styles';
import { Link } from 'react-router-dom';

export default function Card({ datam }) {
	const { title, subtitle, description, downloadLink, seemore } = datam;

	return (
		<Paper
			sx={{
				px: { xs: 2, md: 5 },
				py: { xs: 3, md: 5 },
				width: '100%',
				maxWidth: 382,
				borderRadius: 1.5,
				mt: { xs: 2, md: 0 },
			}}
		>
			<Typography marginBottom={0.5} variant='h3' color='common.black'>
				{title}
			</Typography>
			<Typography
				marginBottom={3}
				variant='body2'
				sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.5) }}
			>
				{subtitle}
			</Typography>
			<Typography
				marginBottom={3}
				sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.75) }}
			>
				{description}
			</Typography>
			<Stack direction='row' spacing={2} sx={{ justifyContent: 'center' }}>
				<Link to={seemore}>
					<Button
						variant='contained'
						endIcon={<img src='/images/import.svg' width='24' height='24' />}
						sx={{
							backgroundImage: (theme) => theme.palette.linear.main,
							'& .MuiButton-endIcon': {
								ml: 1.25,
							},
						}}
					>
						<Typography>Download</Typography>
					</Button>
				</Link>
				<Link to='/about'>
					<Button variant='outlined' sx={{ ...seemoreButton }}>
						Learn More
					</Button>
				</Link>
			</Stack>
		</Paper>
	);
}
