import React from 'react'
import img88 from '../images/img88.webp'
import img57 from '../images/img57.jpg'
import img58 from '../images/img58.png'
import img59 from '../images/img59.png'
import img60 from '../images/img60.png'
import img61 from '../images/img61.jpg'
import img62 from '../images/img62.jpg'
import img63 from '../images/img63.png'

const Coorespondent = () => {
  return (
    <div className='pt-24' ><img src={img88} alt="img88" className="w-full h-full pb-12 md:flex object-cover" />
    <div className="flex flex-wrap">
  
  <div className="bg-[#ffffff] w-full sm:w-1/2 px-2 pl-16 ">
    <p className=" text-xl mb-1 font-bold p-1 text-[#88cf09]  sm:text-3xl mx-auto flex flex-col items-center h-50 md:flex-row writing-mode-vertical-rl">INTERNATIONAL BANKING
</p>
  <p className=" text-xl mb-4 font-bold p-1 text-[#4F57A0] pb-4 sm:text-4xl mx-auto flex flex-col items-center h-50 md:flex-row writing-mode-vertical-rl"> Correspondent Banks
</p>
    <p className=" text-lg p-1 text-[#4F57A0] leading-relaxed m-2">
    Oromia International Bank S.C has established correspondent bank account 
    relationships with a number of prominent banks worldwide. Currently, OIB 
    maintains correspondent account relationships with 7 banks and Bilateral key
     Exchange arrangements (RMA) with more than 120 Banks in the United States,
      Europe, Middle East, Asia and Africa. The below table shows the correspondent banks lists of OIB:</p>

    
  </div>
  
  <div className=" w-96 h-96  sm:w-1/2">
  <img src={img57} alt="img57" className="w-full h-full pr-16 pl-16 md:flex object-cover" />
  </div>
</div>  
    <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-center'>
        <div>
  <img src={img58} alt="img58" className='w-36 h-24 m-16'/>
  <p></p>
  </div>
  <img src={img58} alt="img58" className='w-36 h-24 m-16 '/>
  <img src={img59} alt="img59" className='w-36 h-24 m-16'/>
  <img src={img59} alt="img59" className='w-36 h-24 m-16'/>
  </div>
  <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-center'>
  <img src={img60} alt="img60" className='w-36 h-24 m-16'/>
  <img src={img61} alt="img61" className='w-36 h-24 m-16'/>
  <img src={img62} alt="img62" className='w-36 h-24 m-16'/>
  <img src={img63} alt="img63" className='w-36 h-24 m-16'/>
  </div>
  
    </div>
  )
}

export default Coorespondent