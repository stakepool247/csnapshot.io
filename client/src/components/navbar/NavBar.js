import React, {useState} from 'react'

import './NavBar.css'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import {DiDatabase} from 'react-icons/di'
import {FaHdd} from 'react-icons/fa'
import { Link } from 'react-router-dom'

// import { icons } from 'react-icons'

const NavBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () =>setClick(!click)
  return (
    <div className='navbar'>
        <div className='container'>
            <h1><Link to="/"><span><FaHdd/> c</span>Snapshots.io</Link></h1>
            {/* <button className='btn'> Sign in</button> */}
            <ul className={click ? 'nav-menu active' :'nav-menu' }>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/mainnet">Mainnet</Link></li>
                <li><Link to="/testnet">Testnet</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
            <div className='hamburger' onClick={handleClick}><HiOutlineMenuAlt4/></div>
        </div>
    </div>
  )
}

export default NavBar