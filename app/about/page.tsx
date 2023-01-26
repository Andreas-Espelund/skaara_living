'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import background from '../../public/view.jpg'
function About() {
  return (
    <div className='h-[101vh] flex-1 relative'>
      <Image src={background} alt="" fill className='object-cover'/>

      <div className='absolute grid place-content-center w-full h-full'>
      <div className="font-black text-[4rem] lg:text-[22rem]  drop-shadow-xl text-white/60">
          ABOUT
        </div>
      </div>
    </div>
  )
}

export default About