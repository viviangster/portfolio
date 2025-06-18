// rafce
import React from 'react';
import About from '../Components/aboutMe.jsx';
import ProfilePic from '../Components/profilePic.jsx';

const Home = () => {
  return (
   <div
      className="p-6 flex-1"
    >
      <title>Home</title>
      

      <div className="col-span-2 grid pt-1 justify-center " >
        <About />
      </div>


      <div className="col-span-1 items-center justify-center hidden lg:block"> 
        
      </div>

    </div>
  );
};

export default Home;
