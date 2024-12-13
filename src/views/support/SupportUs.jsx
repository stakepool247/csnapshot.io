import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Terminal from '../../components/common/Terminal';
import { Alert, AlertTitle } from '@mui/material';
import { terminalContainer } from '../../components/common/styles';

export default function SupportUs() {
	return (
		<Box component='section' sx={{ mt: 5 }}>
			<Typography variant='h3' marginBottom={3}>
				Quick way to download snapshot to your server and extract files
			</Typography>
			<Typography variant='h4' marginBottom={3} marginTop={2}>
				1. Update / install curl, jq and lz4 tool:
			</Typography>
			<Terminal
				sx={{ mt: 2 }}
				cmd='sudo apt update &amp;&amp; sudo apt install liblz4-tool jq curl'
			/>
			<Typography variant='h4' marginBottom={3} marginTop={2}>
				2. Download and extract the files:
			</Typography>
			<Box sx={terminalContainer} marginBottom={3}>
				<Alert severity='warning' marginBottom={3} marginTop={1}>
					<AlertTitle>Warning</AlertTitle>
					This will add/replace the data in /home/cardano/cnode/db directory
				</Alert>
			</Box>
			<Terminal
				cmd='curl -o - https://downloads.csnapshots.io/mainnet/$(curl -s https://downloads.csnapshots.io/mainnet/mainnet-db-snapshot.json| jq -r .[].file_name ) | lz4 -c -d - | tar -x -C /home/cardano/cnode/'
				// subcmd='This will add/replace the data in /home/cardano/cnode/db directory'
			/>
			<Box sx={terminalContainer} marginTop={4}>
				<Alert severity='info' marginBottom={3} marginTop={1}>
					<AlertTitle>Info</AlertTitle>
					Here is info how to download "manualy" the snapshot:{' '}
					<a href='https://cSnapshots.io/about#Manual_download'>
						https://cSnapshots.io/about#Manual_download
					</a>
				</Alert>
			</Box>
		</Box>
	);
}
