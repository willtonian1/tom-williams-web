import React from 'react';

const BoxTwo = () => {

    const titleStyle = {
        fontFamily: 'Raleway',
        fontWeight: 300,
        fontSize: '1rem',
        lineHeight: '1.2',
        color: 'white',

    };


  return (

    <div className="bg-black text-white w-[100%] h-[100%] relative flex">

        <div class="flex-1 bg-[rgb(177,227,1)] h-[100%]">
        <div class="mt-10" style={titleStyle}>Tom Williams</div>

        </div>

        <div class="flex-1 bg-[rgb(0,179,130)]  h-[100%]">
        </div>
        


    </div>
  );
};




export { BoxTwo } ;
