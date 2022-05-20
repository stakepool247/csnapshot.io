import { alpha } from '@mui/material/styles'

export const badge = {
	mr: 1,
	mt: '-3px',
	bgcolor: 'primary.main',
	width: 6,
	height: 6,
	borderRadius: '50%',
	display: 'inline-block',
	verticalAlign: 'middle',
}

export const seemoreButton = {
	color: theme => theme.palette.text.rgb,
	border: '1px solid rgb( 0 0 0 / 50%)',
	background: theme =>
		`linear-gradient(to right, white, white), linear-gradient(to right, ${theme.palette.primary.light} , ${theme.palette.secondary.main})`,
	backgroundClip: 'padding-box, border-box',
	backgroundOrigin: 'padding-box, border-box',
}

export const table = {
	width: '100%',
	outline: '1px solid #eeeefb',
	outlineOffset: '-1px',
	'& td': {
		px: 1.5,
		py: 1,
		'& div': {
			display: 'flex',
			alignItems: 'center',
		},
	},
	'&, & td, & tr': {
		border: 1,
		borderCollapse: 'collapse',
		borderColor: theme => alpha(theme.palette.text.primary, 0.15),
	},
}

export const copyButton = {
	width: 24,
	height: 24,
	position: 'absolute',
	top: 16,
	right: 16,
	bgcolor: 'common.white',
	boxShadow: theme => ` 0px 2px 4px ${alpha(theme.palette.text.primary, 0.25)}`,
	borderRadius: 0.5,
	'&:hover': {
		bgcolor: 'common.white',
	},
}

export const terminalContainer = {
	width: '100%',
	maxWidth: 1080,
	position: 'relative',
	backgroundImage: "url('/images/Mesh Gradient.svg')",
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	overflow: 'hidden',
	'& .terminalCode': {
		overflowX: 'scroll',
		position: 'relative',
		p: 3,
		pb: 4,
	},
}
