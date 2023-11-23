import React from 'react'
import { IoMdArrowDropup } from "react-icons/io";

const page = () => {
  return (
    <div className='p-6 pt-2'>
      <div className=''>
      <h1 className='text-xl font-bold my-4'>Menu </h1>
      </div>
      <div className='flex justify-between flex-wrap border-t-2 pt-2'>
        <div className='md:w-[20vw] hidden md:block m-1'><h1>Category</h1></div>
        <div className='flex flex-row justify-between grow'>
          <div className='flex'>
            <span className='m-1'>Sort by: </span><button className='px-2 py-1 border-black border-[1px] flex'>ALL <IoMdArrowDropup className='m-1'/> </button>
          </div>
          <div className='m-1 pr-4'>
            <p>Products Found : 90</p>
          </div>
        </div>
      </div>
      <div className='p-4 flex flex-row flex-wrap'>
        {/* <div>
          <h1>Catgory</h1>
          <ul className='flex md:flex-col '>
            <li>Starter</li>
            <li>Main Course</li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default page
