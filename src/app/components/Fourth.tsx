import React from 'react'

function Fourth() {
    return (
        <>
            <div className=' mt-20    flex justify-center items-center flex-col'>
                <h1 className='m-5 text-5xl'>Courses</h1>
                <p className='m-3 w-[90vw] text-center text-lg '>Your Ultimate Guide to learning</p>

                <div className='mt-10 mb-10 flex gap-10'>
                    <span>Popular</span>
                    <span>Recommended</span>
                    <span>Best  Price</span>
                </div>
            </div>


            <div className='grid grid-cols-3 grid-rows-2 justify-center place-items-center items-center gap-10 lg:grid-cols-2 md:grid-cols-1'>




                <div className='m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:w-auto lg:w-auto '>
                    <span>
                        <img width={"416px"} src="/Card/Card1.png" alt="image" />
                    </span>


                    <span className='flex justify-between w-[100%] items-center  '>
                        <span className='font-light text-sm'>
                            Design
                        </span>
                        <span className='flex justify-around gap-2 '>
                            <img src="/blog/star.png" alt="Image" />
                            <span className='font-bold items-center'>5.0</span>
                        </span>
                    </span>


                    <span className='flex flex-col'>
                        <span className='font-bold text-2xl'>UX/UI Design 201</span>
                        <span className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>
                    </span>


                    <span className='flex items-center justify-start w-[100%] gap-8' >
                        <button className='font-normal border-2 border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white'>Enroll Now</button>
                        <span>$400</span>
                    </span>
                </div>


                <div className='m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:w-auto lg:w-auto  '>
                    <span>
                        <img width={"416px"} src="/Card/Card4.png" alt="image" />
                    </span>


                    <span className='flex justify-between w-[100%] items-center  '>
                        <span className='font-light text-sm'>
                            Programmimg
                        </span>
                        <span className='flex justify-around gap-2 '>
                            <img src="/blog/star.png" alt="Image" />
                            <span className='font-bold items-center'>5.0</span>
                        </span>
                    </span>


                    <span className='flex flex-col'>
                        <span className='font-bold text-2xl'>Introduction to Python </span>
                        <span className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>
                    </span>


                    <span className='flex items-center justify-start w-[100%] gap-8' >
                        <button className='font-normal border-2 border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white'>Enroll Now</button>
                        <span>$400</span>
                    </span>
                </div>





                <div className='m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col lg:w-auto md:hidden '>
                    <span>
                        <img width={"416px"} src="/Card/Card6.png" alt="image" />
                    </span>


                    <span className='flex justify-between w-[100%] items-center  '>
                        <span className='font-light text-sm'>
                            Business
                        </span>
                        <span className='flex justify-around gap-2 '>
                            <img src="/blog/star.png" alt="Image" />
                            <span className='font-bold items-center'>5.0</span>
                        </span>
                    </span>


                    <span className='flex flex-col'>
                        <span className='font-bold text-2xl'>Data Analysis for Beginners</span>
                        <span className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>
                    </span>


                    <span className='flex items-center justify-start w-[100%] gap-8' >
                        <button className='font-normal border-2 border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white'>Enroll Now</button>
                        <span>$400</span>
                    </span>
                </div>





                <div className='m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:hidden lg:w-auto'>
                    <span>
                        <img width={"416px"} src="/Card/Card5.png" alt="image" />
                    </span>


                    <span className='flex justify-between w-[100%] items-center  '>
                        <span className='font-light text-sm'>
                            Art
                        </span>
                        <span className='flex justify-around gap-2 '>
                            <img src="/blog/star.png" alt="Image" />
                            <span className='font-bold items-center'>5.0</span>
                        </span>
                    </span>


                    <span className='flex flex-col'>
                        <span className='font-bold text-2xl'>Art Specialization</span>
                        <span className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>
                    </span>


                    <span className='flex items-center justify-start w-[100%] gap-8' >
                        <button className='font-normal border-2 border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white'>Enroll Now</button>
                        <span>$400</span>
                    </span>
                </div>





                <div className='m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:hidden lg:hidden'>
                    <span>
                        <img width={"416px"} src="/Card/Card2.png" alt="image" />
                    </span>


                    <span className='flex justify-between w-[100%] items-center  '>
                        <span className='font-light text-sm'>
                            Law
                        </span>
                        <span className='flex justify-around gap-2 '>
                            <img src="/blog/star.png" alt="Image" />
                            <span className='font-bold items-center'>5.0</span>
                        </span>
                    </span>


                    <span className='flex flex-col'>
                        <span className='font-bold text-2xl'>Rule of Law</span>
                        <span className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>
                    </span>


                    <span className='flex items-center justify-start w-[100%] gap-8' >
                        <button className='font-normal border-2 border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white'>Enroll Now</button>
                        <span>$400</span>
                    </span>
                </div>




                <div className='m-5 p-3 bg-[#F7F7F7] w-auto h-[534px] flex justify-evenly items-center flex-col md:hidden lg:hidden  '>
                    <span>
                        <img width={"416px"} src="/Card/Card3.png" alt="image" />
                    </span>


                    <span className='flex justify-between w-[100%] items-center  '>
                        <span className='font-light text-sm'>
                            Tech
                        </span>
                        <span className='flex justify-around gap-2 '>
                            <img src="/blog/star.png" alt="Image" />
                            <span className='font-bold items-center'>5.0</span>
                        </span>
                    </span>


                    <span className='flex flex-col'>
                        <span className='font-bold text-2xl'>Introduction to webflow</span>
                        <span className='text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</span>
                    </span>


                    <span className='flex items-center justify-start w-[100%] gap-8' >
                        <button className='font-normal border-2 border-black rounded-md w-[117px] h-[40px] hover:bg-black hover:text-white'>Enroll Now</button>
                        <span>$400</span>
                    </span>
                </div>

            </div>

            <div className='flex justify-center items-center m-24 mt-12'>
                <button className='border-2 border-black rounded-md w-[155px] h-[49px] hover:bg-black hover:text-white'>view All Course</button>
            </div>


        </>
    )
}

export default Fourth
