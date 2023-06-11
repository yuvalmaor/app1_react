import React from 'react';



const ImageGridList = ({ imageLinkList }) => {

  return (

    <div className="flex flex-wrap justify-center">
        {imageLinkList.map((item, index) => (
        <div key={index} className="w-4/5 md:w-1/2 lg:w-3/5 my-2">
                <a herf={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
 <img src={item.image} alt="" className="w-full h-auto" />
    </a>
    </div>
    ))}
    </div>
    );
     };
export default ImageGridList;

