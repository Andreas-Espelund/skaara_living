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
            <div className='min-h-screen flex flex-col gap-10'>
                <StickyHeader>About</StickyHeader>
                <div className={`text-2xl grid grid-cols-2`}>
                <div className='flex flex-col gap-2 m-auto'>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil pariatur alias commodi magnam quas delectus illum repellat? Dolor, modi dignissimos ratione voluptatum libero commodi sequi eaque culpa ut illo!</p>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil pariatur alias commodi magnam quas delectus illum repellat? Dolor, modi dignissimos ratione voluptatum libero commodi sequi eaque culpa ut illo!</p>
                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil pariatur alias commodi magnam quas delectus illum repellat? Dolor, modi dignissimos ratione voluptatum libero commodi sequi eaque culpa ut illo!</p>

                </div>
                
                <div className='h-[500px] relative ml-auto aspect-square rounded-full overflow-hidden   shadow-2xl bg-white'>
                    <Image alt="" className='object-cover' src="https://images.squarespace-cdn.com/content/v1/5e20a2ecc3ec8b14a479723c/1601894951277-JCK8LZE1K6JEC6786ZK1/DSC_6738.jpg?" fill/>
                </div>
                </div>

            </div>
            <div className='h-screen flex flex-col gap-10'>
                <StickyHeader>Get in touch</StickyHeader>
                <ContactForm/>
            </div>

            <div className='h-screen flex flex-col gap-10'>
                <StickyHeader>Where?</StickyHeader>
                <iframe src="https://snazzymaps.com/embed/452941" className='w-full h-3/4  rounded-2xl shadow-xl'/>
            </div>

        </div>
    </div>
  )
}

export default Home