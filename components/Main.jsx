import React from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu ,AiOutlineMail} from "react-icons/ai";
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"

const Main = () => {
  return (
    <div className='w-full h-screen text-center '>
      <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center p-2'>
        <div>
        <p  className='text-gray-500 tracking-widest'>
            LET'S BUILD SOMETHING TOGETHER
        </p>
        <h1 className='py-4 text-gray-700'>

            Hi I'm <span className='text-blue-700'>Dipnarayan</span>
        </h1>
        <h1 className='py-4 text-gray-700'>
           A Front-End Web Developer
        </h1>
        <p className='py-4 max-w-[70%] mx-auto'>
        I’m focused on building responsive front-end web applications
            while learning back-end technologies. I also have keen interest in Cyber Security and hoing my skills on Kali, Nmap and various attacking tools.
        </p>
        <div className='max-w-[330px] flex items-center justify-between m-auto p-4'>
        <Link href="https://www.linkedin.com/in/dipnarayan-sen-04680221b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPrIpx2AQ5uxf1JwHV6Ckw%3D%3D" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-4 justify-between'>
                <FaLinkedin/>

              </Link>
              <Link href="https://github.com/ThUnDeR-CoDeR123" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-4 justify-between'>
                <FaGithub/>

              </Link>
              <Link href="/" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-4 justify-between'>
                <AiOutlineMail/>

              </Link>
              <Link href="/" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-4 justify-between'>
                <BsFillPersonLinesFill/>

              </Link>


        </div>
        </div>
      </div>
    </div>
  )
}

export default Main
