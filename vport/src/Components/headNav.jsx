import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className='w-full bg-white shadow-md fixed top-0 left-0 z-50'>
      <div className='flex justify-between items-center px-6 h-20'>
        
        <div className='flex items-center gap-4'>
          <img src="/assets/cassiopeiav.png" alt="Logo" className='h-12 w-auto' />
          <h1 className='text-2xl text-amber-800 font-bold'>Vivian Angster</h1>
        </div>

        
        <nav className='hidden md:flex gap-6 text-amber-900'>
          <Link to="/" className='hover:text-amber-300 transition'>Home</Link>
          
          <Link to="/history" className='hover:text-amber-400 transition'>History</Link>
          <Link to="/contact" className='hover:text-amber-500 transition'>Contact</Link>
          <Link to="/blog" className='hover:text-amber-400 transition'>Blog</Link>
          <Link to="/resume" className='hover:text-amber-300 transition'>CV</Link>
        </nav>

        
        <button
          onClick={toggleMenu}
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1'
        >
          <span className={`w-6 h-0.5 bg-black transition ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      
      {menuOpen && (
        <div className='md:hidden bg-white shadow-md px-6 pb-4'>
          <nav className='flex flex-col gap-4 text-fuchsia-950'>
            <Link to="/" onClick={toggleMenu} className='hover:text-amber-400 transition'>Home</Link>
            
            <Link to="/history" onClick={toggleMenu} className='hover:text-amber-400 transition'>History</Link>
            <Link to="/references" onClick={toggleMenu} className='hover:text-amber-400 transition'>References</Link>
            <Link to="/blog" onClick={toggleMenu} className='hover:text-amber-400 transition'>Blog</Link>
            <Link to="/resume" onClick={toggleMenu} className='hover:text-amber-400 transition'>CV</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
