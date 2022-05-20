import Box from '@mui/material/Box'

export default function BgStrap() {
	return (
		<Box
			sx={{
				position: 'absolute',
				whiteSpace: 'nowrap',
				zIndex: 0,
				maxWidth: theme => theme.breakpoints.values.xl,
				mx: 'auto',
				left: 0,
				right: 0,
				overflow: 'hidden',
			}}
		>
			{[...Array(50)].map((_, i) => (
				<Box
					sx={{
						backgroundColor: i % 2 === 0 ? '#f4eaf3' : 'transparent',
						width: i % 2 === 0 ? 80 : 30,
						height: 1000,
						display: 'inline-block',
					}}
					key={Math.random()}
				/>
			))}
		</Box>
	)
}
