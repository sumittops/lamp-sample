import React from 'react';

const Header = () => (
  <div
    className="h-8 w-full flex justify-between px-3 py-6 items-center bg-white
  shadow-md border-b-2">
    <div>
      <h3 className="text-lg font-bold">TutorBin</h3>
    </div>
    <div>
      <h3 className="text-lg">Aditi Saxena & Komal Kawan</h3>
    </div>
    <div className="flex items-center">
      <div className="h-8 w-8 rounded-full bg-blue-500 flex justify-center items-center">
        <div className="text-white font-bold">A</div>
      </div>
      <div className="ml-2">
        <div className="text-sm">Aditi Saxena</div>
      </div>
    </div>
  </div>
);

export default Header;
