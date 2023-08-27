'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Loader({active}) {
  return (
    <div className={`absolute z-50 place-content-center ${active? 'grid' : 'hidden'}  grid bg-zinc-900/90 w-full h-full`}>
        <motion.div
            initial={{x:'-20vw'}}
            animate={{
                rotate:[0, 90, 180, 270, 360],
                x:['-20vw', '-10vw', '0vw', '10vw', '20vw'],
                borderRadius:['100%','20%','100%', '20%','100%'],        
            }}
            transition={{repeat:Infinity, repeatType:'reverse', duration:3}}
            className='w-[11vw] aspect-square grid place-content-center rounded-full   text-black bg-primary shadow-xl overflow-hidden'
        />
    </div>
  )
}
