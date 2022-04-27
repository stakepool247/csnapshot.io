import React from 'react';
import SnapshotTable from '../../components/SnapshotTable';
import './Snapshot.css';

const Snapshot = ({ chain }) => {
	return (
		<div className='snapshot-container'>
			<div className='card-frame'>
				<h1>
					The Cardano <span className='capitalise'>{chain}</span> Blockchain DB
				</h1>
				<SnapshotTable chain={chain} />
			</div>
		</div>
	);
};

export default Snapshot;
