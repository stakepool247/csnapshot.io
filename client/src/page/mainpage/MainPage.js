import React from 'react'
import './MainPage.css'

import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  let Navigate = useNavigate();
  return (
    <div className='container'>
      <div className='snapshot-container'>Download latest cardano-node snapshot DB files, so you can get your node up and running faster! We are updating snapshots daily!</div>
        <div className='snapshot-container'>
{/* First Card */}
        <div className="card-frame">   
    <div className="card-title-container">
    <p className="card-title"><span className='mainnet'>Mainnet </span>Snapshot</p>
      <p className="cardano-network-magic">networkMagic: 1097911063</p>
    </div>
    <div className="card-description-box">
      <p className="card-description">Cardano Full Blockchain Snapshot for the Mainnet</p>
    </div>
    <div className="line-1" />
    <div className="card-button-container">
      <button className="primary-button" onClick={() => {Navigate("/mainnet")}}>Download</button>
      <button className="secondary-button">Read More</button>
    </div>
    </div>
{/* Second Card */}
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
      <button className="primary-button" onClick={() => {Navigate("/testnet")}}>Download</button>
      <button className="secondary-button">Read More</button>
    </div>
  </div>
         </div>
  </div> 
        )
      }
      

export default MainPage
      