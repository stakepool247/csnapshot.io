import TableHero from '../../components/common/TableHero';

export default function Hero() {
	return (
		<TableHero
			url='https://data.csnapshots.io/mainnet-db-snapshot.json'
			cardanoChain='Mainnet'
		/>
	);
}
