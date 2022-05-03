import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Terminal from '../../components/common/Terminal';

export default function QuickDownload() {
	return (
		<Box component='section' sx={{ mt: 5 }}>
			<Box component='section' sx={{ mt: 5 }}>
				<Typography variant='h3' marginBottom={3}>
					Quick way to download snapshot to your server and extract files
				</Typography>
				<Typography variant='h4' marginBottom={3} marginTop={2}>
					1. Update / install lz4 tool:
				</Typography>
				<Terminal
					sx={{ mt: 2 }}
					cmd='sudo apt update &amp;&amp; sudo apt install liblz4-tool'
				/>
				<Typography variant='h4' marginBottom={3} marginTop={2}>
					2. Download and uncompress files:
				</Typography>
				<Terminal
					cmd='curl -o - https://download.csnapshots.io/testnet/$(curl -s https://data.csnapshots.io/testnet-db-snapshot.json | jq -r .[].file_name ) | lz4 -c -d - | tar -x -C /home/cardano/cnode/'
					subcmd='This will add/replace the data in /home/cardano/cnode/db directory'
				/>
			</Box>
		</Box>
	);
}
