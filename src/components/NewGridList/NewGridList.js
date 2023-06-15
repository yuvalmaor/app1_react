import React from 'react';
import ListItem from './ListItem';

const NewGridList = ({ imageLinkList }) => {

    const bonus="\n+\n\
    100% CASHBACK\
    UP TO $50 IN GIFTCARD"

  return (
    <div className="flex flex-wrap justify-center items-center">
      {imageLinkList.map((item, index) => (
        <div key={index} className="w-full lg:w-1/2 my-4 flex justify-center">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full flex justify-center">
            <div className="py-2 px-2 max-w-full w-11/12 mx-2 bg-blue-200 hover:bg-blue-100 transition-colors duration-200 rounded-xl shadow-lg flex items-center space-x-2">
              <img className="block mx-auto h-40 w-40 rounded-xl sm:mx-0 sm:shrink-0" src={item.image} alt="Woman's Face" />
              <div className="text-center space-y-2 sm:text-left">
                <div className="space-y-0.5">
                  <p className="text-lg text-black font-semibold">
                    {item.name}
                  </p>
                  <p classNamse="text-slate-500 font-medium text-sm sm:text-xs sm:font-size:0.5rem">

                    {item.offer+bonus}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewGridList;
