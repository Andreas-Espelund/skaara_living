import React from 'react'
import StickyHeader from '../components/StickyHeader'
import Image from 'next/image'
import ContactForm from '../components/ContactForm'
import background from '../public/fake.jpg'
import view from '../public/view.jpg'
import Gallery from '../components/Gallery'

function Home() {

    const images = [
        '/images/dag/DSC08803.jpg',
        '/images/dag/DSC08790.jpg',
        '/images/dag/DSC08778.jpg',
        //'/images/dag/DSC08770.jpg', (vertical)
        '/images/dag/DSC08765.jpg',
        '/images/dag/DSC08759.jpg',
        '/images/dag/DSC08732.jpg',
        '/images/dag/DJI_0452.jpg',

    ]

  return (
    <div className="flex-1 flex flex-col">            
        
        <div className='min-h-screen flex-1 relative'>
            
            <Gallery images={images}/>
        </div>

            
        <div className='flex flex-col w-[90%] lg:w-3/4 mx-auto  pb-8'>
            <div className='min-h-screen flex flex-col gap-10 max-w-[100vw] hidden'>
                <StickyHeader>About</StickyHeader>
                <div className="text-2xl max-w-[100vw] grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-10">
                    <div className='flex flex-col justify-evenly gap-4 '>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil pariatur alias commodi magnam quas delectus illum repellat? Dolor, modi dignissimos ratione voluptatum libero commodi sequi eaque culpa ut illo!</p>
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil pariatur alias commodi magnam quas delectus illum repellat? Dolor, modi dignissimos ratione voluptatum libero commodi sequi eaque culpa ut illo!</p>
                    </div>
                    
                    <div className='relative mx-auto w-full lg:w-3/4 aspect-square rounded-full overflow-hidden shadow-2xl bg-white'>
                        <Image alt="" className='object-cover' src={view} fill/>
                    </div>
                </div>

            </div>
            <div className='min-h-screen flex flex-col gap-10' id="contact">
                <StickyHeader>Contact</StickyHeader>
                <ContactForm/>
            </div>

            <div className='min-h-screen flex flex-col gap-10' id="location">
                <StickyHeader>Location</StickyHeader>
                <div className='flex w-full h-full justify-end'>
                    <iframe src="https://snazzymaps.com/embed/452941" className='w-full flex-1 h-fit lg:h-[800px] rounded-2xl shadow-xl'/>
                    
                    <a className='absolute m-4 bg-primary text-black p-4 w-fit rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all active:scale-95 active:shadow-none' target="_blank" href="https://www.google.com/maps/dir/''/Fv698+7,+6778+Lote/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                        </svg>

                    </a>
                </div>
            </div>

        </div>

        

    </div>
  )
}

export default Home