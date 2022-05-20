import { createTheme } from '@mui/material/styles'

const secondaryMain = '#3269DF'

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: '#5543DB',
			light: '#8F05D5',
		},
		secondary: {
			main: secondaryMain,
		},
		success: {
			main: '#1E7B3E',
			light: '#E0F8E8',
		},
		text: {
			primary: 'rgba(31, 31, 31)',
			secondary: 'rgba(31, 31, 31, 0.75)',
			disabled: 'rgba(31, 31, 31, 0.5)',
			rgb: '#8412D7',
		},
		linear: {
			main: `linear-gradient(96.96deg, #8F05D5 -0.28%, ${secondaryMain} 109.63%)`,
		},
	},
	typography: {
		fontFamily: "'Raleway', sans-serif",
		fontWeight: 500,
		lineHeight: '24px',
		letterSpacing: '0em',
		fontSize: 14,
		body1: {
			fontWeight: 500,
			lineHeight: '24px',
			letterSpacing: '0em',
			fontSize: 16,
			'@media (max-width:600px)': {
				fontSize: '15px',
				lineHeight: '22px',
			},
		},
		body2: {
			fontSize: '14px',
			lineHeight: '21px',
			fontWeight: '500',
			'@media (max-width:600px)': {
				fontSize: '13px',
				lineHeight: '20px',
			},
		},
		body3: {
			fontSize: '10px',
			lineHeight: '15px',
			fontWeight: '400',
			'@media (max-width:600px)': {
				fontSize: '8px',
				lineHeight: '13px',
			},
		},
		h1: {
			fontSize: '48px',
			lineHeight: '58px',
			fontWeight: '500',
			'@media (max-width:600px)': {
				fontSize: '36px',
				lineHeight: '42px',
			},
		},
		h2: {
			fontSize: '40px',
			lineHeight: '48px',
			fontWeight: '500',
			'@media (max-width:600px)': {
				fontSize: '28px',
				lineHeight: '24px',
			},
		},
		h3: {
			fontSize: '32px',
			lineHeight: '38px',
			fontWeight: '500',
			'@media (max-width:600px)': {
				fontSize: '24px',
				lineHeight: '34px',
			},
		},
		h4: {
			fontSize: '24px',
			lineHeight: '29px',
			fontWeight: '500',
			'@media (max-width:600px)': {
				fontSize: '20px',
				lineHeight: '28px',
			},
		},
		h5: {
			fontSize: '18px',
			lineHeight: '27px',
			fontWeight: '500',
			'@media (max-width:600px)': {
				fontSize: '16px',
				lineHeight: '22px',
			},
		},
		firacode1: {
			fontFamily: "'Fira Code', monospace",
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '29px',
			'@media (max-width:600px)': {
				fontSize: '14px',
				lineHeight: '26px',
			},
		},
		firacode2: {
			fontFamily: "'Fira Code', monospace",
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '24px',
			'@media (max-width:600px)': {
				fontSize: '14px',
				lineHeight: '20px',
			},
		},
	},
	shadows: [
		'none',
		'0px 10px 20px 0px #1F1F1F1F',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'none',
		'0px 10px 20px 0px #1F1F1F1F',
	],
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					boxShadow: 'none',
					'&:hover': {
						boxShadow: 'none',
					},
					padding: '12px 24px',
					borderRadius: '6px',
					'@media (max-width:600px)': {
						padding: '8px 20px',
						borderRadius: '4px',
					},
				},
			},
		},
	},
})

export default defaultTheme
