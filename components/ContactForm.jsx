'use client'
import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';

import Loader from './/Loader'
function ContactForm() {
    
    const [loading, setLoading] = useState(false)
    const [msgData, setMsgData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message:''
    })

    const formRef = useRef()


    const verified = (data) => {
        return (
            data.firstname != '' &&
            data.lastname != '' &&
            data.email != '' &&
            data.phone != '' &&
            data.message != ''
        )
    }

    const sendEmail = (data) => {
        alert("Message sendt!")
        console.log("sending email...")
    }

    const test = () => {
        console.log("KEYS")
        console.log(process.env.EJS_PUBLIC_KEY)
        console.log(process.env.EJS_SERVICE_ID)
        console.log(process.env.EJS_TEMPLATE_ID)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(e => true)
        const data = formRef.current

        emailjs.sendForm(EJS_SERVICE_ID, EJS_TEMPLATE_ID, formRef.current, EJS_PUBLIC_KEY)
        
        
        setLoading(e => false)
    

    }
    test()

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
        onClick={()=> setLoading(false)}
        
    >
        <form className='grid gap-6 grid-cols-2 text-xl relative' ref={formRef} onSubmit={handleSubmit}>

            <label htmlFor='email'> First name </label>
            <label htmlFor='lastname'> Last name </label>
            
            <input className=' p-4  outline-none box-border border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' name="firstname" type="text"/>
            <input className=' p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' name="lastname" type="text"/>
        
        
            <label htmlFor='email'> Email </label>
            <label htmlFor='phone'> Phone number </label>
            
            <input className=' p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' name="email" type="email"/>    
            <input className=' p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' name="phone" type="number"/>    
            

            <label htmlFor='message' className='col-span-2'> Message </label>
            <textarea  className='col-span-2 resize-none p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' rows={7} name="message"/>

            <input className='text-center col-span-2 text-black w-full outline-none focus:scale-[102%] transition-all rounded-lg font-bold p-4 bg-primary' type='submit' value="Send"/>

        <Loader active={loading}/>
        </form>

       
    </motion.div>
  )
}

export default ContactForm