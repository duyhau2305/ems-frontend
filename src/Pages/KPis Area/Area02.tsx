import React from 'react';
import RealTimeInfoArea from '../../Components/Area/KpisArea/RealTimeInfoArea';
import EnergyKpisArea from '../../Components/Area/KpisArea/EnergyKpisArea';
import EmissionKpisArea from '../../Components/Area/KpisArea/EmissionKpisArea';
import PowerFlow from '../../Components/Area/AlarmArea/PowerFlow';
import PowerChart from '../../Components/Chart/LineChart/PowerChart';
import EnergyChart from '../../Components/Chart/BarChart/EnergyChart';





const Area02: React.FC = () => {
  return (
    <div className="h-screen">
        <div className="h-14 text-3xl text-center font-[open-Sans] font-bold justify-center dark:border-b-1 mt-4 dark:text-white flex"> 
            A02 Group
            
        </div>
        
        <div className="grid grid-cols-2 gap-2"> 
            <div className="col-span-1">
                <div className="mt-1"> <RealTimeInfoArea /></div>
                <div className="mt-2"> <EnergyKpisArea /></div>
                <div className="mt-4"> <EmissionKpisArea /></div>
                
                
                
            </div>
            {/* <div className="col-span-1 ">
                <PowerFlow />
            </div> */}
        </div>
        <div className=""> 
            <div className="grid grid-cols-2 gap-2">
                <div className="col-span-1">
                    <PowerChart />
                </div>
                <div className="col-span-1">
                    <EnergyChart />
                </div>

            </div>
        </div>
        
  
    </div>
    
  );
};

export default Area02;