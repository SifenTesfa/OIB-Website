import React from 'react';
import rhero from '../images/rhero.jpg'
import build from '../images/build.jpg'
import award from '../images/award.jpg'
import ban from '../images/ban.jfif'

const BankAchievement = () => {
    return(
        <div>
            <div className='w-full h-[90vh] '>
   <img src={rhero} alt='hero' className="w-full h-full pb-12 md:flex sm:inline-flex object-cover" />
   <div className='max-w-[1140px] m-auto'>
    <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
   <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold "> Bank Achievement</h1>
   <p className=" mb-15  text-lg text-white opacity-70">Leave us a little info, and we’ll be in touch.</p>
   <div className='mt-5'>
   <a class="mt-10 px-12 py-3 bg-gradient-to-r from-[#88cf09]  to-[#4F57A0]  text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                href="/contact">Contact Us</a>
   </div>
   </div>
    </div>
    </div>
    <div>
    <p className='md:text-5xl sm:text-4xl text-xl font-bold mt-24 text-[#88cf09] px-1'> Bank Achievements</p>
    <div className='bg-white p-6'>
  </div>  
    <div className="flex flex-wrap"> 
  <div className="w-full h-full sm:w-1/2">
  <img src={ban} alt="bank" className="w-full h-full pr-16 pl-16 md:flex object-cover" />
  </div>
  <div className="w-full sm:w-1/2 px-1 bg-[#ffffff]">
  
                
  <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">It gives us a great pleasure to inform our esteemed customer that in the banking history of Ethiopia, Oromia International Bank S.C. has been the most successful bank so far, in that it was able to open a total of 26 branches in only eight months’ time. Of these branches, 80% were opened outside the capital city. In fact, this achievement of OIB has awakened the banking industry. As a result, the number of OIB’s branches in Ethiopia has now reached 270.</p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">Despite its aggressive outlet expansion and its huge start-up expenditures, OIB has also been able to break even within its first year of operations.</p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    What is more, OIB has made correspondent relations with internationally acclaimed financial institutions and money-transfer agents soon after it commenced operations.</p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    OIB is now working in full gear introducing new bank products and reaching the unbanked society, regardless of the fact that it is a relatively new comer among the other banks operating in Ethiopia.</p>
  </div>
</div>
          
<div className='bg-white p-6'>
  </div>       
          
<div className="flex flex-wrap">
  
  <div className="bg-[#ffffff] w-full sm:w-1/2 px-2 pl-16 ">

  <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
  Our bank has won several awards and recognitions at national and continental level.
  </p>
  <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
  African Interest-free Banking & Finance Awards of 2019
    </p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    2020 Outstanding Performance in ATM transaction from ETSWITCH
    </p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    2020 Platinum tax payer Award
    </p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    2021 Gold level tax payer Award
    </p>
 </div>
  
  <div className=" w-96 h-96  sm:w-1/2">
  <img src={award} alt="award" className="w-full h-full pr-16 pl-16 md:flex object-cover" />
  </div>
</div>  
<div className='bg-white p-6'>
  </div> 
<div className="flex flex-wrap">
<div className="w-96 h-96 sm:w-1/2  md:flex">
  <img src={build} alt="build" className="pl-16 w-full h-full pr-14 md:flex object-cover " />
  </div>
  
    <div className="bg-[#ffffff] w-full sm:w-1/2 px-2 pl-8  ">
    
  
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    After acquiring a plot of land to build its headquarters whose soil test and architectural design has been finalized, the Bank is on the verge of commencing the construction of the 29 storey headquarters complex at the premises of the future financial Hub.
    </p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    Currently, OIB owns a G+13 twin Building Head Office on Bole road, around Olympia immediately beside Getu Commercial Center formerly known as SA building.
    </p>
    <p className=" text-sm p-1 text-[#4F57A0] leading-relaxed m-2">
    Our bank has won several awards and recognitions at national and continental level.
    </p>

    
  </div>
  <div className='bg-white p-6'>
  </div>  
  </div>
       
    </div>    
        </div>
    );
};
export default BankAchievement;