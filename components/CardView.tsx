import React from 'react';
import Image from "next/image";
import Link from "next/link";

type CardViewProps = {
    title: string,
    src: string,
    href: string
}

export default function CardView(props: CardViewProps) {
    const { title, src, href } = props;

    return (
        <a className="text-black text-4xl hover:scale-[102%] transition-all" href={href} target="_blank" rel="noreferrer">
            <div className="relative">
                <img src={src} alt={title} className="object-cover object-center aspect-[4/3] rounded-lg" />
                <p className="text-white  text-4xl font-bold absolute inset-0 flex items-center justify-center">{title}</p>
            </div>
        </a>
    )
}
