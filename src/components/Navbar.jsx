import React,{useState} from'react'
import {AiOutlineClose,AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import logo from "../images/logo.png"

const Navbar= () => {
    
const [nav, setNav]=useState(false)
const handleNav=()=>{
    setNav(!nav)
} 
    return(
      
        <div className='fixed flex justif-between item-center h-17 w-full mx-auto px-4 text-[#4F57A0] bg-[#e6e9e2]'>
             <div className='w-full flex md:flex'>
           <img src={logo} alt="my logo" className="h-24 md:flex" /> 

            </div>
           
        
           <ul className='h-18  hidden md:flex'>
           <nav className='flex pr-8 '>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>
                <button className='hover:opacity-50 cursor-default'>
                 <a href="/"> Home </a></button> </li> 
                </ul></nav>
          <nav className='flex '>
            <ul className='flex pr-8 items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>

                <button className='hover:opacity-50 cursor-default'>About Us</button>
                <div className='absolute top-7 -left-48 transition
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
          
         
            <ul className='flex pr-8 items-center justify-center font-semibold'>
                <li className='relative group px-4 py-7'>

                <button className='hover:opacity-50 cursor-default'>Conventional</button>
                <div className='absolute top-7 -left-48 transition
                group-hover:translate-y-5 translate-y-0
                opacity-0 invisible group-hover:opacity-100
                group-hover:visible duration-500 ease-in-out
                group-hover:transform z-50 min-w-[1000px]
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
          <nav className='flex pr-8'>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>

                <button className='hover:opacity-50 cursor-default'>Interest Free</button>
                <div className='absolute top-7 -left-48 transition
                group-hover:translate-y-5 translate-y-0
                opacity-0 invisible group-hover:opacity-100
                group-hover:visible duration-500 ease-in-out
                group-hover:transform z-50 min-w-[1000px]
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
           
          <nav className='flex pr-6'>
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
         <nav className='flex pr-8'>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-3'>

                <button className='hover:opacity-50 cursor-default'>Ways To Bank</button>
                <div className='absolute top-10 -left-48 transition
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
                                <a href="/" className='block p-2 -mx-2
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
         <nav className='flex pr-12'>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='relative group px-3 py-2'>
                <button className='hover:opacity-50 cursor-default'>Contact</button> </li> 
                </ul></nav>
            <button className='p-4 m-4  rounded-2xl text-[#ffffff] bg-[#4F57A0] '>Online Banking</button>
            < AiOutlineSearch className="hover:scale-150 duration-200 h-11 w-11 mt-6 mr-4 text-[#4F57A0]  " aria-hidden="true" />
           </ul>
           <div onClick={handleNav} className='block md:hidden'>
            {!nav ?<AiOutlineClose  size={20}/>: <AiOutlineMenu size={20}/>}
           </div>
           <div className={!nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-purple-700 bg-[#4F57A0] ease-in-out duration-500  md:hidden':'fixed left-[-100%] block md:hidden  '}>
           <h1 className='w-full text-3xl font-bold m-3 text-[#ffffff]'>Oromia Bank</h1> 
           <ul className=' uppercase p-3 block md:hidden'>
            <li className='p-2  border-b border-white-600  text-[#ffffff]'>Home</li>
            <li className='p-2 border-b border-white-600  text-[#ffffff]'>About Us</li>
            <li className='p-2 border-b border-white-600  text-[#ffffff]'>Conventional</li>
            <li className='p-2 border-b border-white-600  text-[#ffffff]'>Interest Free</li>
            <li className='p-2 border-b border-white-600  text-[#ffffff]'>Way To Bank</li>
            <li className='p-2 border-b border-white-600  text-[#ffffff]'>Contact</li>
            <li className='p-2  border-b border-white-600 text-[#ffffff]'>International</li>
            <button className='p-2 m-2  rounded-0xl text-[#4F57A0] bg-[#ffffff] '>Online Banking</button>
            < AiOutlineSearch className="h-10 w-10 pl-4 mt-2 mr-4 text-[#fefefe]" aria-hidden="true" />
           </ul>
           </div>
        </div> 
        
    )
}
export default Navbar