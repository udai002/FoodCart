import React, { useRef } from 'react'
import {RxCross1} from 'react-icons/rx'
import Link from 'next/link'

const Signin = ({loginModal , setModal}) => {
    
    const ref = useRef()
    
    return (
        <>
        <div className='fixed w-full h-[100vh] top-0 z-10 border-2 bg-transparent backdrop-blur-lg bg-white shadow-2xl'>

        </div>
        <div className='flex flex-row justify-center w-full h-[100vh] top-0 z-10 fixed  shadow-2xl' ref={ref} >
            
            

            <div className='fixed  h-64 w-[90%] md:w-[40%] text-black font mt-32 ' >
            <div className='absolute  p-2 rounded-full md:right-20 md:-top-3 -right-4 -top-5 bg-blue w-8 ' onClick={()=>{setModal(false)}}>
                <RxCross1/>
            </div>
                <div class="flex bg-white ">
               
                    <div class="w-full max-w-xs m-auto border-2  rounded p-5">
                        <header>
                            <img class="w-20 mx-auto mb-5" src="/logo.png" />
                            
                        </header>
                        <form>
                            <div>
                                <label class="block mb-2 text-blue" for="username">Username</label>
                                <input class="w-full p-2 mb-6 text-blue border-b-2 border-blue outline-none focus:bg-gray-300 bg-slate-100" type="text" name="username" />
                            </div>
                            <div>
                                <label class="block mb-2 text-blue" for="password">Password</label>
                                <input class="w-full p-2 mb-6 text-blue border-b-2 border-blue outline-none focus:bg-gray-300 bg-slate-100" type="password" name="password" />
                            </div>
                            <div>
                                <input class="w-full bg-blue hover:bg-white hover:text-blue text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
                            </div>
                            <div>
                                <div class="px-6 sm:px-0 max-w-sm">
                                    <button type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                                </div>
                            </div>
                        </form>
                        <footer>
                            <a class="text-blue hover:text-pink-700 text-sm float-left" href="#">Forgot Password?</a>
                            <Link class="text-blue hover:text-pink-700 text-sm float-right" href="/Signup" onClick={()=>{setModal(false)}}>Create Account</Link>
                        </footer>
                    </div>
                    
                </div>
                

            </div>
        </div>
        </>
    )
}

export default Signin
