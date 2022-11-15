/* eslint-disable no-template-curly-in-string */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import Terminal from '../../components/common/Terminal';
import Code from '../../components/common/Code';

export default function Main() {
	return (
		<Box component='section'>
			<Box sx={{ mb: 8 }} className='bookmarkOffset' id='what_it_this'>
				<Stack
					direction='row'
					spacing={2}
					sx={{ mb: 2, alignItems: 'flex-end' }}
				>
					<Typography variant='body2' sx={{ transform: 'translateY(-5px)' }}>
						01
					</Typography>
					<a href='#what_it_this'>
						<Typography variant='h3'>What is cSnapshot.io?</Typography>
					</a>
				</Stack>
				<Typography
					sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.75) }}
				>
					cSnapshots is a Cardano proof-of-stake blockchain snaphsot download
					service which helps Cardano Stake Pool Operators (SPO) to synchronize
					nodes.
					<br />
					<br />
					This project powered by Stakepool247.io
				</Typography>
			</Box>
			<Box sx={{ mb: 8 }} className='bookmarkOffset' id='How_to_use'>
				<Stack
					direction='row'
					spacing={2}
					sx={{ mb: 2, alignItems: 'flex-end' }}
				>
					<Typography variant='body2' sx={{ transform: 'translateY(-5px)' }}>
						02
					</Typography>
					<a href='#How_to_use'>
						<Typography variant='h3'>How to use</Typography>
					</a>
				</Stack>
				<Typography
					sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.75) }}
					component='div'
				>
					When starting the cardano-node for the first time, you will have to
					wait for the blockchain to sync. It can take hours or even some days
					(depending on your server CPU/Network speed). To avoid that, you can
					download fully synced database and jumpstart your node significantly
					faster. cSnapshots provides pre-synced Cardano Mainnet and Testnet
					blockchain database which are updated daily.
					<br />
					<br />
					In order to fully automate your recovery mechanism, you can use the
					commandline bellow.
					<br />
					<br />
					In the instructions below, we assume that the user is{' '}
					<Code text='cardano' /> and the DB directory is{' '}
					<Code text='/home/cardano/cnode/db' />.
					<Box sx={{ mt: 5, mb: 2 }}>
						<Typography marginBottom={2}>
							To download a recent snapshot of the database use in your server's
							terminal one of the following commands: <br />
							<Typography variant='h5' paddingTop={3}>
								For Mainnet:
							</Typography>
							<Code
								text='curl https://downloads.csnapshots.io/snapshots/mainnet/$(curl -s https://downloads.csnapshots.io/snapshots/mainnet/mainnet-db-snapshot.json | jq -r .[].file_name )  --output
							mainnet-snapshot.tar.lz4'
							/>
							<br />
							<Typography variant='h5' paddingTop={3}>
								For Testnet:
							</Typography>
							<Code
								text='curl https://downloads.csnapshots.io/snapshots/testnet/$(curl -s https://downloads.csnapshots.io/snapshots/testnet/testnet-db-snapshot.json | jq -r .[].file_name )  --output
							testnet-snapshot.tar.lz4'
							/>
							<br />
							<br />
							<Typography variant='h4' paddingTop={5}>
								The quick way to download and extract files to{' '}
								<Code text='/home/cardano/cnode/db' />
								.:
							</Typography>
						</Typography>
						<Typography variant='h5'>For Mainnet:</Typography>
						<Terminal cmd='curl -o - https://downloads.csnapshots.io/snapshots/mainnet/$(curl -s https://downloads.csnapshots.io/snapshots/mainnet/mainnet-db-snapshot.json | jq -r .[].file_name ) | lz4 -c -d - | tar -x -C /home/cardano/cnode/' />
						<Typography variant='h5' paddingTop={4}>
							For Testnet:
						</Typography>
						<Terminal cmd='curl -o - https://downloads.csnapshots.io/snapshots/testnet/$(curl -s https://downloads.csnapshots.io/snapshots/testnet/testnet-db-snapshot.json | jq -r .[].file_name ) | lz4 -c -d - | tar -x -C /home/cardano/cnode/' />
					</Box>
				</Typography>
			</Box>
			<Box sx={{ mb: 8 }} className='bookmarkOffset' id='Manual_download'>
				<Stack
					direction='row'
					spacing={2}
					sx={{ mb: 2, alignItems: 'flex-end' }}
				>
					<Typography variant='body2' sx={{ transform: 'translateY(-5px)' }}>
						03
					</Typography>
					<a href='#How_does_it_work'>
						<Typography variant='h3'>Manual Download</Typography>
					</a>
				</Stack>
				<Typography variant='h5' paddingTop={3}>
					For Mainnet:
				</Typography>
				<Typography marginLeft={2} marginTop={2}>
					{' '}
					1. Setting Database folder:
				</Typography>
				<Terminal cmd='export CARDANO_BASE="/home/cardano/cnode/"' />
				<Typography marginLeft={2} marginTop={2}>
					2. Downloading Database:
				</Typography>
				<Terminal cmd='curl https://downloads.csnapshots.io/snapshots/mainnet/$(curl -s https://downloads.csnapshots.io/snapshots/mainnet/mainnet-db-snapshot.json | jq -r .[].file_name )  --output mainnet-snapshot.tar.lz4' />
				<Typography marginLeft={2} marginTop={2}>
					3. Extracting Database:
				</Typography>
				<Terminal cmd='lz4 -dvc --no-sparse mainnet-snapshot.tar.lz4 | tar x -C ${CARDANO_BASE}' />
				<Typography variant='h5' paddingTop={3}>
					For Testnet:
				</Typography>
				<Typography marginLeft={2} marginTop={2}>
					{' '}
					1. Setting Database folder:
				</Typography>
				<Terminal cmd='export CARDANO_BASE="/home/cardano/cnode/"' />
				<Typography marginLeft={2} marginTop={2}>
					2. Downloading Database:
				</Typography>
				<Terminal cmd='curl https://downloads.csnapshots.io/snapshots/testnet/$(curl -s https://downloads.csnapshots.io/snapshots/testnet/testnet-db-snapshot.json | jq -r .[].file_name )  --output testnet-snapshot.tar.lz4' />
				<Typography marginLeft={2} marginTop={2}>
					3. Extracting Database:
				</Typography>
				<Terminal cmd='lz4 -dvc --no-sparse testnet-snapshot.tar.lz4 | tar x -C ${CARDANO_BASE}' />
			</Box>
			<Box sx={{ mb: 8 }} className='bookmarkOffset' id='How_does_it_work'>
				<Stack
					direction='row'
					spacing={2}
					sx={{ mb: 2, alignItems: 'flex-end' }}
				>
					<Typography variant='body2' sx={{ transform: 'translateY(-5px)' }}>
						04
					</Typography>
					<a href='#How_does_it_work'>
						<Typography variant='h3'>How does it work</Typography>
					</a>
				</Stack>
				<Typography
					sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.75) }}
					component='div'
				>
					<Typography sx={{ mb: 2 }}>
						Every day we are generating new snapshots and uploading to CDN
						service which redistributes the database to servers around the world
						for faster download speeds
					</Typography>
				</Typography>
			</Box>
			<Box
				sx={{ mb: 8 }}
				className='bookmarkOffset'
				id='Brought_to_you_by_StakePool247'
			>
				<Stack
					direction='row'
					spacing={2}
					sx={{ mb: 2, alignItems: 'flex-end' }}
				>
					<Typography variant='body2' sx={{ transform: 'translateY(-5px)' }}>
						05
					</Typography>
					<a href='#Brought_to_you_by_StakePool247'>
						<Typography variant='h3'>
							Brought to you by StakePool247.io
						</Typography>
					</a>
				</Stack>
				<Typography
					sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.75) }}
					component='div'
				>
					<Typography sx={{ mb: 2 }}>
						We are a blockchain infrastructure company. <br />
						We maintain a suite of open-source software projects to deploy
						secure bakers and nodes.
					</Typography>
					<Typography component='div'>
						Contact us if you need help with:
						<ul style={{ margin: 0 }}>
							<li>becoming a validator</li>
							<li>deploying a cSnapshots parachain in the cloud</li>
							<li>generating snapshots for your parachain</li>
						</ul>
					</Typography>
				</Typography>
			</Box>
			<Box className='bookmarkOffset' id='Disclaimers'>
				<Stack
					direction='row'
					spacing={2}
					sx={{ mb: 2, alignItems: 'flex-end' }}
				>
					<Typography variant='body2' sx={{ transform: 'translateY(-5px)' }}>
						05
					</Typography>
					<a href='#Disclaimers'>
						<Typography variant='h3'>Disclaimers</Typography>
					</a>
				</Stack>
				<Typography
					sx={{ color: (theme) => alpha(theme.palette.text.primary, 0.75) }}
					component='div'
				>
					<Typography sx={{ mb: 2 }}>
						Users are solely responsible for any risks associated with usage of
						the cSnapshots tool. All users should do their own research to
						determine if cSnapshots is the right tool for their needs.
					</Typography>
					<Typography>
						Unless required by applicable law or agreed to in writing,
						cSnapshots provides a service on an “AS IS” BASIS, WITHOUT
						WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied,
						including, without limitation, any warranties or conditions of
						TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
						PARTICULAR PURPOSE. You are solely responsible for determining the
						appropriateness of using our services.
					</Typography>
				</Typography>
			</Box>
		</Box>
	);
}
