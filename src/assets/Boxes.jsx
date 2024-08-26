import React, { useState, useEffect } from 'react';
import {isMobile} from 'react-device-detect';

const BoxTwo = () => {

    const titleStyle = {
        fontFamily: 'Raleway',
        fontWeight: 300,
        fontSize: '1rem',
        lineHeight: '1.2',
        color: 'black',

    };


  if(isMobile) {
    return (
      <div>Hi</div>
    )
  }

  return (

    <div className="bg-black text-white w-[100%] h-[100%] flex">
   
        <div class="bg-white h-[100%] flex-1 w-[50%]">
        <div class="mt-10" style={titleStyle}>Tom Williams</div>
        </div>

        <div class="bg-[rgb(245,245,247)] w-[50%] flex-1 h-[100%]">
        </div>
    
    </div>
  );
};




export { BoxTwo } ;
