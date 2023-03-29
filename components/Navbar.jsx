import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu ,AiOutlineMail} from "react-icons/ai";
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {BsFillPersonLinesFill} from "react-icons/bs"

import react from 'react'
const Navbar = () => {
  const [nav,setNav] = useState(false);
  const handleNav =() => {
      setNav(!nav);
      console.log(nav);
  };
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Image 
        src="/../public/assets/navLogo.png" 
        alt="/" 
        width="125" 
        className='rounded-full mx-5 w-10 h-10'
        height ='50' 
      />
      <div>
        <ul className={nav?'hidden ':'hidden md:flex'}>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
          </Link>
          <Link href='/'>
            <li className='ml-10 text-sm uppercase hover:border-b'>Contacts</li>
          </Link>
        </ul>
      </div>
      <div className='md:hidden cursor-pointer' onClick={handleNav}> 
          <AiOutlineMenu size={25} />
      </div>
      </div>
      <div className={nav? 'fixed left-0 top-0 w-full h-screen bg-black/75':""}>
        <div className={nav?'fixed left-0 top-0 w-[75%] sm:w-3/5 md:w-[45%] sm h-screen bg-[#ecf0f3] ease-in duration-500'
        :'fixed left-[-100%] top-0 w-[-100%] sm:w-3/5 md:w-[45%] sm h-screen bg-[#ecf0f3] ease-in duration-500'} >
            <div className='flex w-full items-center justify-between'>
              <Image 
                src="/../public/assets/navLogo.png" 
                alt="/" 
                width="50" 
                className='rounded-full w-16 py-2 px-4 my-2 mx-2 h-14'
                height ='50' 
              />
              <div className='rounded-full shadow-lg shadow-gray-400 p-3 m-3 h-10 w-10 cursor-pointer' onClick={handleNav}>

              <AiOutlineClose/>
              </div>
            </div>
            <div className='p-2 items-center mx-10 border-b-4'>
              <p className='w-[75%]'>Let's build something greate</p>
            </div>
            <div  className='flex flex-col'>
              <ul className='p-5 '>
                <Link href='/' className='rounded-full shadow-lg shadow-gray-400'>
                  <li className='mx-10 my-8 w-min text-sm uppercase hover:border-b hover:border-slate-600'>Home</li>
                </Link>
                <Link href='/' className='rounded-full shadow-lg shadow-gray-400'>
                  <li className='mx-10 my-8 w-min text-sm uppercase hover:border-b hover:border-slate-600'>About</li>
                </Link>
                <Link href='/' className='rounded-full shadow-lg shadow-gray-400'>
                  <li className='mx-10 my-8 w-min text-sm uppercase hover:border-b hover:border-slate-600'>Skills</li>
                </Link>
                <Link href='/' className='rounded-full shadow-lg shadow-gray-400'>
                  <li className='mx-10 my-8 w-min text-sm uppercase hover:border-b hover:border-slate-600'>Projects</li>
                </Link>
                <Link href='/' className='rounded-full shadow-lg shadow-gray-400'>
                  <li className='mx-10 my-8 w-min text-sm uppercase hover:border-b hover:border-slate-600'>Contacts</li>
                </Link>
              </ul>
            </div>
            <div className='mt-24 p-2 mx-10 tracking-widest text-blue-600 text-justify'>
                LET'S CONNECT
            </div>
            <div className="p-2 mx-10 flex justify-around">
              <Link href="https://www.linkedin.com/in/dipnarayan-sen-04680221b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSPrIpx2AQ5uxf1JwHV6Ckw%3D%3D" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-2 justify-between'>
                <FaLinkedin/>

              </Link>
              <Link href="https://github.com/ThUnDeR-CoDeR123" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-2 justify-between'>
                <FaGithub/>

              </Link>
              <Link href="/" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-2 justify-between'>
                <AiOutlineMail/>

              </Link>
              <Link href="/" className='rounded-full shadow-lg hover:scale-125 ease-in duration-200 shadow-gray-400 items-center m-3 p-2 justify-between'>
                <BsFillPersonLinesFill/>

              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar
