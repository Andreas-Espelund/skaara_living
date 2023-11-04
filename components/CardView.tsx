
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
        <a className="text-black text-4xl flex hover:scale-[102%] transition-all aspect-[4/3]" href={href} target="_blank" rel="noreferrer">
            <div className="relative">
                <Image src={src} alt={title} width={1000} height={200} className="min-h-full min-w-full rounded-xl"/>
                <p className="text-white text-4xl font-bold absolute inset-0 flex items-center justify-center">{title}</p>
            </div>
        </a>
    )
}
