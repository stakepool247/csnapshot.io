import './Mainnet.css';
import SnapshotTable from '../../components/SnapshotTable';
const Mainnet = () => {
	return (
		<div className='snapshot-container'>
			<div className='card-frame'>
				<h1>The Cardano Mainnet Blockchain DB</h1>
				<SnapshotTable chain='mainnet' />
			</div>
		</div>
	);
};

export default Mainnet;
