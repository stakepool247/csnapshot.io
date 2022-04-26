import React, { useState, useEffect } from 'react';

function SnapshotTable() {
	const [jsonItems, setJsonItems] = useState([]);

	useEffect(() => {
		fetch('https://download.csnapshots.io/mainnet/mainnet-db-snapshot.json')
			.then((response) => response.json())
			.then((json) => setJsonItems(json));
		console.log('useEffect trigger');
	}, []);

	return (
		<div className='App'>
			{jsonItems.map((jsonDataPoint) => {
				return (
					<div>
						<table>
							<tbody>
								<tr>
									<th>Cardano Chain</th>
									<th>Mainnet</th>
								</tr>

								<tr>
									<td>Date created</td>
									<td>{jsonDataPoint.db_date}</td>
								</tr>

								<tr>
									<td>Height</td>
									<td>{jsonDataPoint.height}</td>
								</tr>

								<tr>
									<td>slot</td>
									<td>{jsonDataPoint.slot}</td>
								</tr>
								<tr>
									<td>Hash</td>
									<td>
										<a
											rel='noreferrer'
											href={
												'https://adapools.org/blocks/' +
												jsonDataPoint.block_hash
											}
											className='jsonLink'
											target='_blank'
										>
											{jsonDataPoint.block_hash}
										</a>
									</td>
								</tr>
								<tr>
									<td>Epoch</td>
									<td>{jsonDataPoint.epoch}</td>
								</tr>
								<tr>
									<td>compresion format</td>
									<td>lz4</td>
								</tr>
								<tr>
									<td>DB Size (uncompressed)</td>
									<td> {jsonDataPoint.db_size}</td>
								</tr>
								<tr>
									<td>Download size:</td>
									<td>{jsonDataPoint.download_size}</td>
								</tr>
								<tr>
									<td>Download link:</td>
									<td>
										<div>
											<a
												rel='noreferrer'
												href={
													'https://download.csnapshots.io/mainnet/mainnet-db-' +
													jsonDataPoint.slot +
													'.tar.lz4'
												}
												className='jsonLink'
												target='_blank'
											>
												{'https://download.csnapshots.io/mainnet/mainnet-db-' +
													jsonDataPoint.slot +
													'.tar.lz4'}
											</a>
										</div>
										<div className='checkSum'>
											checksum: {jsonDataPoint.checksum}
										</div>
									</td>
								</tr>
							</tbody>
						</table>

						<h2>Quick way to download to your server and extract files: </h2>
						<div className='highlight'>
							<pre className='highlight'>
								<code>
									{'curl -s https://download.csnapshots.io/mainnet/mainnet-db-' +
										jsonDataPoint.slot +
										'.tar.lz4'}
									| lz4 -c -d - | tar -x -C /home/cardano/cnode/db/{' '}
								</code>
							</pre>
						</div>

						<pre>
							<code>
								{' '}
								{'curl -s https://download.csnapshots.io/mainnet/mainnet-db-' +
									jsonDataPoint.slot +
									'.tar.lz4'}{' '}
								| lz4 -c -d - | tar -x -C .
							</code>
						</pre>

						<h2>To install lz4:</h2>
						<pre className='highlight'>
							<code>sudo apt update && sudo apt install liblz4-tool</code>
						</pre>
					</div>
				);
			})}
		</div>
	);
}

export default SnapshotTable;
