import React from 'react';
import ListItem from './ListItem';
import Popup from './Popup';

const NewGridList = ({ imageLinkList }) => {

    const bonus="\n+\n\
    100% CASHBACK\
    UP TO $50 IN GIFTCARD"

  return (
    <div className="flex flex-wrap justify-center items-center">
      {imageLinkList.map((item, index) => (
        <div key={index} className="w-full lg:w-1/2 my-4 flex justify-center">
          <div className="py-2 px-2 max-w-full w-11/12 mx-2 bg-blue-200 hover:bg-blue-100 transition-colors duration-200 rounded-xl shadow-lg flex flex-col md:flex-row items-center space-x-2 relative">
              <img className="block w-full h-auto md:w-40 md:h-40 rounded-xl sm:mx-0 sm:shrink-0 left-1" src={item.image} alt="Woman's Face" />
              <div className="text-center space-y-2 sm:text-left mb-4 md:mb-0">
                <div className="space-y-0.5 ">
                  <p className="text-lg md:text-xl text-black font-semibold ">
                    {item.name}
                  </p>
                  <p className="text-slate-500 font-medium text-sm md:text-base sm:text-xs sm:font-size:0.5rem mt-[-4px] mb-0">
                  {item.offer+bonus}
                  </p>

                </div>
              </div>
              <div className="pt-4 md:pt-0">
                <Popup prop={item.link}/>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default NewGridList;
