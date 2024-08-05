import React, { useState } from 'react';
import {AiOutlineClose,AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import logo from "../images/logo.png"

const Navbar= () => {
 

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };
const [nav, setNav]=useState(false)
const handleNav=()=>{
    setNav(!nav)
} 
    return(
      
        <div className='fixed z-20 flex justif-between item-center h-17 w-full mx-auto px-4 text-[#4F57A0] bg-[#e6e9e2]'>
             <div className='w-full flex md:flex'>
           <img src={logo} alt="my logo" className="h-24 md:flex" /> 

            </div>
           
        
           <ul className='h-18  hidden md:flex'>
           <nav className='flex pr-4 '>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>
                <button className='hover:opacity-50 cursor-default'>
                 <a href="/"> Home </a></button> </li> 
                </ul></nav>
          <nav className='flex  '>
            <ul className='flex pr-4 items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>

                <button className='hover:opacity-50 cursor-default whitespace-nowrap'>About Us</button>
                <div className='absolute top-2 -left-48 transition
                group-hover:translate-y-5 translate-y-0
                opacity-0 invisible group-hover:opacity-100
                group-hover:visible duration-500 ease-in-out
                group-hover:transform z-50 min-w-[360px]
                transform'>
                  <div className='relative top-6 p-6 bg-white
                  rounded-xl shadow-xl w-full'>
                    <div className='w-10 h-10 bg-white transform
                    rotate-45 absolute top-0 z-0
                    translate-x-0 transition-transform
                    group-hover:translate-x-[12rem]
                    duration-500 ease-in-out rounded-sm'>

                    </div>
                    <div className='relative z-10'>
                         <div className='grid grid-cols-2 gap-6'>
                        <div>
                      
                            <ul className=' text-[15px]'>
                              <li>
                                <a href="/who" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Who We Are
                                </a>

                              </li>
                              <li>
                                <a href="/corporateg" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Corporte Governance
                                </a>

                              </li>
                              <li>
                                <a href="/board" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Board Of Directors
                                </a>

                              </li>
                              <li>
                                <a href="/giving" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Giving Back
                                </a>

                              </li>
                            </ul>
                          
                        </div>
                   <div>
                  
                            <ul className=' text-[15px]'>
                              <li>
                                <a href="/banka" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Bank Achievement
                                </a>

                              </li>
                              <li>
                                <a href="/" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Annual Reports
                                </a>

                              </li>
                              <li>
                                <a href="/" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>News and Updates
                                </a>

                              </li>
                            </ul>
                   </div>
                          </div>   
                    </div>
                  </div>
            
                </div>
                </li>
            </ul>
          
         
            <ul className='flex pr-4 items-center justify-center font-semibold'>
                <li className='relative group px-4 py-7'>

                <button className='hover:opacity-50 cursor-default'>Conventional</button>
                <div className='absolute top-7 -left-48 transition
                group-hover:translate-y-5 translate-y-0
                opacity-0 invisible group-hover:opacity-100
                group-hover:visible duration-500 ease-in-out
                group-hover:transform z-50 min-w-[900px]
                transform'>
                  <div className='relative top-6 p-6 bg-white
                  rounded-xl shadow-xl w-full'>
                    <div className='w-10 h-10 bg-white transform
                    rotate-45 absolute top-0 z-0
                    translate-x-0 transition-transform
                    group-hover:translate-x-[12rem]
                    duration-500 ease-in-out rounded-sm'>

                    </div>
                    
                    <div className='relative z-10 '>
                         <div className='grid grid-cols-5 gap-1'>
                        <div>
                          <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>SAVING ACCOUNT </p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/orosaving" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>OroSaving
                                </a>

                              </li>
                              <li>
                                <a href="/orosavingplus" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>OroSaving Plus
                                </a>

                              </li>
                              <li>
                                <a href="/orointerest" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>OroInterest Plus
                                </a>

                              </li>
                              <li>
                                <a href="/fixedtime" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Fixed Time Account
                                </a>

                              </li>
                            </ul>
                          
                        </div>
                        
                        <div>
                        <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>SPECIAL ACCOUNTS</p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/handhura" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Handhura Children
                                </a>

                              </li>
                              <li>
                                <a href="/sinq" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Sinqe Women
                                </a>

                              </li>
                              <li>
                                <a href="/hayu" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Hayu Education
                                </a>

                              </li>
                              <li>
                                <a href="/ororetirment" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>OroRetirment Saving
                                </a>

                              </li>
                              <li>
                                <a href="/diaspora" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Diaspora Account
                                </a>

                              </li>
                            </ul>
                        </div> 
                       <div>
                        <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>CHECKING BUSINESS ACCOUNT</p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/orocurrent" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>OroCurrent Account
                                </a>

                              </li>
                              <li>
                                <a href="/salary" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Salary Solution Account
                                </a>

                              </li>
                              <li>
                                <a href="/investment" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Investment Solution Account
                                </a>

                              </li>
                              <li>
                                <a href="/provident" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Provident Fund Account
                                </a>

                              </li>
                              
                            </ul>
                      

                       </div>
                       
                       <div>
                        <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>LOAN AND ADVANCES</p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/personal" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Personal Loans
                                </a>

                              </li>
                              <li>
                                <a href="/business" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Business Loans
                                </a>

                              </li>
                              <li>
                                <a href="/vahicle" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Vehicle/Auto Loans
                                </a>

                              </li>
                        
                            </ul>
                      

                       </div>
                       <div>
                        <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>OTHERS</p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/bank" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Bank Guarantee
                                </a>

                              </li>
                              <li>
                                <a href="/lock" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Lock Box 
                                </a>

                              </li>
                              <li>
                                <a href="/online" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Online Banking
                                </a>

                              </li>
                              <li>
                                <a href="/orocash" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>OroCash
                                </a>

                              </li>
                              
                            </ul>
                      

                       </div>
                          </div>  
                           
                    </div>
                    
                  </div>
      
                </div>
                </li>
            </ul>
          </nav>
          <nav className='flex pr-4'>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>

                <button className='hover:opacity-50 cursor-default whitespace-nowrap'>Interest Free</button>
                <div className='absolute top-2 -left-48 transition
                group-hover:translate-y-5 translate-y-0
                opacity-0 invisible group-hover:opacity-100
                group-hover:visible duration-500 ease-in-out
                group-hover:transform z-50 min-w-[800px]
                transform'>
                  <div className='relative top-6 p-6 bg-white
                  rounded-xl shadow-xl w-full'>
                    <div className='w-10 h-10 bg-white transform
                    rotate-45 absolute top-0 z-0
                    translate-x-0 transition-transform
                    group-hover:translate-x-[12rem]
                    duration-500 ease-in-out rounded-sm'>

                    </div>
                    
                    <div className='relative z-10 '>
                         <div className='grid grid-cols-5 gap-3'>
                        <div>
                          <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>WADI'AH SAVING ACCOUNTS </p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/wadiahsaving" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Wadi'ah Saving
                                </a>

                              </li>
                              <li>
                                <a href="/amana" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Amana(Demand)
                                </a>

                              </li>
                              <li>
                                <a href="/labbaik" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Labbaik-Wadi'ah Saving
                                </a>

                              </li>
                              <li>
                                <a href="/mudarabah" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Mudarabah-Investment
                                </a>

                              </li>
                            </ul>
                          
                        </div>
                        
                        <div>
                        <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>WADI'AH SPECIAL SAVING ACCOUNTS</p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/sinqwomen" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Sinqe Women's Wadi'ah Saving
                                </a>

                              </li>
                              <li>
                                <a href="/handhurachild" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Handhura Children's Wadi'ah Saving
                                </a>

                              </li>
                              <li>
                                <a href="/wadiahretir" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Wadi'ah Retirement Accounts
                                </a>

                              </li>
                              <li>
                                <a href="/hayyu" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Hayyu wadi'ah Education Account
                                </a>

                              </li>
                              
                            </ul>
                        </div> 
                       <div>
                        <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>FINANCING SERVICES</p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/murabahaf" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Murabaha Financing
                                </a>

                              </li>
                              <li>
                                <a href="/interestf" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Interest Free Export Financing
                                </a>

                              </li>
                              <li>
                                <a href="/ijarah" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Ijarah Financing 
                                </a>

                              </li>
                              <li>
                                <a href="/salam" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Salam Financing
                                </a>

                              </li>
                              
                            </ul>
                      

                       </div>
                       
                       <div>
                        <p className='uppercase tracking-wider
                          text-gray-500 font-medium text-[13px]'>OTHERS SERVICES</p>
                            <ul className='mt-3 text-[15px]'>
                              <li>
                                <a href="/bankg" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Bank Guarantee Services
                                </a>

                              </li>
                              <li>
                                <a href="/money" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Money Transfer Services
                                </a>

                              </li>
                              <li>
                                <a href="/partnership" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Partnership-Based Financing
                                </a>

                              </li>

                              <li>
                                <a href="/trade" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Trade Finance
                                </a>

                              </li>
                              
                              
                            </ul>
                      

                       </div>
                          </div>  
                           
                    </div>
                    
                  </div>
      
                </div>
                </li>
            </ul>
          </nav>
           
          <nav className='flex pr-4'>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-8'>

                <button className='hover:opacity-50 cursor-default'>International</button>
                <div className='absolute top-7 -left-48 transition
                group-hover:translate-y-5 translate-y-0
                opacity-0 invisible group-hover:opacity-100
                group-hover:visible duration-500 ease-in-out
                group-hover:transform z-50 min-w-[160px]
                transform'>
                  <div className='relative top-6 p-6 bg-white
                  rounded-xl shadow-xl w-full'>
                    <div className='w-10 h-10 bg-white transform
                    rotate-45 absolute top-0 z-0
                    translate-x-0 transition-transform
                    group-hover:translate-x-[12rem]
                    duration-500 ease-in-out rounded-sm'>

                    </div>
                    <div className='relative z-10'>
                         <div className='grid grid-cols-2 gap-6'>
                        <div>
                      
                            <ul className=' text-[15px]'>
                              <li>
                                <a href="/trade" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Trade Finance
                                </a>

                              </li>
                              <li>
                                <a href="/money" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Money Transfer
                                </a>

                              </li>
                              <li>
                                <a href="/coorespondent" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Correspondent Banks
                                </a>

                              </li>
                              
                            </ul>
                          
                        </div>
                   
                          </div>   
                    </div>
                  </div>
            
                </div>
                </li>
            </ul>
         </nav>
         <nav className='flex pr-4'>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-3'>

                <button className='hover:opacity-50 cursor-default whitespace-nowrap'>Ways To Bank</button>
                <div className='absolute top-3 -left-48 transition
                group-hover:translate-y-5 translate-y-0
                opacity-0 invisible group-hover:opacity-100
                group-hover:visible duration-500 ease-in-out
                group-hover:transform z-50 min-w-[360px]
                transform'>
                  <div className='relative top-6 p-6 bg-white
                  rounded-xl shadow-xl w-full'>
                    <div className='w-10 h-10 bg-white transform
                    rotate-45 absolute top-0 z-0
                    translate-x-0 transition-transform
                    group-hover:translate-x-[12rem]
                    duration-500 ease-in-out rounded-sm'>

                    </div>
                    <div className='relative z-10'>
                         <div className='grid grid-cols-2 gap-6'>
                        <div>
                      
                            <ul className=' text-[15px]'>
                              <li>
                                <a href="/card" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Card Banking
                                </a>

                              </li>
                              <li>
                                <a href="/mobile" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Mobile Banking
                                </a>

                              </li>
                              <li>
                                <a href="/internet" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Internet Banking
                                </a>

                              </li>
                              
                            </ul>
                          
                        </div>
                   <div>
                  
                            <ul className=' text-[15px]'>
                              <li>
                                <a href="/agent" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Agent Banking
                                </a>

                              </li>
                              <li>
                                <a href="/atm" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>ATM Banking
                                </a>

                              </li>
                              <li>
                                <a href="/" className='block p-2 -mx-2
                                rounded-lg
                                hover:bg-gradient-to-br
                                hover:from-indigo-50
                                hover:to-pink-50
                                hover:via-blue-50 transition
                                ease-in-out duration-300 
                                text-gray-800 font-semibold
                                hover:text-indigo-600'>Branches
                                </a>

                              </li>
                            </ul>
                   </div>
                          </div>   
                    </div>
                  </div>
            
                </div>
                </li>
            </ul>
         </nav>
         <nav className='flex pr-2'>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>
                <button className='hover:opacity-50 cursor-default'><a href="/contact"> Contact </a></button> </li> 
                </ul></nav>
            <button className='p-4 m-4  rounded-2xl text-[#ffffff] bg-[#4F57A0] whitespace-nowrap '>Online Banking</button>
           <a href="/searchpage"> < AiOutlineSearch className="hover:scale-150 duration-200 h-6 w-6 mt-6 mr-4 text-[#4F57A0]  " aria-hidden="true" /> </a>
           </ul>
           <div onClick={handleNav} className='block mt-8 md:hidden'>
            {!nav ?<AiOutlineClose  size={20}/>: <AiOutlineMenu size={20}/>}
           </div>
           <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-purple-700 bg-[#4F57A0] ease-in-out duration-500  md:hidden':'fixed left-[-100%] block md:hidden  '}>
           <h1 className='w-full text-3xl font-bold m-3 text-[#ffffff]'>Oromia Bank</h1> 
           <ul className=' p-3 block md:hidden'>
           <li className='p-2  border-b border-white-600 text-[#ffffff]'> <a href="/"> Home </a></li>
               
               <nav className="relative">
        <button
          className="flex items-center justify-between p-2 border-b border-white-600 text-white"
          onClick={toggleDropdown3}
        >
          About Us
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen3 ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
        {isOpen3 && (
          <ul className="absolute z-10 p-2 mt-2 space-y-4 w-[200px] bg-white text-black">
            <div className="grid grid-cols-1 gap-4 text-sm lowercase">
            <li className="border-b border-gray-200">
<ul className="pl-1 space-y-2">
<li>
<a href="/who">Who We Are</a>
</li>
<li>
<a href="/corporateg">Corporete Governance</a>
</li>
<li>
<a href="/board">Board Of Directors</a>
</li>
<li>
<a href="/giving">Giving Back</a>
</li>
<li>
<a href="/bank">Bank Achievement</a>
</li>
<li>
<a href="/fixedtime">Annual reporst</a>
</li>
<li>
<a href="/fixedtime">News and Updates</a>
</li>
</ul>
</li>


            </div>
          </ul>
        )}
      </nav>
            <div>
      <nav className="relative">
        <button
          className="flex items-center justify-between p-2 border-b border-white-600 text-white"
          onClick={toggleDropdown1}
        >
          Conventional
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen1 ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
        {isOpen1 && (
          <ul className="absolute z-10 p-2 mt-2 space-y-4 w-[365px] bg-white text-black">
            <div className="grid grid-cols-5 gap-4 text-sm lowercase">
            <li className="border-b border-gray-200">
<a href="#"> SAVING ACCOUNTS</a>
<ul className="pl-1 space-y-2">
<li>
<a href="/orosaving">OroSaving</a>
</li>
<li>
<a href="/orosavingplus">OroSaving plus</a>
</li>
<li>
<a href="/orointerest">OroInterest plus</a>
</li>
<li>
<a href="/fixedtime">Fixed Time Account</a>
</li>
</ul>
</li>
<li className="border-b border-gray-200">
<a href="#"> SPECIAL ACCOUNTS</a>
<ul className="pl-1 space-y-2">
<li>
<a href="/handhura"> Handhurah Children  </a>
</li>
<li>
<a href="/sinq">Sinqe Women </a>
</li>
<li>
<a href="/hayu">Hayyu Education </a>
</li>
<li>
<a href="/ororetirment">OroRetirment Saving
</a>
</li>
<li>
<a href="/diaspora">Diaspora Account
</a>
</li>
</ul>
</li>
<li className="border-b border-gray-200">
<a href="#">CHECKING BUSINESS ACCOUNT</a>
<ul className="pl-1 space-y-2">
<li>
<a href="orocurrent">Orocurrent Account</a>
</li>
<li>
<a href="salary">Salary Solution Account</a>
</li>
<li>
<a href="investment">Investment Solution Account</a>
</li>
<li>
<a href="provident">Provident Fund Account</a>
</li>
</ul>
</li>
<li>
<a href="#">LOAN AND ADVANCES</a>
<ul className="pl-1 space-y-2">
<li>
<a href="/personal">Personal Loan</a>
</li>
<li>
<a href="/business">Business Loan</a>
</li>
<li>
<a href="/vahicle">Vahicle/Auto Loan</a>
</li>
<li>
<a href="/business">Diaspora Mortgage Loan</a>
</li>
</ul>
</li>
<li>
<a href="#">OTHERS </a>
<ul className="pl-1 space-y-2">
<li>
<a href="bank">Bank Guarantee</a>
</li>
<li>
<a href="lock">Lock Box</a>
</li>
<li>
<a href="/online">Online Banking</a>
</li>
<li>
<a href="orocash">OroCash</a>
</li>
</ul>
</li>
            </div>
          </ul>
        )}
      </nav>
      <nav className="relative">
        <button
          className="flex items-center justify-between p-2 border-b border-white-600 text-white"
          onClick={toggleDropdown2}
        >
          Interest Free
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen2 ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
        {isOpen2 && (
          <ul className="absolute z-10 p-2 mt-2 space-y-4 w-[350px] bg-white text-black">
            <div className="grid grid-cols-4 gap-4 text-sm lowercase">
            <li className="border-b border-gray-200">
<a href="#">WADI’AH SAVING ACCOUNTS</a>
<ul className="pl-4 space-y-2">
<li>
<a href="/wadiahsaving">Wadi’ah Saving</a>
</li>
<li>
<a href="/amana">Amana (Demand)</a>
</li>
<li>
<a href="/labbaik">Labbaik-Wadi’ah Saving</a>
</li>
<li>
<a href="/mudarabah">Mudarabah-Investment</a>
</li>
</ul>
</li>
<li className="border-b border-gray-200">
<a href="#">WADI’AH SPECIAL SAVING ACCOUNTS</a>
<ul className="pl-4 space-y-2">
<li>
<a href="/sinqwomen">Sinqe Women Wahdi'ah Saving</a>
</li>
<li>
<a href="handhurachild">Handhurah Children Wahdi'ah Saving</a>
</li>
<li>
<a href="wadiahretir">Wahdi'ah Retirement Accounts</a>
</li>
<li>
<a href="/hayyu">Hayyu Wahdi'ah Education Accounts</a>
</li>
</ul>
</li>
<li className="border-b border-gray-200">
<a href="#">FINANCING SERVICES</a>
<ul className="pl-4 space-y-2">
<li>
<a href="/murabahaf">Murabaha Financing</a>
</li>
<li>
<a href="/interestf">Interest Free Export Financing</a>
</li>
<li>
<a href="/ijarah">Ijarah Financing</a>
</li>
<li>
<a href="/salam">Salam Financing</a>
</li>
</ul>
</li>
<li>
<a href="#">OTHERS SERVICES</a>
<ul className="pl-4 space-y-2">
<li>
<a href="/bankg">Bank Guarantee Service</a>
</li>
<li>
<a href="/money">Money Transfer Service</a>
</li>
<li>
<a href="/partnership">Partnership based financing</a>
</li>
<li>
<a href="/trade">trade Financing</a>
</li>
</ul>
</li>
            </div>
          </ul>
        )}
      </nav>
      <nav className="relative">
        <button
          className="flex items-center justify-between p-2 border-b border-white-600 text-white"
          onClick={toggleDropdown4}
        >
          International
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen4 ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
        {isOpen4 && (
          <ul className="absolute z-10 p-2 mt-2 space-y-4 w-[200px] bg-white text-black">
            <div className="grid grid-cols-1 gap-4 text-sm lowercase">
            <li className="border-b border-gray-200">
<ul className="pl-1 space-y-2">
<li>
<a href="/orosaving">OroSaving</a>
</li>
<li>
<a href="/orosavingplus">OroSaving plus</a>
</li>
<li>
<a href="/orointerest">OroInterest plus</a>
</li>
<li>
<a href="/fixedtime">Fixed Time Account</a>
</li>
</ul>
</li>


            </div>
          </ul>
        )}
      </nav>

      <nav className="relative">
        <button
          className="flex items-center justify-between p-2 border-b border-white-600 text-white"
          onClick={toggleDropdown5}
        >
          Ways To Bank
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen5 ? 'rotate-180' : ''
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 7.293a1 1 0 0 1 1.414 0L10 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
        {isOpen5 && (
          <ul className="absolute z-10 p-2 mt-2 space-y-4 w-[200px] bg-white text-black">
            <div className="grid grid-cols-1 gap-4 text-sm lowercase">
            <li className="border-b border-gray-200">
<ul className="pl-1 space-y-2">
<li>
<a href="/card">Card Banking</a>
</li>
<li>
<a href="/mobile">Mobile banking</a>
</li>
<li>
<a href="/internet">internet banking</a>
</li>
<li>
<a href="/agent">Agent banking</a>
</li>
<li>
<a href="/atm">atm banking</a>
</li>
<li>
<a href="/branches">branches</a>
</li>
</ul>
</li>


            </div>
          </ul>
        )}
      </nav>
    </div>
            <li className='p-2  border-b border-white-600 text-[#ffffff]'> <a href="/contact"> Contact </a></li>
            <button className='p-2 m-2  rounded-0xl text-[#4F57A0] bg-[#ffffff] '>Online Banking</button>
            <a href="/searchpage">  < AiOutlineSearch className="h-10 w-10 pl-4 mt-2 mr-4 text-[#fefefe]" aria-hidden="false" /> </a>
           </ul>
           </div>
        </div> 
        
    )
}
export default Navbar