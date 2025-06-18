
import React from 'react'
import Header from '../Components/headNav.jsx';
import Footer from '../Components/footerEnd.jsx';
import { Outlet } from 'react-router-dom';


const Root = () => {
  return (
    <div>
        <Header />
        
          <div className='pt-20 bg-white w-full flex flex-col items-stretch mx-auto max-w-7xl' style={{
            backgroundImage: "url('/assets/trees1.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
          }}>
            <Outlet />
          </div>
              
          <div>
            
            <Footer/>
          </div>
    </div>
  )
}

export default Root     