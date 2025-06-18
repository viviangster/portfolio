import React from 'react'
import { BrowserRouter , Link } from 'react-router-dom';



const Footer = () => {
  return (
    <div className='bg-black pt-1 text-white text-2xl z-10 fixed bottom-0 w-full lg:h-25 md:h-45 flex items-center justify-center'>

<div className='flex items-center text-center gap-5 flex-col md:flex-row justify-center lg:gap-10'>
 
    <div>        <h1 className='text-lg font-sans'>
    
    ✉ viviangster@gmail.com
    <p> &copy; {new Date().getFullYear()} Angster Influence & Solutions </p>

    </h1>    </div>
{/* <link to="https://www.linkedin.com/in/vivian-angster-7492bb20a/" target="_blank"></link> */}

    </div>
    </div>
  )
}

export default Footer