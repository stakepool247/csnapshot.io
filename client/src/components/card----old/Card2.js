import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <div>
    <div className="card-frame">   
    <div className="card-title-container">
      <p className="card-title"><span className='testnet'>Testnet </span>Snapshot</p>
      <p className="cardano-network-magic">networkMagic: 1097911063</p>
    </div>
    <div className="card-description-box">
      <p className="card-description">Cardano Full Blockchain Snapshot for the Testnet</p>
    </div>
    <div className="line-1" />
    <div className="card-button-container">
      <button className="primary-button">Download</button>
      <button className="secondary-button">Read More</button>
    </div>
  </div>

    </div>
  )
}

export default Card