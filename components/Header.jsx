import Hamburger from './Hamburger'
import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='absolute top-0 w-full  text-white p-4 lg:p-10 flex justify-between items-center text-xl bg-gradient-to-b from-zinc-900/80 to-transparent'>
      <p className='font-bold text-2xl'>Skaara Living</p>
      <nav className='hidden lg:grid grid-cols-4 gap-4 text-center items-center font-semibold'>
          <Link className='hover:scale-110 transition-all outline-yellow-300' href="/">Home</Link>
          <Link className='hover:scale-110 transition-all outline-yellow-300' href="/about">About</Link>
          <Link className='hover:scale-110 transition-all outline-yellow-300' href="/contact">Contact</Link>
          <Link className='hover:scale-110 transition-all outline-yellow-300 bg-yellow-300 rounded-full text-black px-8 py-3' href="https://www.airbnb.no/" target="_blank">Book now</Link>
          
      </nav>
      <div className='lg:hidden'>
        <Hamburger/>
      </div>
    </div>

  )
}

export default Header