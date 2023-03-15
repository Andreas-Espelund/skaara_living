import React from 'react'
import Image from 'next/image'
import background from '../../public/view.jpg'
import Loader from '../../components/Loader'
function Contact() {

  console.log("SERVER CONSOLE LOG")
  console.log(process.env.EJS_PUBLIC_KEY)
  console.log(process.env.EJS_SERVICE_ID)
  console.log(process.env.EJS_TEMPLATE_ID)

  return (
    <div className='flex-1 relative h-screen'>
      <Image alt="" className='object-cover' src={background} fill/>
      <div className='absolute grid place-content-center w-full h-full'>
        <div className="font-black text-[4rem] lg:text-[22rem]  drop-shadow-xl text-white/60">
          CONTACT
        </div>
      </div>
    </div>
  )
}

export default Contact