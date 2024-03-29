import React from 'react'

export default function StickyHeader({children}) {
  return (
    <h1
        className='text-4xl playfair z-40 lg:text-6xl py-2 lg:py-10  sticky top-0 bg-gradient-to-b from-zinc-900 to-transparent '
    >
      {children}
    </h1>
  )
}