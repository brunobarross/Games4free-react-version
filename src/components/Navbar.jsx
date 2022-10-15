import React from 'react';
import { List } from 'phosphor-react';

import Logo from './Logo';
import { GlobalContext } from '../context/Global';

const Navbar = () => {
  const { sidebarOpen, setSideBarOpen } = React.useContext(GlobalContext);
  return (
    <div className="h-16 flex justify-between md:hidden px-4 items-center bg-primary-700 text-white fixed top-0 w-full z-[100]">
      <div className="logo w-40 pb-4">
        <Logo />
      </div>
      <button
        className={`w-10 h-10 bg-white border border-gray-20 rounded-full grid place-items-center transition-opacity ${
          sidebarOpen ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={() => setSideBarOpen(!sidebarOpen)}
      >
        <List size={24} color="#000" />
      </button>
    </div>
  );
};

export default Navbar;
