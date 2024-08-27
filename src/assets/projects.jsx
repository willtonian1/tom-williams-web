import React from 'react';


const Projects = () => {

    const Projects = {

    }

    const ButtonStyle = {
        fontFamily: 'Raleway',
        textColour: 'white',

    }

    const textStyle = {
        fontFamily: 'Raleway',
        fontWeight: 300,
        textColour: 'white',
        lineHeight: 1.2
    }
//bg-[rgb(0,122,255)]
return (
    <div class="h-[100%] w-[100%] flex-col">

    <div class="flex items-center">
        <div class="flex-1 bg-[rgb(245,245,247)] h-32 m-2 rounded"></div>
        <div class="flex-1 flex-col bg-black h-32 m-2 rounded">
            <h1 class="text-white mt-2" style={textStyle}>Genetic</h1>
            <h1 class="text-white" style={textStyle}>Algorithm</h1>
            <h1 class="text-white" style={textStyle}>Routing</h1>
            <a href="" class="flex text-sm p-1 mx-auto mt-4 w-[60%] text-white bg-[rgb(0,122,255)] rounded-2xl" style={ButtonStyle}>Click Here!</a>
        </div>
    </div>

    <div class="flex items-center">
        <div class="flex-1 bg-black h-32 m-2 rounded"></div>
        <div class="flex-1 bg-[rgb(245,245,247)] h-32 m-2 rounded"></div>
    </div>
    

    </div>
);
};


export default Projects