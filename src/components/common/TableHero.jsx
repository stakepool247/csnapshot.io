import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import { table } from './styles';
import HeroLayout from './HeroLayout';
import useFetch from 'react-fetch-hook';
import { generatorSkeleton } from './utilities';

export default function TableHero({ url, cardanoChain }) {
	const { isLoading, data } = useFetch(url);

	let tableDatam = generatorSkeleton();

	if (!isLoading) {
		const result = data[0];
		tableDatam = [
			[
				{
					id: 394938,
					icon: '/images/driver1.svg',
					text: 'Node Version',
				},
				{
					id: 409304,
					text: result?.node_version,
				},
				{
					id: 435894,
					icon: '/images/clock.svg',
					text: 'Epoch',
				},
				{
					id: 3478783,
					text: result?.epoch,
				},
			],
			[
				{
					id: 394938,
					icon: '/images/calendar.svg',
					text: 'Date created',
				},
				{
					id: 409304,
					text: result?.db_date,
				},
				{
					id: 435894,
					icon: '/images/document.svg',
					text: 'Compression format',
				},
				{
					id: 3478783,
					text: 'lz4',
				},
			],
			[
				{
					id: 394938,
					icon: '/images/frame.svg',
					text: 'Height',
				},
				{
					id: 409304,
					text: result?.height,
				},
				{
					id: 435894,
					icon: '/images/box-2.svg',
					text: 'DB Size (uncompressed)',
				},
				{
					id: 3478783,
					text: result?.db_size,
				},
			],
			[
				{
					id: 394938,
					icon: '/images/maximize-2.svg',
					text: 'Slot',
				},
				{
					id: 409304,
					text: result?.slot,
				},
				{
					id: 435894,
					icon: '/images/receive-square.svg',
					text: 'Download size:',
				},
				{
					id: 3478783,
					text: result?.download_size,
				},
			],
			[
				{
					id: 394938,
					icon: '/images/key.svg',
					text: 'Hash',
				},
				{
					id: 409304,
					text: (
						<>
							<Typography sx={{ bgcolor: 'success.light' }}>
								{result?.block_hash}
							</Typography>
						</>
					),
				},
				{
					id: 435894,
					icon: '/images/Frame1.svg',
					text: 'Download link:',
				},
				{
					id: 3478783,
					text: (
						<>
							<a
								href={
									'https://downloads.csnapshots.io/' +
									cardanoChain.toLowerCase() +
									'/' +
									result?.file_name
								}
							>
								<Typography
									component='span'
									color='secondary.main'
									sx={{
										'&:hover': {
											textDecoration: 'underline',
										},
									}}
									fontWeight='400'
								>
									{'https://downloads.csnapshots.io/' +
										cardanoChain.toLowerCase() +
										'/' +
										result?.file_name}
								</Typography>
							</a>
							<Typography
								marginTop={0.5}
								variant='body3'
								fontWeight='400'
								component='p'
								sx={{
									color: (theme) => alpha(theme.palette.text.primary, 0.75),
								}}
							>
								checksum: {result?.checksum}
							</Typography>
						</>
					),
				},
			],
		];
	}

	table['& td'].minWidth = `${1200 / tableDatam[0].length}px`;
	table['& td'].maxWidth = `${1200 / tableDatam[0].length}px`;
	table['& td'].width = `${1200 / tableDatam[0].length}px`;

	return (
		<Box component='section'>
			<HeroLayout
				sx={{
					minHeight: 300,
					pt: { xs: 5, md: 10 },
					pb: { xs: 2, md: 4 },
					px: { xs: 1, md: 2 },
				}}
			>
				<Typography variant='h4' marginBottom={3}>
					Cardano{' '}
					<Box
						component='span'
						sx={{ color: 'primary.main', fontWeight: 'bold' }}
					>
						{cardanoChain}
					</Box>{' '}
					full blockcain DB
				</Typography>
				<Box sx={{ overflowX: 'scroll' }}>
					<Box
						component='table'
						sx={{ ...table, minWidth: 1200, width: '100%' }}
					>
						<tbody>
							{tableDatam.map((columns) => (
								<tr key={Math.random()}>
									{columns.map(({ id, icon, text, skeleton }) => (
										<td key={id}>
											{skeleton ? (
												<Stack
													spacing={1.25}
													direction='row'
													sx={{ maxWidth: 300 }}
												>
													{icon && <div>{icon}</div>}
													{text}
												</Stack>
											) : (
												<Box>
													{icon && (
														<img width='16' height='16' src={icon} alt='text' />
													)}
													<Typography
														marginLeft={1.25}
														component='span'
														fontWeight='400'
														sx={{
															width: '100%',
															overflow: 'hidden',
															textOverflow: 'ellipsis',
															'& > *': {
																overflow: 'hidden',
																textOverflow: 'ellipsis',
																whiteSpace: 'nowrap',
															},
														}}
													>
														{text}
													</Typography>
												</Box>
											)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</Box>
				</Box>
			</HeroLayout>
		</Box>
	);
}
