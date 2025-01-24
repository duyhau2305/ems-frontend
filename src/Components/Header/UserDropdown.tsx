import React, { Fragment, useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiChevronDown } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';
// import user_avatar from '../../assets/image/user.png';
import { message } from 'antd';
import {jwtDecode } from 'jwt-decode';

interface UserInfo {
 name: string;
 role: string;
}

const UserDropdown: React.FC = () => {
 const navigate = useNavigate();
 const [userInfo, setUserInfo] = useState<UserInfo>({
   name: '',
   role: '',
 });

 const decodeToken = () => {
   const token = localStorage.getItem('token');
   if (token) {
     try {
       const decoded: any = jwtDecode(token);
       console.log(decoded);
       const name = decoded.user.name || 'Tên người dùng';
       const role = decoded.user.role || 'Vai trò';
       setUserInfo({ name, role });
     } catch (error) {
       console.error('Token không hợp lệ', error);
     }
   }
 };

 useEffect(() => {
   decodeToken();
 }, []);

 const handleLogout = () => {
   localStorage.removeItem('token');
   localStorage.removeItem('role');
   message.success('Đã đăng xuất thành công!');
   navigate('/login');
 };

 return (
   <Menu as="div" className="relative">
     <div>
       <Menu.Button className="flex items-center focus:outline-none">
         {/* <img src={user_avatar} alt="User Avatar" className="w-8 h-8 rounded-full" /> */}
         <span className="ml-2 text-gray-600 dark:text-white">{userInfo.name}</span>
         <FiChevronDown className="ml-1 text-gray-600 dark:text-white" />
       </Menu.Button>
     </div>
     <Transition
       as={Fragment}
       enter="transition ease-out duration-100"
       enterFrom="transform opacity-0 scale-95"
       enterTo="transform opacity-100 scale-100"
       leave="transition ease-in duration-75"
       leaveFrom="transform opacity-100 scale-100"
       leaveTo="transform opacity-0 scale-95"
     >
       <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
         <div className="py-1">
           <Menu.Item>
             {({ active }) => (
               <div className={`${active ? 'bg-gray-100' : ''} px-4 py-2 text-sm text-gray-700 flex items-center`}>
                 {/* <img src={user_avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-3" /> */}
                 <div>
                   <div className="font-medium">{userInfo.name}</div>
                   <div className="text-xs text-gray-500">{userInfo.role}</div>
                 </div>
               </div>
             )}
           </Menu.Item>
           <div className="border-t border-gray-200"></div>
           <Menu.Item>
             {({ active }) => (
               <Link to="/settings/profile" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                 Thông tin cá nhân
               </Link>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
               <Link to="/message" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                 Tin nhắn
               </Link>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
               <Link to="/tasks" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                 Công việc
               </Link>
             )}
           </Menu.Item>
           <div className="border-t border-gray-200"></div>
           <Menu.Item>
             {({ active }) => (
               <Link to="/settings" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}>
                 Cài đặt
               </Link>
             )}
           </Menu.Item>
           <Menu.Item>
             {({ active }) => (
               <button onClick={handleLogout} className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700`}>
                 Đăng xuất
               </button>
             )}
           </Menu.Item>
         </div>
       </Menu.Items>
     </Transition>
   </Menu>
 );
};

export default UserDropdown;