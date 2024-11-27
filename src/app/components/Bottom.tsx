import React from 'react'

function Bottom() {
  return (
    <>
    <div className=' h-[228px] w-FULL p-3 flex justify-between items-center border-b-[#676767] border-b-2 border-t-[#676767] border-t-2 bg-[#F7F7F7]  '>
                    <div className='flex items-center m-2 w-1/4 justify-center'>
                       <p className='text-2xl font-bold '>Trusted by 2000+ companies worldwide.</p>
                    </div>

                    <div className='flex items-center p-2  '>
                        <div className='flex gap-9 items-center md:flex-col '>
                           <img  src="/logo/logo1.png" alt="Logo" />
                           <img src="/logo/logo2.png" alt="Logo" />
                           <img className='md:hidden' src="/logo/logo3.png" alt="Logo" />
                           <img className='lg:hidden md:hidden' src="/logo/logo4.png" alt="Logo" />
                           <img className='lg:hidden md:hidden' src="/logo/logo5.jpg" alt="Logo" />
                           <img className='lg:hidden md:hidden'  src="/logo/logo6.png" alt="Logo" />
                        </div>
                    </div>
                </div>
    </>
      
    
  )
}

export default Bottom
