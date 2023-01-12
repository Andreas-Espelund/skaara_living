'use client'
import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className='text-4xl h-[120vh] flex-1 grid place-content-center'>
      
      <motion.div
        initial={{x:-200}}
        animate={{
          rotate:[0, 90, 180, 270, 360],
          x:[-400, -200, 0, 200, 400],
          borderRadius:[0,100,0, 100, 0]

        }}
        transition={{repeat:Infinity, repeatType:'reverse', duration:3}}
        
        className='w-[200px]  h-[200px]  bg-yellow-300 text-black'

      >  
      </motion.div>
    </div>
  )
}

export default About