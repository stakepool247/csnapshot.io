import React from 'react';
import SnapshotTable from '../../components/SnapshotTable';

const Testnet = () => {
	return (
		<div className='snapshot-container'>
			<div className='card-frame'>
				<h1>The Cardano Testnet Blockchain DB</h1>
				<SnapshotTable chain='testnet' />
			</div>
		</div>
	);
};

export default Testnet;
