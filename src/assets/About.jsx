import React from 'react';

const About = () => {


    const aboutStyle = {

      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
      fontFamily: 'Raleway',
      fontWeight: 300,
    }
    return (
      <div className="relative flex items-center h-32 bg-white mt-12 w-[80%] mx-auto" style = {aboutStyle} >
        <p>Hi, my name is Tom. I play rugby, tennis, and I code...</p>
      </div>
    );
  };
  
  export default About;
  
  
  