import React from 'react';


const Header = () => {

    const headerStyles = {
      fontFamily: 'Raleway',
      fontWeight: 300,
    }
    return (
      <div class="w-[100%] h-10 bg-[rgb(66,66,67)] z-30 text-white flex justify-between items-center p-4" style={headerStyles}>
        <a class="inline text-lg hover:font-bold">TW</a>

        <div class="flex space-x-4">
        <a href="about" class="hover:text-gray-400">About</a>
        <a href="socials" class="hover:text-gray-400">Socials</a>
        <a href="" class="hover:text-gray-400">Projects</a>
        </div>

      </div>
    );
  };
  
  export default Header;
  