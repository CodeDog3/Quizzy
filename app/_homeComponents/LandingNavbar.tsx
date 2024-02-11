import React from 'react'
import logo from "/public/Quizzy Logo.png"
import Image from 'next/image'

const LandingNavbar = () => {
  
  return (
    <nav className='h-16 w-full bg-gradient-to-r from-[--secondaryBlue] to-[--mainBlue] rounded-b-sm'>
      <div className="flex h-full w-full items-center justify-between px-7">
        <div className='flex items-center'>
          <Image src={logo} width={80} height={80} alt={"Quizzy logo"} />
          <h1 className='text-white font-bold text-xl'>Quizzy</h1>
        </div>
        <div className='flex items-center gap-x-[200px]'>
          <div className='flex items-center gap-x-10 text-white font-semibold '>
            <div>ID1</div>
            <div>|</div>
            <div>ID2</div>
            <div>|</div>
            <div>ID3</div>
          </div>
          <div className='flex gap-x-5 items-center'>
            <div className='px-3 py-2 hover:bg-blue-400 rounded-lg text-white'>Log in</div>
            <div className='px-3 py-2 bg-blue-500 hover:opacity-80 rounded-lg text-white'>Sign up</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavbar