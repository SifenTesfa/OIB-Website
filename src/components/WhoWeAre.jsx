import React from 'react';
import Typed from 'react-typed';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WhoS2 from './WhoS2';
import WhoS1 from './WhoS1';
import rhero from '../images/rhero.jpg'
import mission from '../images/mission.png'
import vision from '../images/vision.png'
import value from '../images/value.png'
import office from '../images/office.jpg'

const WhoWeAre = () => {
   
        return (
            
     <div> 
      <div className='w-full h-[90vh] '>
   <img src={rhero} alt='hero' className="w-full h-full pb-12 md:flex object-cover" />
   <div className='max-w-[1140px] m-auto'>
    <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 z-10">About Us</h1>
   <p class="mt-5 mb-5  text-lg text-white opacity-70">Leave us a little info, and we’ll be in touch.</p>
   <div>
   <a class="mt-8 px-12 py-3 bg-gradient-to-r from-[#88cf09]  to-[#4F57A0]  text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                href="/">Contact Us</a>
                </div>
                </div>
   </div>
    </div>
      
      <div className="flex pt-24 flex-wrap">
       <div className='bg-white p-6'>
  </div> 
       <div className="flex flex-wrap">
  
  <div className="w-full sm:w-1/2 p-6 mt-20">
    <img src={office} alt='inside' className="w-full h-auto object-cover" />
  </div>
  
  <div className="w-full sm:w-1/2 px-1 bg-[#ffffff]">
  <p className='md:text-5xl sm:text-2xl text-xl font-bold mt-24 text-[#88cf09] px-1'>
LEARN HOW OUR PAST IS SHAPING OUR FUTURE</p> 
                  <Typed className='md:text-5xl h-56 text-[#4F57A0] sm:text4xl text-xl font-bold p-1'
                  strings={['Past, present and future']} 
                  typedSpeed={120}
                  backSpeed={140}
                  loop/> 
   <p className=" text-base text-[#4F57A0] leading-relaxed mb-4 mt-4">Since the establishment of Oromia Bank on September 18, 2008, OB obtained a banking business license, we’ve drawn on our financial strength to serve customers. We also recognize that this past year has fundamentally changed banking by accelerating the shift to digital products and services. We’re positioned well for this future, having launched new tools – like our Oroclick and Mobile Banking app – to complement our 500 branch footprint.
    </p>
    <p className=" text-base text-[#4F57A0] leading-relaxed mb-4">
Oromia Bank S.C. (OB) was established in accordance with the pertinent laws, regulations and the 1960 Commercial Code of Ethiopia, by the Monetary and Banking Proclamation No. 83/1994 and by the Licensing and Supervision of Banking Proclamation No. 592/2008.</p>
  </div>
</div>
          
<div className='bg-white p-6'>
  </div>       
          
  <div className="flex flex-wrap items-center">
  <div className="bg-white w-full sm:w-1/2 p-6">
    <h2 className="text-4xl font-bold mb-4 text-[#4F57A0]">Modest beginnings, steady growth</h2>
    <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
      Through the years, our presence has grown tremendously. After opening the first Bole branch on October 25, 2008, in Addis Ababa – Africa Avenue, we continued to expand by establishing over 500 branches across the nation. But growth, as a company, is more than just brick-and-mortar. It’s a reflection of our performance and our ability to earn the public’s trust. Today, we continue to be recognized as a top-performing bank with a paid-up capital of Birr 5.4 Billion.
    </p>
  </div>
  <div className="w-full sm:w-1/2 p-6">
    <WhoS2 className="w-full h-auto object-cover" />
  </div>
</div>
 </div>
  
 <div className=' mt-16 grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
<div className='bg-white rounded-xl shadow-2xl '>
  <div className='p-8'>
<img src={mission} alt='mission' className='w-70 h-70 p-4  rounded-lg mt-[-5rem]'/>
<h3 className='font-bold text-[#88cf09]  text-2xl my-6'>OUR MISSION</h3>
<p className='text-[#4F57A0]  '>We are committed in providing full-fledged and best quality commercial banking services within the pertinent regulatory requirement with due diligence to sustainable business while empowering the missing middle and discharging social responsibility by engaging highly qualified, skilled, motivated and disciplined employees and state-of-the- art information technology, adding real value to the shareholders’ interest and win the public trust.</p>
  </div>
  
  </div>
  <div className='bg-white rounded-xl shadow-2xl '>
  <div className='p-8'>
<img src={value} alt='value' className='w-70 h-70 p-4  rounded-lg mt-[-5rem]'/>
<h3 className='font-bold text-[#88cf09]  text-2xl my-6'>CORE VALUES</h3>
<p className='text-[#4F57A0]  '>Corporate values of OB reflects the deeply pursued philosophy of operational
excellence, believes, ground of typical sparkling culture of identity for reputation through which the bank is well known by others. The Bank is committed to the following values in conducting its day-to-day business.</p>
  </div>
  </div>
   
  <div className='bg-white rounded-xl shadow-2xl '>
  <div className='p-8'>
<img src={vision} alt='vision' className='w-70 h-70 p-4  rounded-lg mt-[-5rem]'/>
<h3 className='font-bold text-[#88cf09] text-2xl my-6'>OUR VISION</h3>
<p className='text-[#4F57A0]  font-bold text-2xl '>To Become the Bank of Your First Choice.</p>
  </div>
  </div>
  
</div>
<div class="flex justify-center items-center h-screen">
  <div class="max-w-md mx-4 sm:mx-auto">
    <p class="text-4xl text-center font-bold text-indigo-600 my-4">
      We believe that by living our values, we’ll achieve a balance of size, success, and stability while empowering every individual, organization, and community we touch.
    </p>
  </div>
</div>
</div>

 
            
          );
          
  };
  
    export default WhoWeAre;