
import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style.css';
import EnergyDashboard from '../Components/KPIs/EnergyKpis';
import WeatherWidget from '../Components/KPIs/WeatherWidget';

const Dashboard: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  
  const initialLayout = [
    { i: 'widget1', x: 0, y: 0, w: 6, h: 4 },
    { i: 'widget2', x: 6, y: 0, w: 6, h: 4 },
    { i: 'widget3', x: 12, y: 0, w: 6, h: 4 },
    { i: 'widget4', x: 18, y: 0, w: 6, h: 4 },
    { i: 'widget5', x: 24, y: 0, w: 6, h: 4 }
  ];

  const [currentLayout, setCurrentLayout] = useState(() => {
    const savedLayout = localStorage.getItem('dashboardLayout');
    return savedLayout ? JSON.parse(savedLayout) : initialLayout;
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onLayoutChange = (layout) => {
    setCurrentLayout(layout);
    localStorage.setItem('dashboardLayout', JSON.stringify(layout));
  };

  return (
    <div className="">
      <GridLayout
  className="layout"
  layout={currentLayout}
  cols={44}
  rowHeight={30}
  width={width}
  draggableHandle=".widget-header"
  onLayoutChange={onLayoutChange}
  resizeHandles={['s', 'w', 'e', 'n', 'sw', 'nw', 'se', 'ne']}
>
         <div key="widget1" className="bg-transparent p-0">
         <div className="widget-header bg-transparent cursor-move">
           <EnergyDashboard />
         </div>
       </div>
       
       <div key="widget2" className="bg-transparent  p-0">
         <div className="widget-header bg-transparent cursor-move">
           <WeatherWidget />
         </div>
       </div>

       <div key="widget3" className="bg-transparent shadow p-0">
         <div className="widget-header bg-transparent cursor-move">
           <h2 className="text-xl font-semibold p-4">Widget 3</h2>
         </div>
       </div>

       <div key="widget4" className="bg-transparent shadow p-0">
         <div className="widget-header bg-transparent cursor-move">
           <h2 className="text-xl font-semibold p-4">Widget 4</h2>
         </div>
       </div>

       <div key="widget5" className="bg-transparent shadow p-0">
         <div className="widget-header bg-transparent cursor-move">
           <h2 className="text-xl font-semibold p-4">Widget 5</h2>
         </div>
       </div>
      </GridLayout>
    </div>
  );
};

export default Dashboard;