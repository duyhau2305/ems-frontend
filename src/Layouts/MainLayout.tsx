import React from 'react';
// import Sidebar from '../Components/Sider.bar/Siderbar';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/Siderbar/Sidebar';
// import { AuthContext } from '../context/AuthContext';

interface MainLayoutProps {
 children: React.ReactNode;
 className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
 const [isSidebarCollapsed, setIsSidebarCollapsed] = React.useState(false);
//  const { userRole } = useContext(AuthContext);

 return (
   <div className={`lg:flex h-screen w-screen ${className}`}>
     <aside className={`bg-gray-200 lg:flex flex-shrink-0 transition-all duration-300 hidden ${isSidebarCollapsed ? 'w-20' : 'w-54'}`}>
       <Sidebar
         isCollapsed={isSidebarCollapsed}
         setIsCollapsed={setIsSidebarCollapsed}
        //  role={userRole}
       />
     </aside>
     <div className="flex flex-col flex-grow">
       <header className="flex-shrink-0 lg:ml-1">
         <Header />
       </header>
       <main className="lg:flex-grow dark:bg-[#0D2743] lg:bg-transparent sm:bg-transparent  overflow-auto mt-0.5 lg:ml-1">
         {children}
       </main>
     </div>
   </div>
 );
};

export default MainLayout;