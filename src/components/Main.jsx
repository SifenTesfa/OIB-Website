import React from 'react';
import video from "../video/vi8.mp4"
const Main = () => {
   
    return (
        <div className='main pt-10  aspect-w-16 aspect-h-9 '>
            
     <video src={video} autoPlay loop muted w-full h-full />
        </div>
    )}
    export default Main;