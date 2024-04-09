"use client"
import React, { useState } from 'react'
import logo from '@/assets/logo.png'
import { IoIosBody } from 'react-icons/io'
import './Navbar.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthPopup from '../AuthPopup/AuthPopup'

const Navbar = () => {
  const [isloggedin, setIsloggedin] = useState<boolean>(false)
  const[showpopup, setShowpopup] = useState<boolean>(false)
  return (
    <nav>
      <Image src={logo} alt='logo'/>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/profile'}><IoIosBody/></Link>
      {
        isloggedin ? 
        <button>Logout</button>
        :
        <button onClick={()=>{
          setShowpopup(true)
        }}>Login</button>
      }
      {
      showpopup && <AuthPopup/>
      }
    </nav>
  )
}

export default Navbar
