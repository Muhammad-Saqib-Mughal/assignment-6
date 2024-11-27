import React from 'react'

function Sixth() {
    return (
        <>
            <div className='bg-[#F7F7F7]'>

                    <div className=' h-[300px] flex justify-center items-start flex-col lg:mt-[170px]'>
                        <h1 className='mb-5  ml-10 text-5xl'>Customer testimonials</h1>
                        <p className='   ml-10 w-[90vw] text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>


                <div className='grid grid-cols-3 grid-rows-1 justify-items-center items-center lg:grid-cols-2 md:grid-cols-1'>



                    <div className='m-3 border-2 h-[294px] w-[321px] p-3 gap-5 flex flex-col md:w-auto md:h-auto'>
                        <img className='w-[35%]' src="/Testimonial/Stars.png" alt="image" />
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                        <div className='flex gap-5'>
                            <img className='rounded-full' src="/person/person3.png" alt="Image" />
                            <div className='flex flex-col'>

                            <div className=''>James Nduku</div>
                            <div>Software Developer</div>
                            </div>
                        </div>
                    </div>






                    <div className='m-3 border-2 h-[294px] w-[321px] p-3 gap-5 flex flex-col md:w-auto md:h-auto'>
                        <img className='w-[35%]' src="/Testimonial/Stars.png" alt="image" />
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                        <div className='flex gap-5'>
                            <img className='rounded-full' src="/person/person1.png" alt="Image" />
                            <div className='flex flex-col'>

                            <div className=''>Erick Kipkemboi</div>
                            <div>Scrum Master</div>
                            </div>
                        </div>
                    </div>






                    <div className='m-3 border-2 h-[294px] w-[321px] p-3 gap-5 flex flex-col md:w-auto md:h-auto'>
                        <img className='w-[35%]' src="/Testimonial/Stars.png" alt="image" />
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                        <div className='flex gap-5'>
                            <img className='rounded-full' src="/person/person6.png" alt="Image" />
                            <div className='flex flex-col'>

                            <div>Stephen Kerubo</div>
                            <div>UI/UX Designer</div>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='p-8 flex items-center justify-between md:gap-3'>
                    <span className='w-[72px] h-[8px]'>
                    <img src="/Team/Slider-Dots.png" alt="Image" />
                    </span>

                    <span className='flex gap-4' >
                        <img src="/Team/Button-L.png" alt="Image" />
                        <img src="/Team/Button-R.png" alt="Image" />
                    </span>
                </div>
            </div>

        </>
    )
}

export default Sixth
