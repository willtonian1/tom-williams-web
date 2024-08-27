import React from 'react';
import {isMobile} from 'react-device-detect';

const Projects = () => {

    const Projects = {

    }

    const ButtonStyle = {
        fontFamily: 'Raleway',
        textColour: 'white',

    }

    const textStyle = {
        fontFamily: 'Raleway',
        fontWeight: 500,
        lineHeight: 1.2
    }


    if(isMobile) {
        return (
            <div class="w-[100%] flex-col">
                <div class="h-64 w-[100%] bg-black">
                    <br />
                    <h1 style={textStyle} class="text-white">Genetic Algorithm Routing</h1>
                    <div class="h-[60%]"></div>
                    <a href="" class="flex text-sm p-1 mx-auto mt-4 w-[60%] text-white bg-[rgb(0,122,255)] rounded-2xl" style={ButtonStyle}>Click Here!</a>

                </div>
                <br />
                <div class="h-64 w-[100%] bg-[rgb(0,122,255)]"></div>
                <br />
                <div class="h-64 w-[100%] bg-black"></div>
                <br />
                <div class="h-64 w-[100%] bg-[rgb(0,122,255)]"></div>

            </div>

        );
      };


//bg-[rgb(0,122,255)]
    return (
        <div class="h-[100%] w-[100%] flex-col">

        <div class="flex items-center">
            <div class="flex-1 bg-[rgb(245,245,247)] h-64 m-2"></div>
            <div class="flex-1 flex-col bg-black h-64 m-2">
                <h1 class="text-white mt-2" style={textStyle}>Genetic</h1>
                <h1 class="text-white" style={textStyle}>Algorithm</h1>
                <h1 class="text-white" style={textStyle}>Routing</h1>
                <a href="" class="flex text-sm p-1 mx-auto mt-4 w-[60%] text-white bg-[rgb(0,122,255)] rounded-2xl" style={ButtonStyle}>Click Here!</a>
            </div>
        </div>

        <div class="flex items-center">
            <div class="flex-1 bg-black h-64 m-2"></div>
            <div class="flex-1 bg-[rgb(0,122,255)] h-64 m-2"></div>
        </div>
        

        </div>
    );
    };


export default Projects
