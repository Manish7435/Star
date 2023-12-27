import React from "react";
const Navbar = () => {
  return (
    <nav >
      <ul className="flex text-white justify-between px-10 h-12 bg-black items-center">
        <li> Home </li>
        <div className='flex gap-[40px]'>
            <li> Get Your card </li>
            <li>Enquiry</li>
            <li>Help</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
