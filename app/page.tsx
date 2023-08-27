import React from 'react'
import { StickyHeader, ContactForm, Gallery, Scroller, MapView } from '../components';

export default function Home() {

    const images = [
        '/images/dag/DSC08803.jpg',
        '/images/dag/DSC08778.jpg',
        '/images/kveld/DSC08663-3.jpg',
        '/images/kveld/DSC08623-2.jpg',
        '/images/kveld/DSC08704-3.jpg',
    ]

  return (
    <div className="flex-1 flex flex-col">
        <div className='min-h-screen flex-1 relative' id="gallery">
            <Gallery images={images}/>
        </div>
        <div className='flex flex-col w-[90%] lg:w-3/4 mx-auto  pb-8'>            
            <div className='min-h-screen flex flex-col gap-10 justify-center' id="contact">
                <StickyHeader>Contact</StickyHeader>
                <ContactForm/>
            </div>

            <div className='min-h-screen flex flex-col gap-10' id="location">
                <StickyHeader>Location</StickyHeader>
               <MapView/>
            </div>
        </div>
       <Scroller/>
    </div>
  )
}