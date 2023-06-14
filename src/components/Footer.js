import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-sm">
        In accordance with the legal and regulatory requirements in effect within the Ontario regulated market, You acknowledge, agree and declare that:<br/>
a. during the term of Your agreement with Us; or<br/>
b. any other period wherein you promote any of Our brand directly or otherwise within the Ontario market  pursuant to any commercial relationship with Us;<br/>
You shall refrain from engaging in any advertising and/or promotional activity targeted at Ontario residents for; or otherwise enticing Ontario residents in any way to visit, register on, and/or play on; any third-party websites wherein wagers can be placed (in real money or otherwise), unless the operators of such websites hold all valid authorizations mandated by law and any applicable regulation enabling them to operate within Ontario.
            
        </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <a href="/" className="hover:underline">yuval</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
          </li>
          <li>
            <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
          </li>
          <li>
            <a href="/" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
