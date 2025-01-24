import React from 'react';
import NotificationDropdown from './NotificationDropdown';
import UserDropdown from './UserDropdown';
import ThemeDropdown from './ThemeDropdown';
// import logo from '../../assets/image/logodark.png'; 
import MobileMenuDropdown from './MobileMenuDropdown';
import Translate from './Translate';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-100 dark:bg-[#0D2743] shadow lg:h-16 px-4 flex sm:h-32 justify-between items-center">
      <div className="flex items-center justify-end">
        {/* <img src={logo} alt="Logo" className="w-[280px] h-auto object-contain lg:hidden" /> */}
        <h2 className="font-bold lg:hidden  sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 dark:text-white">
          DI.OEE
        </h2>
        <h2 className="font-bold ml-140 lg:text-3xl font-serif sm:hidden lg:block sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 dark:text-white">
          ORION ENERGY MANAGEMENT SYSTEM
        </h2>
      </div>
      <div className="lg:flex lg:items-center sm:hidden md:hidden">
      <div className="flex items-center justify-end space-x-8 w-full">
        <ThemeDropdown />
        <Translate />
        <NotificationDropdown />
        <UserDropdown />
      </div>
    </div>
      <MobileMenuDropdown />
    </header>
  );
};

export default Header;