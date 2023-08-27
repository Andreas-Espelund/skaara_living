import React from "react";

export default function MapView(){
    return (
        <div className='flex w-full h-full justify-end'>
            <iframe src="https://snazzymaps.com/embed/452941" className='w-full flex-1 h-[80vh]  rounded-2xl shadow-xl'/>

            <a
                className='absolute flex gap-4 font-semibold m-4 p-4 w-fit rounded-full bg-primary text-black shadow-md hover:scale-105 hover:shadow-lg transition-all active:scale-95 active:shadow-none'
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/BuHGQdkSBYtbnbwV8">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Open in maps
            </a>
        </div>
    )
}