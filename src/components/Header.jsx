import React from "react";

const Header = () => {
  return (
    <div className="bg-[#24C8FE]">
      <div className="flex items-center h-16 justify-between max-w-6xl mx-auto">
        <a href="/" className="text-3xl text-white font-bold">Product App</a>
        <div>
          <a href="#" className="bg-slate-100 rounded-full px-6 py-2 text-indigo-500 font-bold shadow-lg">Lionnel</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
