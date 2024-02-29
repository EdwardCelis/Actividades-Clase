import React from 'react'

const contactForm = () => {
  return (
    <form className='font-bold'>
        <div className='mb-1'>
            <input 
                type="text"
                placeholder='Your message'
                name='Email'
                className='w-full'
                 />
        </div>

        <div className='mb-1'>
            <input 
                type="text"
                placeholder='Your message'
                name='Email'
                className='w-full'
                />
        </div>

        <div className='mb-1'>
            <input 
                type="text"
                placeholder='Your message'
                name='Email'
                className='w-full'
                />
        </div>
        <button>Send Message</button>
    </form>   
  )
}

export default contactForm
