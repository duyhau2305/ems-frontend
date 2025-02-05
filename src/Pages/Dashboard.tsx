import React from 'react';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './style.css';
import WeatherWidget from '../Components/KPIs/WeatherWidget';
import FinicalKpis from '../Components/KPIs/FinicalKpis';
import EmissionKpis from '../Components/KPIs/EmissionKpis';
import RealTimeInfo from '../Components/KPIs/RealTimeInfo';
import FactoryStatusChart from '../Components/Chart/DonutChart/FactoryStatusChart';
import AlarmChart from '../Components/Chart/DonutChart/AlarmChart';
import PowerChart from '../Components/Chart/LineChart/PowerChart';
import EnergyChart from '../Components/Chart/BarChart/EnergyChart';
import LayoutFactory from '../Components/3dFactory/LayoutFactory';
import PerformanceChart from '../Components/Chart/BarChart/PerformanceChart';
import EnergyKpis from '../Components/KPIs/EnergyKpis';

const Dashboard: React.FC = () => {
  return (
    <div className="h-full grid grid-rows-2 gap-2 p-0 ">
      {/* Top Row - KPIs */}
      <div className="row-span-1 gap-2">
        <div className="grid grid-cols-2 gap-2 ">
          <div className="col-span-1">
              <div className=" rounded-lg mt-1 ">
              <EnergyKpis />
            </div>
            <div className=" rounded-lg mt-1">
              <FinicalKpis />
            </div>
              <div className=" rounded-lg mt-1 ">
                <EmissionKpis />
              </div>
          </div>
          <div className="col-span-1">
            <div className=" rounded-lg ">
              <WeatherWidget />
            </div>
            <div className="grid grid-cols-3 mt-2">
              <div className="col-span-2">
                    <div className=" rounded-lg ">
                      <LayoutFactory />
                    </div>
                    
              </div>
              <div className="col-span-1">
              <div className=" rounded-lg ">
                      <FactoryStatusChart />
                    </div>
                  <div className=" rounded-lg ">
                    <AlarmChart />
                  </div>
              </div>
            </div>
            <div className=" rounded-lg ">
              <RealTimeInfo />
            </div>
           
          </div> 
                       
        </div>
      </div>

      

      {/* Bottom Section */}
      <div className="row-span-1 mt-30 ">
         {/* Charts Row */}
        <div className="grid grid-cols-3 gap-4">
          <div className=" rounded-lg ">
            <PowerChart />
          </div>
          <div className=" rounded-lg ">
            <EnergyChart />
          </div>
          <div className=" rounded-lg ">
            <PerformanceChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;