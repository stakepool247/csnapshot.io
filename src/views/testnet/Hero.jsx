import TableHero from '../../components/common/TableHero';

export default function Hero() {
	return (
		<TableHero
			url='https://downloads.csnapshots.io/snapshots/testnet/testnet-db-snapshot.json'
			cardanoChain='Testnet'
		/>
	);
}
