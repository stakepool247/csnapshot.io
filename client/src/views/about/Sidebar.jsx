import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { alpha } from '@mui/material/styles'
import { useLocation } from 'react-router-dom'
import { heads } from '../../helper/common'

export default function Sidebar() {
	const location = useLocation()

	return (
		<Box sx={{ position: 'sticky', top: 150 }}>
			<Stack component="ul" sx={{ listStyle: 'none', m: 0, p: 0 }} spacing={2}>
				{heads.map(({ id, text, url }) => (
					<Box
						component="li"
						key={id}
						sx={{
							p: 0,
							'& a': {
								display: 'flex',
								alignItems: 'center',
								'& span': {
									mr: 1,
									mt: '-2px',
								},
							},
						}}
					>
						<a href={url}>
							<Box
								component="span"
								sx={{
									width: 24,
									height: 2,
									bgcolor:
										location.hash === url ? 'secondary.main' : 'transparent',
									display: 'inline-block',
								}}
							/>
							<Typography
								sx={{
									color:
										location.hash === url
											? 'secondary.main'
											: theme => alpha(theme.palette.text.primary, 0.5),
								}}
							>
								{text}
							</Typography>
						</a>
					</Box>
				))}
			</Stack>
		</Box>
	)
}
