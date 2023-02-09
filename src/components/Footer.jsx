import React from 'react';

const Footer = () => {
  return <div className='bg-[#24C8FE] mb-0'>
      <div className="h-12 max-w-6xl mx-auto flex items-center justify-center">
          <p className='text-lg text-slate-100'>Copyright @ Martin Devs {(new Date()).getFullYear()}</p>
      </div>
  </div>;
};

export default Footer;
