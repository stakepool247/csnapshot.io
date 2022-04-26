import './Mainnet.css';
// import JsonTable from '../../components/JsonTable'
import SnapshotTable from '../../components/SnapshotTable';
const Mainnet = () => {
	return (
		<div className='snapshot-container'>
			<div className='card-frame'>
				<SnapshotTable />
			</div>
		</div>
	);
};

export default Mainnet;
