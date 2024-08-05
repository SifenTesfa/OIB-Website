import React from 'react';
import logo from "../images/logo.png";
import { FaTelegram } from 'react-icons/fa';
import { AiOutlineFacebook, AiOutlineYoutube, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import Sliding1 from './sliding1';

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#4F57A0]">
        
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-white mb-4">About Us</h3>
            <p className="text-gray-300 text-sm">Oromia Bank S.C began operation on 25 October 2008 with a 
            starting capital of 110 million birr (Br), surpassing the minimum capital requirement by 35 million Br. 
            With its headquarters located in front of Dembel City Centre, near Getu Commercial Center 
            in its own 13 story building on Africa Avenue (Bole Road).</p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-4 md:mb-0">
            <p className='text-white text-[20px] font-bold'>Money Transfer</p>
          <div className="flex h-40 w-40 justify-center items-center">
          <Sliding1 />
        </div>
           
            <div className='w-full'>
           <img src={logo} alt="my logo" className="h-24" /> 

            </div>
            
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="list-none">
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Head Office Address</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Bole, Africa AvenueAddis Ababa Ethiopia</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Tel: +251 -11-51-83-880</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Tel: +251 -11-55-72-115</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Tel: +251 -11-55-72-002</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Tel: +251 -11-55-72-113</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Email info@orointbank.com</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >P.O.Box: 27530/1000Addis Ababa,Ethiopia</li>
              <li className="text-gray-300 hover:text-white text-sm mb-2 block" >Fax: + 251 115 57 2000SWIFT CODE: ORIRETAA</li>
              
            </ul>
          </div>
        </div>
       
        <p className='mb-2  text-white'>Follow Us</p>
        <div className='flex'>
       < AiOutlineFacebook className="h-5 w-5  mr-4 text-white" aria-hidden="true" />
       < AiOutlineYoutube className="h-5 w-5  text-white  mr-4" aria-hidden="true" />
       < AiOutlineLinkedin className="h-5 w-5  text-white  mr-4" aria-hidden="true" />
       < AiOutlineTwitter className="h-5 w-5  text-white  mr-4" aria-hidden="true" />
       < FaTelegram className="h-5 w-5  text-white  mr-4" aria-hidden="true" />

       </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-300 text-sm text-center">&copy; 2023 Bank of Oromia. All rights reserved.</p>
        </div>
      </div>
    </footer></div>
  );
};

export default Footer;