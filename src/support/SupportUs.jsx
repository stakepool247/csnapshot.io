import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
}));

const SupportComponent = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Typography variant='h4' align='center'>
				Need Support? Contact Us!
			</Typography>
			{/* Add any additional content or contact information here */}
		</Box>
	);
};

export default SupportComponent;
