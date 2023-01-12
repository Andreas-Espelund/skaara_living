'use client'
import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className='text-4xl h-[120vh] flex-1 grid place-content-center max-w-[100vw] overflow-hidden'>
      
      <motion.div
        initial={{x:-200}}
        animate={{
          rotate:[0, 90, 180, 270, 360],
          x:[-200, -100, 0, 100, 200],
          borderRadius:[0,100,0, 100, 0]

        }}
        transition={{repeat:Infinity, repeatType:'reverse', duration:3}}
        className='w-[110px] aspect-square grid place-content-center  bg-primary text-black'
      >  
      <motion.p
        animate={{ rotate:[0, -90, -180, -270, -360]}}
        transition={{repeat:Infinity, repeatType:'reverse', duration:3}}
        className="playfair text-4xl font-bold"
      >
        S
      </motion.p>
      </motion.div>
    </div>
  )
}

export default About