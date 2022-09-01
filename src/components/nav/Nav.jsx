import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href=".container" className={activeNav === '#' ? 'active' : ''}><GoHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} ><FiUser/></a>
      <a href="#experience" onClick={alert()}><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
