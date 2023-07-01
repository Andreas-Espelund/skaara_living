import Hamburger from './Hamburger'
import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='absolute top-0 w-full z-50  text-white p-4 lg:p-10 flex justify-between items-center text-xl bg-gradient-to-b from-zinc-900/80 to-transparent'>
      <Link className='playfair text-xl md:text-3xl lg:text-4xl tracking-widest' href="/">SKAARA LIVING</Link>
      <nav className='hidden lg:flex gap-10 text-center items-center font-semibold'>
          <Link className='hidden hover:scale-110 playfair transition-all outline-primary' href="/">HOME</Link>
          <Link className='hidden hover:scale-110 playfair transition-all outline-primary' href="/about">ABOUT</Link>
          <a className='hover:scale-110 playfair transition-all outline-primary' href="#contact">CONTACT</a>
          <a className='hover:scale-110 playfair transition-all outline-primary' href="#location">LOCATION</a>
          <Link className=' hover:scale-110 transition-all box-border outline-none bg-primary rounded-full text-black px-8 py-3 ' href="https://airbnb.no/h/skaaraliving" target="_blank">Book now</Link>
      </nav>
      <div className='lg:hidden'>
        <div className='hidden'>
          <Hamburger/>
        </div>
        <Link className=' hover:scale-110 transition-all box-border outline-none bg-primary rounded-full text-black px-8 py-3 text-sm font-semibold lg:text-lg ' href="https://airbnb.no/h/skaaraliving" target="_blank">Book now</Link>
      </div>
    </div>

  )
}

export default Header