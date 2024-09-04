import React from 'react';
import {isMobile} from 'react-device-detect';
import GitHub from "./github.svg"
import LinkedIn from "./linkedin.svg"
import Insta from "./insta.svg"
import CV from "./cv.png"

const Socials = () => {

    const onButtonClick = () => {
        const pdfURL = "./CV.pdf"
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CVTW.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }



return(
    <div class="flex w-[100%] bg-black mx-auto h-8 items-center justify-center">
        <a href="https://www.linkedin.com/in/tom-williams-990536271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" class="inline w-[20%]">
        <div class="w-auto inline-block mt-1"><img src={LinkedIn} class="flex"></img></div>

        </a>
           
        <a href="https://github.com/willtonian1" class="inline w-[20%]">
        <div class="w-auto inline-block mt-1"><img src={GitHub} class="flex"></img></div>
        </a>

        <button class="inline w-[20%]" onClick={onButtonClick}>
        <div class="w-auto inline-block mt-1"><img src={CV} class="flex"></img></div>
        </button>


        <a class="inline w-[20%]">
        <div class="w-auto inline-block mt-1"><img src={Insta} class="flex"></img></div>
        </a>
    </div>
);
}

export default Socials

