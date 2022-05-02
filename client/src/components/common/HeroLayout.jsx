import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import BgStrap from './BgStrap'

export default function HeroLayout({ sx, children }) {
	return (
		<Box
			sx={{
				position: 'relative',
				overflow: 'hidden',
				backgroundImage: "url('/images/Mesh Gradient.svg')",
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
			}}
		>
			{/* <BgStrap /> */}
			<Box
				sx={{
					py: 10,
					position: 'relative',
					...sx,
				}}
			>
				<Container maxWidth="xl">{children}</Container>
			</Box>
		</Box>
	)
}
