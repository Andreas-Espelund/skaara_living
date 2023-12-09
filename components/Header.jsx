'use client'
import React from 'react'
import Link from 'next/link'
import {Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem} from "@nextui-org/react";


function Header() {
  return (
    <div className=' absolute top-0 w-full z-50  text-white p-4 lg:p-10 flex justify-between items-center text-xl bg-gradient-to-b from-zinc-900/80 to-transparent'>
      <Link className='playfair text-xl md:text-3xl lg:text-4xl tracking-widest' href="/">SKAARA LIVING</Link>
      <div>
            <nav className='gap-10 text-center items-center font-semibold hidden     md:flex '>
              <a className='hover:scale-110 playfair transition-all outline-primary' href="#contact">CONTACT</a>
              <a className='hover:scale-110 playfair transition-all outline-primary' href="#location">LOCATION</a>
              <a className=' hover:scale-110 playfair transition-all outline-primary' href="https://shop.skaaraliving.com/" target="_blank" rel="noreferrer">GIFTCARD</a>
              <Link className=' hover:scale-110 text-sm md:text-md lg:text-lg transition-all box-border outline-none bg-primary rounded-full text-black px-8 py-3 ' href="/cabins">Book now</Link>
          </nav>
      </div>

        <div className={"md:hidden"}>
            <Dropdown className={"z-50 text-xl"}>
                <DropdownTrigger>
                    <Button isIconOnly color="none" variant={"shadow"} size={"lg"} radius={"full"} className={"font-medium"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    </Button>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem key="book">
                        <Link className={"text-xl"} href="/cabins">Book now</Link>
                    </DropdownItem>
                    <DropdownItem key="giftcard">
                        <a className={"text-xl"} href="https://shop.skaaraliving.com/" target="_blank" rel="noreferrer">Buy giftcard</a>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </div>


    </div>

  )
}

export default Header