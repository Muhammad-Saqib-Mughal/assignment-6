import React from 'react'

function Navbar() {
    return (
        <>
            <div className='w-[100vw]'>
                <div className=' flex justify-around h-[54px] items-center border-b-black border-b-2 '>
                    <div className='lg:text-sm'>
                        Phone Number: 956 742 455 678 | Email:info@ddsgnr.com
                    </div>
                    <div className=' flex gap-1 md:hidden '>
                        <img src="/Icon/Facebook.png" alt="Facebook" />
                        <img src="/Icon/Instagram.png" alt="Instagram" />
                        <img src="/Icon/Twitter.png" alt="Twitter" />
                        <img src="/Icon/Linkedin.png" alt="Linkedin" />

                    </div>
                </div>

                <div className='flex justify-between w-[100vw]'>

                    <div className=' h-[72px] w-screen  p-2 flex justify-between items-center border-b-[#676767] border-b-2 bg-[#F7F7F7]   '>
                        <div className='flex items-center m-2 w-1/6 justify-center'>
                            <img width={32} src="/logo.jpg" alt="logo" />
                            <span className='text-2xl'>Ddsgnr</span>
                        </div>

                        <div className='hidden  md:block'>
                            <img src="/hamburger.svg" alt="image" />
                        </div>

                        <div className='h-[44px] w-[850px] p-2 bg-[#ffffff] items-center flex md:hidden  lg:w-auto  '>
                            <div className='flex gap-9  items-center justify-center lg:gap-6 '>
                                <span className='hover:underline hover:cursor-pointer lg:w-auto'>Home</span>
                                <span className='hover:underline hover:cursor-pointer lg:w-auto'>Courses</span>
                                <span className='hover:underline hover:cursor-pointer lg:w-auto'>Services</span>
                                <span className='hover:underline hover:cursor-pointer lg:w-auto'>Acheivements</span>
                                <span className='hover:underline hover:cursor-pointer lg:w-auto'>About Us</span>
                                <span className='hover:underline hover:cursor-pointer lg:w-auto'>Testimonial</span>
                                <button className='border-2 border-black rounded-md w-[80px]  h-[40px]  hover:bg-black hover:text-white lg:h-auto lg:w-auto'>Login</button>
                                <button className='border-2 border-black bg-black text-white rounded-md w-[80px] h-[40px] hover:bg-white hover:text-black lg:w-auto lg:h-auto '>Signin</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
