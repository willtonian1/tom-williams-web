import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

const BoxTwo = () => {

    const titleStyle = {
        fontFamily: 'Raleway',
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: '1.2',
        color: 'black',

    };


  if(isMobile) {
    return (
      
      <div class="h-[100%] w-full flex flex-col absolute inset-0 items-center justify-center">
        <div class="flex bg-white h-[50%] w-full"></div>
        <div class="flex bg-[rgb(245,245,247)] h-[50%] w-full"></div>
        <h1 class="absolute mx-auto top-10 font-bold" style={titleStyle}>Tom Williams</h1>
        <img src="src\assets\ski.jpg" class="h-[60%] flex mx-auto absolute mt-12"></img>
      </div>
    )
  }

  return (

    <div className="bg-black text-white w-[100%] h-[100%] flex">
   
        <div class="bg-white h-[100%] flex-1 w-[50%]">
        <div class="mt-10" style={titleStyle}>Tom Williams</div>
        </div>

        <div class="bg-[rgb(245,245,247)] w-[50%] flex-1 h-[100%] flex justify-center items-center">
          <img src="src\assets\ski.jpg" class="h-[80%] mx-auto flex"></img>
        </div>
    
    </div>
  );
};




export { BoxTwo } ;
