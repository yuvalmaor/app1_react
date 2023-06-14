import React from 'react';

const ImageGridList = ({ imageLinkList }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {imageLinkList.map((item, index) => (
        <div key={index} className="w-4/5 md:w-1/2 lg:w-3/5 my-2 flex justify-center">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
            <img src={item.image} alt="" className="w-48 h-48 md:w-80 md:h-80" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ImageGridList;
