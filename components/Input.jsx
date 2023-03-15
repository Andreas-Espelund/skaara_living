import React from 'react'

export default function Input({label, name, type}) {
  return (
    <label className='grid grid-flow-row gap-2'>
        {label}
        <input
        name={name}
        type={type}
        className="p-4 outline-none  box-border border-2 border-transparent focus:border-primary rounded-lg bg-zinc-800"
        />
    </label>
  )
}
