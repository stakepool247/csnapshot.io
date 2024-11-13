import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Terminal from '../../components/common/Terminal';
import { Alert, AlertTitle } from '@mui/material';
import { terminalContainer } from '../../components/common/styles';

export default function QuickDownload() {
	return (
		<Box component='section' sx={{ mt: 5 }}>
								<Box sx={terminalContainer} marginBottom={3}>
					<Alert severity='success' marginBottom={3} marginTop={1} sx ={{bgcolor: 'primary.main', color: 'white'}}>
						<AlertTitle>Warning</AlertTitle>
						We have updated the compression method to use <strong>Zstandard (zstd)</strong>, which reduces the download size by half! Please double-check to make sure you are not using the old command with <strong>lz4</strong>.
						</Alert>
				</Box>
			<Box component='section' sx={{ mt: 5 }}>
				<Typography variant='h3' marginBottom={3}>
					Quick way to download snapshot to your server and extract files
				</Typography>
				<Typography variant='h4' marginBottom={3} marginTop={2}>
					1. Set the environment variable for the target directory or change the path to your desired location:
				</Typography>
				<Terminal
					sx={{ mt: 2 }}
					cmd='export TARGET_DIR=/home/cardano/cnode'
				/>
				<Typography variant='h4' marginBottom={3} marginTop={2}>
					2. Update / install required tools (jq, zstd and wget):
				</Typography>
				<Terminal
					sx={{ mt: 2 }}
					cmd='sudo apt update && sudo apt install zstd jq wget -y'
				/>
				
<Typography variant='h4' marginBottom={3} marginTop={2}>
					3. Remove the old files and create target folder:):
				</Typography>
				<Box sx={terminalContainer} marginBottom={3}>
					<Alert severity='warning' marginBottom={3} marginTop={1}>
						<AlertTitle>Warning</AlertTitle>
						This will clean the db folder in the target directory specified by $TARGET_DIR
					</Alert>
				</Box>
				<Terminal
					sx={{ mt: 2 }}
					cmd='rm -rf $TARGET_DIR/db/* && mkdir -p $TARGET_DIR/db'
				/>

				<Typography variant='h4' marginBottom={3} marginTop={2}>
					4. Download and extract the files:
				</Typography>

				<Terminal
					cmd='wget -c -O - "https://downloads.csnapshots.io/mainnet/$(wget -qO- https://downloads.csnapshots.io/mainnet/mainnet-db-snapshot.json | jq -r .[].file_name)" | zstd -d -c | tar -x -C $TARGET_DIR/'
				/>
			</Box>
			<Box sx={terminalContainer} marginTop={4}>
				<Alert severity='info' marginBottom={3} marginTop={1}>
					<AlertTitle>Info</AlertTitle>
					Here is info on how to download "manually" the snapshot:{' '}
					<a href='https://cSnapshots.io/about#Manual_download' target='_blank' rel='noopener noreferrer'>
						https://cSnapshots.io/about#Manual_download
					</a>
				</Alert>
			</Box>
		</Box>
	);
}
