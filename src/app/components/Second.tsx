import React from 'react'

function Second() {
    return (
        <>
            <div className=' h-[300px] flex justify-center items-center flex-col'>
                <h1 className='m-5 text-5xl'>Explore Courses By Category</h1>
                <p className='m-3'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
            </div>



            <div className='grid grid-cols-3 grid-rows-3 justify-self-center items-center lg:grid-cols-2 md:grid-cols-1  '>



                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:w-auto'>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/pen.png" alt="Iamge" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Marketing
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>




                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:w-auto '>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/volume-high.png" alt="Iamge" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Marketing
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>




                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:w-auto '>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/group.png" alt="Image" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Development
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>



                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden '>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/microphone.png" alt="Omage" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Communication
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>



                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden '>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/link.png" alt="pen" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Digital Marketing
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>



                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden '>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/arrow-2.png" alt="Image" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Self Development
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>



                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden lg:hidden'>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/briefcase.png" alt="Image" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Business
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>



                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden  lg:hidden'>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/Book.png" alt="Image" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Finance
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>



                <div>
                    <div className='m-5 bg-[#F7F7F7] w-[410px] h-[132px] flex justify-evenly items-center lg:w-[300px] md:hidden lg:hidden '>
                        <span className='bg-white w-[100px] h-[100px] flex justify-center items-center'>
                            <img className='self-center' width={"32px"} src="/Team/book2.png" alt="Image" />
                        </span>
                        <span className='flex flex-col '>
                            <span className='font-semibold text-xl'>
                                Consulting
                            </span>
                            <span>
                                50+ Courses Available
                            </span>
                        </span>
                    </div>
                </div>


            </div>

            <div className='flex justify-center items-center m-24 mt-12'>
                <button className='border-2 border-black rounded-md w-[155px] h-[49px] hover:bg-black hover:text-white'>view All Course</button>
            </div>
        </>

    )
}

export default Second
