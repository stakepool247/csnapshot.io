import React from 'react'
import './Mainnet.css'
import MainnetRecords from "../../../public/mainnet.json"
fetch('data/mainnet.json')

const Mainnet = () => {
  return (
    <div>
  <div className='snapshot-container'>
        <div className="card-frame">   
    <h1>Mainnet Snapshot</h1>
   
<table>
  <tr>
    <th>Cardano Chain</th>
    <th>Mainnet</th>
  </tr>
  <tr>
    <td>Height</td>
    <td>{MainnetRecords.height}</td>
  </tr>
  <tr>
    <td>Hash</td>
    <td>{MainnetRecords.hash}</td>
  </tr>
  <tr>
    <td>slot</td>
    <td>{MainnetRecords.slot}</td>
  </tr>
  <tr>
    <td>Epoch</td>
    <td>{MainnetRecords.epoch}</td>
  </tr>
  <tr>
    <td>compresion format</td>
    <td>lz4</td>
  </tr>
  <tr>
    <td>DB Size (uncompressed)</td>
    <td>54 Gb</td>
  </tr>
  <tr>
    <td>Archive size:</td>
    <td>32 Gb</td>
  </tr>
  <tr>
    <td>Download link:</td>
    <td>direct download</td>
  </tr>
</table>

<h3>Quick way to download to your server and extract files: </h3>
<div class="highlight">
  <pre class="highlight">
    <code>curl -o -L https://cSnapshots.io/mainnet.tar.lz4 | lz4 -c -d - | tar -x -C /home/cardano/cnode/db/ </code>
</pre></div>

{/* <button  onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>Copy</button> */}

</div></div>
</div>

  )
}

export default Mainnet