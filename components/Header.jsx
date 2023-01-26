import Hamburger from './Hamburger'
import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='absolute top-0 w-full z-50  text-white p-4 lg:p-10 flex justify-between items-center text-xl bg-gradient-to-b from-zinc-900/80 to-transparent'>
      <p className='playfair font-medium  text-3xl tracking-widest'>SKAARA LIVING</p>
      <nav className='hidden lg:flex gap-10 text-center items-center font-semibold'>
          <Link className='hover:scale-110 playfair transition-all outline-yellow-300' href="/">HOME</Link>
          <Link className='hover:scale-110 playfair transition-all outline-yellow-300' href="/about">ABOUT</Link>
          <Link className='hover:scale-110 playfair transition-all outline-yellow-300' href="/contact">CONTACT</Link>
          <Link className='hover:scale-110 transition-all box-border outline-yellow-300 bg-yellow-300 rounded-full text-black px-8 py-3' href="https://www.airbnb.no/" target="_blank">Book now</Link>
      </nav>
      <div className='lg:hidden'>
        <Hamburger/>
      </div>
    </div>

  )
}

export default Header