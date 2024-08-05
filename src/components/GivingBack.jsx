import React from 'react';
import G1 from '../images/G1.jpg';
import G2 from '../images/G2.jpg';
import G3 from '../images/G3.jpg';
import G4 from '../images/G4.jpg';
import rhero from '../images/rhero.jpg';


const GivingBack = () => {
  return (
    <div>
    <div className='w-full h-[90vh]'>
        <img src={rhero} alt='hero' className="w-full h-full pb-12 md:flex object-cover" />
        <div className='max-w-[1140px] m-auto'>
          <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 z-10">Social Responsiblity</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6">
      <h1 className="text-4xl font-bold text-[#4F57A0] mb-4">
Corporate Social Responsibility
        </h1>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
        The Bank has a long-standing commitment to corporate social responsibility (CSR) we care about the communities we serve. We contribute to enhance the growth and success of the communities we serve. Oromia Bank proudly supports numerous philanthropic and civic organizations within the communities we serve. We have donated nearly Birr 50 million to local charity organizations, in response to disasters, Government projects and initiatives, and many more.
        </p>
      </div>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 pr-4">
          <img src={G1} alt="G1" className="w-full h-auto" />
        </div>
      </div>
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6">
        <h2 className="text-4xl font-bold text-[#4F57A0] mb-4">
          Our Environmental Responsibility
        </h2>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • OIB staff planted trees in Gelan town
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated over Birr 2.7 million for food items to households affected by drought
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated Birr 400,000 for Environmental protection
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated 20 million Birr for displaced citizens due to natural and man-made disasters
        </p>
      </div>

      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 pr-4">
          <img src={G2} alt="G2" className="w-full h-auto sm:w-auto" />
        </div>
      </div>

      <div className="bg-white p-6 mt-8">
        <h2 className="text-4xl font-bold text-[#88cf09] mb-4">
          Our Responsibility in Health
        </h2>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • OIB donated three Million Birr to Oromia State in favor of Fighting against COVID-19
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • OIB donated Five Million Birr in favor of Fighting against COVID-19
        </p>
      </div>

      <div className="flex flex-wrap items-center mt-8">
        <div className="w-full sm:w-1/2 pr-4">
          <img src={G3} alt="G3" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-white p-6 mt-8">
        <h2 className="text-4xl font-bold text-[#88cf09] mb-4">
          Children and Education
        </h2>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated Birr 6 million to Finfinne City Administration for Exercise Book
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated over Birr 200,000 for Local Charities working on education
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated Birr one Million for Finfine City and its environs school feeding and educational material provision program
        </p>
      </div>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-1/2 pr-4">
          <img src={G4} alt="G4" className="w-full h-auto" />
        </div>
      </div>
      <div className="bg-white p-6 mt-8">
        <h2 className="text-4xl font-bold text-[#88cf09] mb-4">
          Economic Vitality
        </h2>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated Birr 1 million for Great Ethiopian Renaissance Dam
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated Birr 10 million for Sheger Green Project
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated Birr 10 million for ‘Gebeta le Hager’ Project
        </p>
        <p className="text-base text-[#4F57A0] leading-relaxed mb-4">
          • Donated Birr Five Million to National Defense
        </p>
      </div>
    </div>
    </div>
  );
};

export default GivingBack;