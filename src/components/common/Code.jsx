import Typography from '@mui/material/Typography'

export default function Code({ text }) {
	return (
		<Typography
			color="success.main"
			bgcolor="success.light"
			component="code"
			sx={{ px: 0.5, py: 0.25, wordBreak: 'break-all' }}
		>
			{text}
		</Typography>
	)
}
