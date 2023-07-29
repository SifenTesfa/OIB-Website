import React,{useState,Fragment} from'react'
import {AiOutlineClose,AiOutlineMenu,AiOutlineSearch} from 'react-icons/ai'
import logo from "../images/logo.png"
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Navbar= () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
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
           <Menu as="div" className="relative inline-block text-left">
      <div>
            <li className='p-2 pt-10 ml-2 '><Menu.Button className="inline-flex  gap-x-1.5  px-3 py-2    ring-gray-300 hover:bg-gray-50">
          Home</Menu.Button></li></div></Menu>
            <li className='p-2 pt-8 ml-2  '>
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  gap-x-1.5  px-3 py-2    ring-gray-300 hover:bg-gray-50">
          About Us
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Who We Are
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Corporte Governance
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Board Of Directors
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Giving Back
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Bank Achievement
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Annual Reports
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 News And Updates
                </a>
              )}

            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
            </li>
           
            <li className='p-4 pt-8 ml-2 '><Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  gap-x-1.5  px-3 py-2    ring-gray-300 hover:bg-gray-50">
          Conventional
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-80 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex"> <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 text-sm' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 SAVING ACCOUNTS
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 OroSaving
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 OroSaving Plus
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 OroInterest Plus
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Fixed Time Account
                </a>
              )}

            </Menu.Item>
            <Menu.Item className='flex'>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Annual Reports
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 News And Updates
                </a>
              )}

            </Menu.Item></div>
       <div> <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 text-sm' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 SPECIAL ACCOUNTS
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Handhura Children
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Sinqe Women
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Hayu Education
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 OroRetirment Saving
                </a>
              )}

            </Menu.Item>
            <Menu.Item className='flex'>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Diaspora Account
                </a>
              )}

            </Menu.Item>
            </div>
            <div> <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 text-sm' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
               CHECKING BUSINESS ACCOUNT
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
               OroCurent Account
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Salary Solution Account
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Investment Solution Account
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Provident Fund Account
                </a>
              )}

            </Menu.Item>
            
            </div>

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </li>
    <li className='p-4 ml-2 pt-6 '><Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  gap-x-1.5  px-3 py-2    ring-gray-300 hover:bg-gray-50">
          Interest Free
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-1580  origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex"> <div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 WADI'AH SAVING ACCOUNTS
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Wadi'ah Saving
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Amana(Demand)
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Labbaik-Wadi'ah Saving
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Mudarabah-Investment
                </a>
              )}

            </Menu.Item>
            </div>
            <div>
            <Menu.Item >
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 WADI'AH SPECIAL SAVING ACCOUNTS
                </a>
              )}

            </Menu.Item>
           
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Sinqe Women's Wadi'ah Saving
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Handhura Children's Wadi'ah Saving
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Wadi'ah Retrirement Accounts
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Hayyu Wadi'ah Education Account
                </a>
              )}

            </Menu.Item>
            </div>
            <div>
            <Menu.Item >
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                FINANCING SERVICES
                </a>
              )}

            </Menu.Item>
           
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Murabaha Financing
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Interest Free Export Financing 
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Ijarah Financing
                </a>
              )}

            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Salam Financing
                </a>
              )}

            </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Transition>
    </Menu></li>
            <li className='p-2 pt-8 ml-2 '><Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  gap-x-1.5  px-3 py-2    ring-gray-300 hover:bg-gray-50">
        International
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Trade Finance
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Money Transfer
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Correspondent Banks
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu></li>
            <li className='p-4 ml-2 pt-5'>
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex  gap-x-1.5  px-3 py-2    ring-gray-300 hover:bg-gray-50">
        Way To Bank
          <ChevronDownIcon className="-mr-3 h-7 w-7 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Card Banking 
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Mobile Banking
                </a>
              )}
              </Menu.Item>
              <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Internet Banking
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Agent Banking
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 ATM Banking
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
               {({ active }) => (
                <a
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Branches
                </a>
              )}
            </Menu.Item>
           
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu></li>
            <li className='p-2 ml-2 pt-9'>Contact</li>
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