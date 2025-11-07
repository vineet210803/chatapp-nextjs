"use client"

import React, { useState } from 'react'

const Chatform = () => {
    const [message, setMessage] = useState('')
    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(message.trim()!==""){
            setMessage("");
        }
    }

  return (
    <div>
        <form onSubmit={handlesubmit} className=' flex gap-2 mt-4'>
            <input type="text" placeholder="Type your message here..." onChange={(e)=>setMessage(e.target.value)} className='border-1' />
            <button className=' bg-black text-white px-4 py-2'>Send</button>
        </form>
    </div>
  )
}

export default Chatform

