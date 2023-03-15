'use client'
import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import Input from './Input'
import Loader from './/Loader'
const EJS_PUBLIC_KEY="WJ3R4JsWHDRY4XkxG"
const EJS_SERVICE_ID="service_owyz0ui"
const EJS_TEMPLATE_ID="template_dkkc2wk"

function ContactForm() {
    var last = null
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

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = formRef.current
        
        if (verified(data)){
            if (last != data){
                emailjs.sendForm(EJS_SERVICE_ID, EJS_TEMPLATE_ID, data, EJS_PUBLIC_KEY)
                last = data
                sendEmail()
                e.target.reset()
            }
            return
        } else {
            alert("Fill out all fields!")
            console.log("ERROR! Invalid input to form!")
        }
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
            <button className='lg:col-span-2 text-center text-black w-full outline-none active:scale-[98%] transition-all rounded-lg font-bold p-4 bg-primary' type='submit'>Send</button>
            
            <Loader active={loading}/>
        </form>

       
    </motion.div>
  )
}

export default ContactForm