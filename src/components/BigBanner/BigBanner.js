import React from 'react';



const BigBanner = ({ image, link }) => {

  return (
    <div className="flex justify-center">
        <a href={link} target="_blank" rel="noopener noreferrer" className="w-3/5">
            <img src={image} alt="" className="w-full h-auto" />
        </a>
    </div>
 );
};
export default BigBanner;

