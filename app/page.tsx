import React from 'react'
import StickyHeader from '../components/StickyHeader'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import background from '../public/background.png'



function Home() {

  return (
    <div className="flex-1 flex flex-col">            
        <div className='min-h-screen flex-1'>
            <Image className='object-cover' fill alt="" src={background}/>
        </div>
            
        <div className='flex flex-col w-[90%] lg:w-3/4 mx-auto  pb-8'>
            <div className='min-h-screen flex flex-col gap-10 max-w-[100vw]'>
                <StickyHeader>About</StickyHeader>
                <div className="text-2xl max-w-[100vw] grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-10">
                    <div className='flex flex-col justify-evenly gap-4 '>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil pariatur alias commodi magnam quas delectus illum repellat? Dolor, modi dignissimos ratione voluptatum libero commodi sequi eaque culpa ut illo!</p>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil pariatur alias commodi magnam quas delectus illum repellat? Dolor, modi dignissimos ratione voluptatum libero commodi sequi eaque culpa ut illo!</p>
                    </div>
                    
                    <div className='relative mx-auto w-full lg:w-3/4 aspect-square rounded-full overflow-hidden shadow-2xl bg-white'>
                        <Image alt="" className='object-cover' src="https://images.squarespace-cdn.com/content/v1/5e20a2ecc3ec8b14a479723c/1601894951277-JCK8LZE1K6JEC6786ZK1/DSC_6738.jpg?" fill/>
                    </div>
                </div>

            </div>
            <div className='min-h-screen flex flex-col gap-10'>
                <StickyHeader>Contact</StickyHeader>
                <ContactForm/>
            </div>

            <div className='min-h-screen flex flex-col gap-10'>
                <StickyHeader>Location</StickyHeader>
                <iframe src="https://snazzymaps.com/embed/452941" className='w-full h-3/4  rounded-2xl shadow-xl'/>
            </div>

        </div>
    </div>
  )
}

export default Home