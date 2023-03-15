'use client'
import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import Input from './Input'
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
        <form className='grid gap-6 text-xl relative' ref={formRef} onSubmit={handleSubmit}>
            <Input label="First name" type="text" name="firstname"/>
            <Input label="Last name" type="text" name="lastname"/>
            <Input label="Email" type="email" name="email"/>
            <Input label="Phone" type="number" name="phone"/>
      
            
            <label className='lg:col-span-2 grid grid-flow-row gap-2'>
                Message
                <textarea className=' resize-none p-4 outline-none border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800' rows={7} name="message"/>
            </label>
            <input className='lg:col-span-2 text-center text-black w-full outline-none focus:scale-[102%] transition-all rounded-lg font-bold p-4 bg-primary' type='submit' value="Send"/>

            <Loader active={loading}/>
        </form>

       
    </motion.div>
  )
}

export default ContactForm