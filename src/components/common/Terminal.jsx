import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircle from '@mui/icons-material/CheckCircleOutline';
import { alpha } from '@mui/material/styles';
import { copyButton, terminalContainer } from './styles';
import { useState } from 'react';

export default function Terminal({ cmd, subcmd, sx, ...rest }) {
	const [copy, setCopy] = useState(false);

	const copyData = () => {
		navigator.clipboard.writeText(cmd);
		setCopy(true);
		setTimeout(setCopy, 3000, false);
	};

	return (
		<Box>
			<Box {...rest} sx={{ ...terminalContainer, ...sx }}>
				<Box className='terminalCode'>
					<Stack direction='row' spacing={1.25}>
						<Typography color='#4B5A6D' variant='firacode1'>
							1
						</Typography>
						<Typography
							sx={{ whiteSpace: 'pre' }}
							variant='firacode1'
							color='text.primary'
						>
							{cmd}
						</Typography>
					</Stack>
				</Box>
				<IconButton sx={{ ...copyButton }} onClick={copyData}>
					{copy ? (
						<CheckCircle sx={{ width: 18, height: 18 }} />
					) : (
						<CopyIcon sx={{ width: 18, height: 18 }} />
					)}
				</IconButton>
			</Box>
			{subcmd && (
				<Typography
					marginTop={3}
					component='p'
					variant='firacode2'
					sx={{
						color: (theme) => alpha(theme.palette.text.primary, 0.75),
						wordBreak: 'break-all',
					}}
				>
					{subcmd}
				</Typography>
			)}
		</Box>
	);
}
