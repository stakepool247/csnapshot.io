import './Mainnet.css'
import JsonTable from '../../components/JsonTable'
const Mainnet = () => {
  return (
    <div>
      

  <div className='snapshot-container'>
        <div className="card-frame">   
        <JsonTable />
<h3>Quick way to download to your server and extract files: </h3>
<div className="highlight">
  <pre className="highlight">
    <code>curl -o -L https://cSnapshots.io/mainnet.tar.lz4 | lz4 -c -d - | tar -x -C /home/cardano/cnode/db/ </code>
</pre></div>

{/* <button  onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>Copy</button> */}

</div></div>
</div>

  )
}

export default Mainnet