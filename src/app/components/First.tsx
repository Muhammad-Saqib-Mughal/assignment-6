import React from 'react'

function First() {
  return (
    <>
      <div className='flex md:flex-col md:items-center '>

        <div className='my-[30px] mx-[30px]  p-4 h-[100vh]  w-[50vw] justify-center items-center flex flex-col flex-start gap-[15px] lg:h-auto md:w-[90vw] md:h-auto' >
          <h1 className='text-[56px] w-[90%] font-bold md:text-5xl '>Learn new skills online with ease</h1>
          <p className='text-lg w-[90%]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <span className='w-[90%] flex justify-start gap-3 md:flex-col md:items-center'>
            <button className='border-2 border-black bg-black text-white rounded-md w-[150px] md:w-28 h-[50px] hover:bg-white hover:text-black'>Start learning now</button>
            <button className='border-2 border-black rounded-md w-[150px] md:w-28 h-[50px] hover:bg-black hover:text-white'>Explore Courses</button>
          </span>


        </div>


        <div className='m-2 w-[50vw]  h-auto flex items-center justify-center md:h-auto md:w-[70vw]'>
          <img className='w-full h-auto' src="/First/Image.jpg" alt="Image" />
        </div>


      </div>
    </>
  )
}

export default First
