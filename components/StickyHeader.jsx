import React from 'react'

function StickyHeader({children}) {
  return (
    <h1 className='text-[3rem] z-50 lg:text-6xl py-2 lg:py-10  sticky top-0 bg-gradient-to-b from-zinc-900 to-transparent '>{children}</h1>
  )
}

export default StickyHeader