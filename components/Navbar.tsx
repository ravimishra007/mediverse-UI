import Image from 'next/image'
import React from 'react'
import { Settings ,CircleHelp } from 'lucide-react';

const Navbar = () => {
  return (
    <>
    <nav className='w-full bg-[#7421931A]  h-16 flex  '>
        <div className=' w-full h-full flex justify-between items-center px-[50px] '>
            <div className='flex justify-center items-center gap-2'>
                <div>
                <Image
              src="/images/logo.png" 
              alt="Logo"
              width={60}
              height={60}
              className='object-contain'
            />
                </div>
                <h2 className='text-[#742193] text-[17.06px] font-semibold leading-[14.62px]'>MEDIVERSE</h2>
          
            </div>
            <div className='flex justify-center items-center gap-6 '>
            <Settings />

            <CircleHelp />

            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar