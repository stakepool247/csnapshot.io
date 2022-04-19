import React from 'react'

import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa';
import PoweredByStakepool247 from '../../asstets/powered-by-stakepool247.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            
            {/* <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div> */}

            <div className='sp247-conteiner'>
                    <img src={PoweredByStakepool247} alt="Powered by StakePool247.io" />
                <div className='sp247-info'>
                    Check out our StakePool247.io managed Cardano Stake Pool service: safe, affordable stake pool management.
                </div>
           </div>
        </div>
    )
}

export default Footer