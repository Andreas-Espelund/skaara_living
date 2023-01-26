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
    <div className='h-[101vh] flex-1 relative'>
      <Image alt="" className='object-cover' src={background} fill/>
      
      <div className='absolute grid place-content-center w-full h-full'>
        <div className="font-black bg-[url('/view.jpg')] bg-clip-text text-[4rem] drop-shadow-xl lg:text-[22rem] bg-center p-10 text-transparent">
          CONTACT
        </div>
      </div>
    </div>
  )
}

export default Contact