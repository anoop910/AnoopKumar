import React from 'react'

const Home = () => {
  return (
    <div className='flex justify-end relative'>
    <div className='opacity-25'>
    <img src="..\src\imgcom\anoopprotfolio1.png" alt="" />
    </div>
    <div className='absolute inset-0 '>
      <div className='mt-[100px] mx-6'>
      <h1 className='mt-16 text-md sm:text-xl'>Hello ! </h1>
      <br />
      <p className='text-4xl md:text-6xl'>
        I'm <span className='text-[#FFA500]'>Anoop kumar</span>
      </p>
      <br />
      <p className='text-xl md:text-3xl'>

        FullStack Web Developer
      </p>
        <br />
      <div>
        <button className=' m-2 p-4 border-2   w-[120px] h-14 rounded-full hover:bg-[#FFC107] hover:border-[#ffc107] hover:text-[#000000]'>HIRE ME</button>
        <button className='m-2 p-4 border-2   w-[120px] h-14 rounded-full hover:bg-[#FFC107] hover:border-[#ffc107] hover:text-[#000000]'s> MY WORK</button>
      </div>
      </div>
    </div>
  </div>


  )
}

export default Home
