import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 justify-center items-center text-center mx-w-[800px] w-full mx-auto p-4'>

      <div className='flex flex-col gap-4'>

      <p>It's time to get</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6x6l lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
      </div>

      <p className='text-sm md:text-base font-light '>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium '>unbelievably swolenormous</span>  and accept all risks of becoming the local <span className='text-blue-400 font-medium '>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text={'Accept & Begin'}/>
    </div>
  )
}

export default Hero