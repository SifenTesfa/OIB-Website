import React, { useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";


const SearchPage = () => {
  const [nav, setNav] = useState(false);
 

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false); // Close the search overlay
    // Perform any additional actions here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {nav && ( // Render the search overlay only when `nav` is true
        <div className="fixed left-0 top-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Search Page</h1>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Search
              </button>
              <div onClick= {handleClose}  className="mt-8 ml-64 mb-96">  
          <AiOutlineClose size={30} /></div>
         
            </form>
          </div>
        </div>
      )}
      <div onClick={nav ? handleClose : handleNav} className="mt-0">
          
          <AiOutlineSearch size={40} />
        
      </div>
    </div>
  );
};

export default SearchPage;