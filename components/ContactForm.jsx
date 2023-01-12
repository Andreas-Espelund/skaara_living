'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
function ContactForm() {
    
    const [msgData, setMsgData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(msgData)        
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setMsgData(previousState => ({...previousState,[name]:value}))
    }

    return (
    <motion.div
        onSubmit={handleSubmit}
        initial={{x:-50, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1}}
        viewport={{once:true}}
        
    >
        <form className='grid gap-6 grid-cols-2 text-xl'>
        
            <label className=''>First name </label>
            <label className=''> Last name </label>
            
            <input className=' p-4  outline-none box-border border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' onChange={handleChange} value={msgData.firstname || ''} name="firstname" type="text"/>
            <input className=' p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' onChange={handleChange} value={msgData.lastname || ''} name="lastname" type="text"/>
        
        
            <label className=''> Email </label>
            <label className=''> Phone number </label>
            
            <input className=' p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' onChange={handleChange} value={msgData.email || ''} name="email" type="email"/>    
            <input className=' p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' onChange={handleChange} value={msgData.phone || ''} name="phone" type="number"/>    
            

            <label className='col-span-2'> Message </label>
            <textarea  className='col-span-2 resize-none p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' rows={7} name="message" value={msgData.message || ''} onChange={handleChange}/>

            <button className='text-center col-span-2 text-black w-full outline-none focus:scale-[102%] transition-all rounded-lg font-bold p-4 bg-primary' type='submit'>Submit</button>

            
        </form>
    </motion.div>
  )
}

export default ContactForm