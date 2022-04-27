import React, { useState, useEffect } from 'react';
import './SnapshotTable.css';
// import '../page/mainnet/Mainnet.css';

function getChainExplorerUrl(chain) {
	if (chain === 'testnet') {
		return 'https://testnet.adaex.org/block/';
	} else {
		return 'https://adapools.org/blocks/';
	}
}

function SnapshotTable({ chain }) {
	const [jsonItems, setJsonItems] = useState([]);
	const [jsonError, setJsonError] = useState(false);

	useEffect(() => {
		fetch('https://data.csnapshots.io/' + chain + '-db-snapshot.json')
			.then((response) => response.json())
			.then((json) => setJsonItems(json))
			.catch((err) => setJsonError(true));
	}, [chain]);

	return (
		<div>
			{jsonError && <div className='error'>Error, can't load Json data!</div>}
			{jsonItems.map((jsonDataPoint) => {
				return (
					<div>
						<table>
							<tbody>
								<tr>
									<th>Cardano Chain</th>
									<th className='capitalise'>{chain}</th>
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
												getChainExplorerUrl(chain) + jsonDataPoint.block_hash
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
													'https://download.csnapshots.io/' +
													chain +
													'/' +
													jsonDataPoint.file_name
												}
												className='jsonLink'
												target='_blank'
											>
												{'https://download.csnapshots.io/' +
													chain +
													'/' +
													jsonDataPoint.file_name}
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
									{'curl -s https://download.csnapshots.io/' +
										chain +
										'/' +
										chain +
										'-db-' +
										jsonDataPoint.slot +
										'.tar.lz4'}
									| lz4 -c -d - | tar -x -C /home/cardano/cnode/db/{' '}
								</code>
							</pre>
						</div>

						<pre>
							<code>
								{' '}
								{'curl -s https://download.csnapshots.io/' +
									chain +
									'/' +
									chain +
									'-db-' +
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
