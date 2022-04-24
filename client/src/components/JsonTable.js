import React from 'react';
import axios from 'axios';


export default class JsonTable extends React.Component {
  state = {
    jsonData: []
  }

  componentDidMount() {
    axios.get(`https://download.csnapshots.io/mainnet/mainnet-db-snapshot.json`)
      .then(res => {
        const jsonData = res.data;
        this.setState({ jsonData });  
      })
  }
                
  // <li key={jsonDataPoint.height}>{jsonDataPoint.epoch}</li>
  render() {
    return (
      <div>
      <ul>
        {
          this.state.jsonData
            .map(jsonDataPoint =>
              
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
                  <td>
                    {jsonDataPoint.height}
                    </td>
                </tr>

                <tr>
                  <td>slot</td>
                  <td>
                  {jsonDataPoint.slot}
                  </td>
                </tr>
                <tr>
                  <td>Hash</td>
                  <td>
                    <a rel="noreferrer" href={'https://adapools.org/blocks/' + jsonDataPoint.block_hash} className="jsonLink" target="_blank">{jsonDataPoint.block_hash}</a>
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
                  <td><a rel="noreferrer" href={'https://download.csnapshots.io/mainnet/mainnet-db-' + jsonDataPoint.slot + '.tar.lz4'} className="jsonLink" target="_blank">
                    {'https://download.csnapshots.io/mainnet/mainnet-db-' + jsonDataPoint.slot + '.tar.lz4'}
                    </a></td>
                </tr>
                </tbody>
              </table>              
            )
        }
      </ul>
    
   
  
    
        </div>
    )
  }
}