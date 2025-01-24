import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FiHome,  FiGrid, FiPhone, FiMail, FiGlobe, FiMapPin,  FiFolder, FiSettings, FiLogOut, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Submenu from '../SubMenu/Submenu';
import { MdOutlineDevices } from "react-icons/md";
import { FaSolarPanel } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiArtificialHive } from "react-icons/gi";
// import { AuthContext } from '../../context/AuthContext';
import { imprtDataItems, QCStItems } from '../../libs/menuItems';
import logo from '../../assets/image/logo.png';
import logodark from '../../assets/image/logodark.png';
import { message } from 'antd';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

// interface AuthContextType {
//   userRole: string;
// }

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, setIsCollapsed }) => {
//   const { userRole } = useContext(AuthContext) as AuthContextType;
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    message.success('Đã đăng xuất thành công!');
    navigate('/login');
  };

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <div className={`relative dark:bg-[#0D2743] bg-slate-100 h-full shadow-md ${isCollapsed ? 'w-20' : 'w-60'} font-[Open_Sans] flex flex-col justify-between transition-all duration-300 overflow-y-auto`} style={{ maxHeight: '100vh' }}>
      <div className="flex flex-col items-start p-4 mt-2">
        <div className="flex justify-between w-full">
          {!isCollapsed && (
            <div>
              <img src={logodark} alt="Logodark" className="w-[180px] h-auto object-contain hidden dark:block" />
              <img src={logo} alt="Logo" className="w-[180px] h-auto object-contain dark:hidden" />
              <h3 className="font-bold text-sky-700 ml-2 flex justify-center dark:text-white">DI.EMS</h3>
            </div>
          )}
          <button onClick={toggleSidebar} className="mt-4 p-2 h-[50%] rounded-full hover:bg-gray-200 focus:outline-none flex justify-center items-center">
            {isCollapsed ? <FiChevronRight className="text-lg text-gray-500 dark:text-white ml-1" /> : <FiChevronLeft className="text-lg dark:text-white text-gray-500" />}
          </button>
        </div>
      </div>

      <hr className="text-white" />

      <div className="flex-grow flex flex-col space-y-4 p-2 mt-4 text-gray-500">
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/dashboard" 
            className={`flex items-center ${isActive('/dashboard') ? '!text-blue-500 font-bold' : 'text-gray-700'} hover:text-blue-500`}
          >
            <FiHome 
              className={`mr-4 text-lg ${isActive('/dashboard') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`} 
            />
            {!isCollapsed && (
              <span data-translate="dashboard" className={`${isActive('/dashboard') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                Trang chủ
              </span>
            )}
          </Link>

          <Submenu
            title={
              <>
                <FiGrid 
                  className={`mr-4 text-lg ${location.pathname.startsWith('/importdata') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}
                />
                {!isCollapsed && (
                  <span className={`${location.pathname.startsWith('/importdata') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                    Thông tin trạm
                  </span>
                )}
              </>
            }
            items={imprtDataItems}
            mainLink="/importdata/devivce"
            isCollapsed={isCollapsed}
            onSubmenuClick={() => {}}
            setIsCollapsed={setIsCollapsed}
          />

          <Link 
            to="/QCS/availablerate" 
            className={`flex items-center ${isActive('/QCS/availablerate') ? '!text-blue-500 font-bold' : 'text-gray-700'} hover:text-blue-500`}
          >
            <MdOutlineDevices  
              className={`mr-4 text-lg ${isActive('/QCS/availablerate') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white hover:text-blue-500`}
            />
            {!isCollapsed && (
              <span className={`${isActive('/QCS/availablerate') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white hover:text-blue-500`}>
                Quản lý thiết bị
              </span>
            )}
          </Link>
          
          <Link 
            to="/QCS/schedule" 
            className={`flex items-center ${isActive('/QCS/schedule') ? '!text-blue-500 font-bold' : 'text-gray-700'} hover:text-blue-500`}
          >
            <FaSolarPanel 
              className={`mr-4 text-lg ${isActive('/QCS/schedule') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}
            />
            {!isCollapsed && (
              <span className={`${isActive('/QCS/schedule') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                Power Meter
              </span>
            )}
          </Link>

          <Submenu
            title={
              <>
                <AiOutlineThunderbolt 
                  className={`mr-4 text-lg ${location.pathname.startsWith('/QCS/analysis') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}
                />
                {!isCollapsed && (
                  <span className={`${location.pathname.startsWith('/QCS/analysis') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                    Inverter
                  </span>
                )}
              </>
            }
            items={QCStItems.slice(1,5)} 
            mainLink="/QCS/analysis"
            isCollapsed={isCollapsed}
            onSubmenuClick={() => {}}
            setIsCollapsed={setIsCollapsed}
          />
          
          <Link 
            to="/QCS/reports" 
            className={`flex items-center ${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-700'} hover:text-blue-500`}
          >
            <BsBarChartFill 
              className={`mr-4 text-lg ${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}
            />
            {!isCollapsed && (
              <span className={`${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                Phân tích
              </span>
            )}
          </Link>
          <Link 
            to="/QCS/reports" 
            className={`flex items-center ${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-700'} hover:text-blue-500`}
          >
            <FiFolder 
              className={`mr-4 text-lg ${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}
            />
            {!isCollapsed && (
              <span className={`${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                Báo cáo
              </span>
            )}
          </Link>
          <Link 
            to="/QCS/reports" 
            className={`flex items-center ${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-700'} hover:text-blue-500`}
          >
            <GiArtificialHive 
              className={`mr-4 text-lg ${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}
            />
            {!isCollapsed && (
              <span className={`${isActive('/QCS/reports') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                Net Zero AI
              </span>
            )}
          </Link>
          { (
            <Link 
              to="/admin/userlist" 
              className={`flex items-center ${isActive('/admin/userlist') ? '!text-blue-500 font-bold' : 'text-gray-700'} hover:text-blue-500`}
            >
              <FiSettings 
                className={`mr-4 text-lg ${isActive('/admin/userlist') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}
              />
              {!isCollapsed && (
                <span className={`${isActive('/admin/userlist') ? '!text-blue-500 font-bold' : 'text-gray-500'} dark:text-white`}>
                  Quản lý tài khoản
                </span>
              )}
            </Link>
          )}
          
        </nav>
        
        <button onClick={handleLogout} className="flex items-center text-gray-700 hover:text-black focus:outline-none">
          <FiLogOut className="mr-4 dark:text-white text-lg text-gray-500 hover:text-blue-500" />
          {!isCollapsed && <span className="text-gray-500 dark:text-white hover:text-blue-500">Đăng xuất</span>}
        </button>
      </div>

      {!isCollapsed && (
        <div className="p-4 text-gray-500 dark:text-white">
          <h3 className="font-bold ml-1">Thông tin liên hệ</h3>
          <hr className="border-gray-400" />
          <p className="text-sm font-bold ml-2 text-justify mt-2">CÔNG TY TNHH CÔNG NGHỆ DATA INSIGHT VIỆT NAM</p>
          <div className="mt-3 space-y-2 text-sm font-medium ml-8 text-justify">
            <p className="flex items-center">
              <FiPhone className="mr-2" /> +84 916 84 86 38
            </p>
            <p className="flex items-center">
              <FiMail className="mr-2" /> info@datainsight.vn
            </p>
            <p className="flex items-center">
              <FiGlobe className="mr-2" />
              <a href="https://datainsight.vn" target="_blank" rel="noopener noreferrer" className="hover:underline">
                datainsight.vn
              </a>
            </p>
            <p className="flex items-center">
              <FiMapPin className="mr-2 text-xl" /> Số 6 Kim Đồng, Giáp Bát, Hoàng Mai, Hà Nội
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;