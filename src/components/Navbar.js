'use client'

import React, { useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Signin from './Signin'

const Navbar = () => {

    const [sidebar, setSideBar] = useState(false)
    const [loginModal , setLoginModal] = useState(false)
    return (<>
        {loginModal?<Signin loginModal={loginModal} setModal={setLoginModal} />:""}
        <div className='bg-blue p-4 text-white flex flex-row justify-between'>
            <div className='flex flex-row items-start'>
                <div className='mx-2 my-1 md:mx-6 cursor-pointer' onClick={() => { setSideBar(true) }}>
                    <div className='w-8 border-[1px] border-white mb-1.5'></div>
                    <div className='w-8 border-[1px] border-white mb-1.5'></div>
                    <div className='w-8 border-[1px] border-white'></div>
                </div>
                <div className='mx-2'>
                    <h1 className='font-bold hidden md:block'>CHALO KCPD</h1>
                </div>
            </div>
            <div className=''>
                <div className="flex flex-row">
                    <form action="#">
                        <input type="text" className='w-40 py-1 px-2 rounded' placeholder='Search for Products' />
                    </form>
                    <button className='px-2 py-1 rounded border mx-2 md:mx-5' onClick={()=>setLoginModal(true)}>Signin</button>
                    <div className=' hidden md:block'>
                    <AiOutlineShoppingCart className='text-2xl m-1' />
                    <div className='absolute rounded-full bg-red-600 text-white text-center  top-2 right-2 w-6'>
                <small>1</small>
            </div>
                    </div>
          
                    
                </div>
            </div>

            {/* sidebar */}
            {sidebar ? <motion.div initial={{x:-400}} animate={{x:1}} transition={{bounce:0 , delay:0.1}} className='fixed left-0 p-4 md:w-[30%] w-[60%] top-0 text-black border-2 h-full bg-white'>

                <div className='flex flex-col justify-center items-center'>
                    <div className='self-end'>
                        <div className='p-4 rounded-full relative left-9  top-20 bg-blue' onClick={() => { setSideBar(false) }}>
                            <RxCross1 className='text-white' />
                        </div>
                    </div>
                    <img src="/logo.png" className='w-20' alt="not found" />
                    <h1 className='mt-2 text-black font-bold'>CHALO KCPD</h1>
                </div>
                <div className='p-4'>
                    <ul className='flex flex-col'>
                    <Link href={'/'} onClick={()=>{setSideBar(false)}}><li className='p-2 hover:bg-[#ebebeb] border-b-2'>Home</li></Link>
                    <Link href={'/Catalog'} onClick={()=>{setSideBar(false)}}><li className='p-2 hover:bg-[#ebebeb] border-b-2'>Products</li></Link>
                    <Link href={'/Profile'} onClick={()=>{setSideBar(false)}}><li className='p-2 hover:bg-[#ebebeb] border-b-2'>Sigin</li></Link>
                    <Link href={'/Report'} onClick={()=>{setSideBar(false)}}><li className='p-2 hover:bg-[#ebebeb] border-b-2'>Report</li></Link>
                    </ul>

                </div>
            </motion.div> : ''}

            <motion.div initial={{scale:0}} animate={{scale:1}} className='md:hidden fixed flex rounded-full bg-blue p-4 right-5 bottom-5  '>
            <AiOutlineShoppingCart className='text-2xl m-1' />
            <div className='absolute rounded-full bg-red-600 text-white text-center p-1 -top-3 right-0 w-8'>
                1
            </div>
            </motion.div>
        </div>
        </>
    )
}

export default Navbar
