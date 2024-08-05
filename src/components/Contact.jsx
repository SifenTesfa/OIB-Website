import React, { useState } from 'react';
import img90 from '../images/img90.jpg'
const Contact = () => {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any desired action with the form data
    console.log('Submitted:', { name, email, subject, message });
  };
  return (
    <div>
   <div className="pt-24 mx-auto">
  <div className="max-w-7xl mx-auto">
    <div className="aspect-none">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126097.43162707576!2d38.749213!3d9.01397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85c36e3f09cb%3A0x1e0f4ed99e4a6a88!2sOromia%20International%20Bank%20S.C!5e0!3m2!1sen!2set!4v1692014629514!5m2!1sen!2set"
        className="w-full h-96"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div> <div>
<p className=" text-xl mb-4 font-bold p-1 pl-10 text-[#4F57A0]  sm:text-4xl mx-auto flex flex-col items-center h-50 md:flex-row writing-mode-vertical-rl"> How can we help you out?</p>
  <p className=" text-xl mb-4 font-bold pl-10 p-1 text-[#88cf09]  sm:text-1xl mx-auto flex flex-col items-center h-50 md:flex-row writing-mode-vertical-rl">Reach out to us in the nearest office.</p></div>
        <div className='flex flex-col items-center justify-center sm:flex-row sm:justify-center'>
        <div className="w-full pt-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Name field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Subject field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Enter the subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        {/* Message field */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Submit button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
   
    <div className=" w-full h-full pl-16  sm:w-1/2">
  <img src={img90} alt="img90" className="w-full h-full pr-16 md:flex object-cover pb-12" />
  </div>  </div>
         </div>
  )
}

export default Contact