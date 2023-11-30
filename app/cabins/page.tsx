'use client'
import CardView from "../../components/CardView";

export default function Cabins() {


    return (
        <div className="h-screen p-10 grid playfair ">
            <a href={"/"} className={"hover:scale-125 w-fit h-fit p-2 rounded-full hover:bg-primary hover:text-black transition-all"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </a>
            <h2 className="text-4xl mb-4">Booking</h2>

            <div className="grid md:grid-flow-col gap-10">
                <CardView
                    href={"https://www.airbnb.no/rooms/918645205013496461"}
                    src={"https://a0.muscache.com/im/pictures/miso/Hosting-918645205013496461/original/88b2cec4-c2ea-449d-8364-014449aef38b.jpeg?"}
                    title={"Lotsbergskaara"}/>
                <CardView
                    href={"https://www.airbnb.no/rooms/934184710629468152"}
                    src={"https://a0.muscache.com/im/pictures/90861d9f-e533-4d33-9751-7092062eeee5.jpg?"}
                    title={"Hjellaakeren"}/>

            </div>

            <div className="flex flex-col gap-10 rounded-xl">
                <h2 className="text-4xl">Get the holiday gift of the year!</h2>
                
                <a className='px-8 text-black font-medium text-xl rounded-lg bg-primary w-fit py-4 hidden md:block hover:scale-105 transition-all outline-primary' href="https://shop.skaaraliving.com/" target="_blank" rel="noreferrer">Buy a gift card</a>
            </div>
        </div>
    )
}