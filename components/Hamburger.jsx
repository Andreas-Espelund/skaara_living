'use client'
import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
export default function Hamburger() {


    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(e => !e)   
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className='relative h-10 w-10'>
            <AnimatePresence>
                {open &&
                <motion.div 
                initial={{y:'-100vh'}}
                animate={{y:0}}
                exit={{y:'-100vh'}}
                transition={{duration:0.5}}
                className='fixed top-0 left-0 w-full p-2'>
                    <nav className='grid p-4 grid-cols-1 gap-10 text-xl text-center font-semibold bg-zinc-900/80 backdrop-blur rounded-3xl shadow-2xl'>
                        <Link onClick={handleClose} className='hover:scale-110 hover:text-primary transition-all p-4' href="/">Home</Link>
                        <Link onClick={handleClose} className='hover:scale-110 hover:text-primary transition-all p-4' href="/about">About</Link>
                        <Link onClick={handleClose} className='hover:scale-110 hover:text-primary transition-all p-4' href="/contact">Contact</Link>
                    </nav>
                </motion.div>
                }
            </AnimatePresence>

            <button className='fixed w-10 h-10 overflow-hidden' onClick={handleClick}>
                <AnimatePresence>
                    {!open &&
                    <motion.svg
                        initial={{rotate:-90, opacity:0}}
                        animate={{rotate:0, opacity:1}}
                        transition={{duration:0.2}}
                        
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </motion.svg>
                    }
                </AnimatePresence>
                <AnimatePresence>
                    {open &&
                    <motion.svg
                        initial={{rotate:-90, opacity:0}}
                        animate={{rotate:0, opacity:1}}
                        transition={{duration:0.5}}
                        
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </motion.svg>
                    }
                </AnimatePresence>
            </button>
            
    </div>
    )
}
