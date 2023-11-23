"use client"

import React, { useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
// import { useState } from 'react';

const page = () => {

  const [categoryName , setCategoryName] = useState('All')
  const [dropDown , setDropDown] = useState(false)
  return (
    <div className='p-6 pt-2'>
      <div className=''>
      <h1 className='text-xl font-bold my-4'>Menu </h1>
      </div>
      <div className='flex justify-between flex-wrap border-t-2 pt-2'>
        <div className='md:w-[20vw] hidden md:block m-1'><h1>Category</h1></div>
        <div className='flex flex-row justify-between grow'>
          <div className='flex'>
            <span className='m-1'>Sort by: </span><button  onClick={()=>{setDropDown(true)}} className='border-black border-[1px] px-2 py-1 flex'>{categoryName}
             <IoMdArrowDropup className='m-1'/> 
            </button>
            {dropDown?<ul className='absolute ml-16 mt-9 bg-gray-100'>
              <li className='pt-1 border-b-2 px-2 py-1' onClick={(e)=>{setCategoryName(e.target.textContent)
                 setDropDown(false)}}>All</li>
              <li className='pt-1 border-b-2 px-2 py-1' onClick={(e)=>{setCategoryName(e.target.textContent)
                 setDropDown(false)}}>Starters</li>
              <li className='pt-1 border-b-2 px-2 py-1' onClick={(e)=>{setCategoryName(e.target.textContent)
                 setDropDown(false)}}>Main Course</li>
            </ul>:""}
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
