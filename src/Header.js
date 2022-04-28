import React from 'react';

const Header = () => (
  <div
    className="h-8 w-full flex justify-between px-2 py-6 items-center bg-white
  shadow-md border-b-2">
    <div className="py-6">
      <h3 className="text-lg font-bold">TutorBin</h3>
    </div>
    <div className="py-6">
      <h3 className="text-lg">Komal Kawan</h3>
    </div>
    <div className="flex items-center cursor-pointer">
      <div className="h-8 w-8 rounded-full bg-blue-500 flex justify-center items-center">
        <div className="text-white font-bold">A</div>
      </div>
      <div className="ml-2">
        <div className="text-sm">Addy Osmani</div>
      </div>
    </div>
  </div>
);

export default Header;
