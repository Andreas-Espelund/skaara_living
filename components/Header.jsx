import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <div className='absolute top-0 w-full z-50  text-white p-4 lg:p-10 flex justify-between items-center text-xl bg-gradient-to-b from-zinc-900/80 to-transparent'>
      <Link className='playfair text-xl md:text-3xl lg:text-4xl tracking-widest' href="/">SKAARA LIVING</Link>
      <nav className='flex gap-10 text-center items-center font-semibold'>
          <a className='hidden md:block hover:scale-110 playfair transition-all outline-primary' href="#contact">CONTACT</a>
          <a className='hidden md:block hover:scale-110 playfair transition-all outline-primary' href="#location">LOCATION</a>
          <a className='hidden md:block hover:scale-110 playfair transition-all outline-primary' href="https://shop.skaaraliving.com/" target="_blank" rel="noreferrer">GIFTCARD</a>
          <Link className=' hover:scale-110 text-sm md:text-md lg:text-lg transition-all box-border outline-none bg-primary rounded-full text-black px-8 py-3 ' href="/cabins">Book now</Link>
      </nav>
    </div>

  )
}

export default Header