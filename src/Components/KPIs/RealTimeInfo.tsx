import React, { } from 'react';
// import { EnergyData, fetchEnergyData } from '../../API/energyService';
import './EnergyKpis.css'

const RealTimeInfo: React.FC = () => {
  // const [energyData, setEnergyData] = useState<EnergyData | null>(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const getEnergyData = async () => {
  //     try {
  //       const data = await fetchEnergyData();
  //       setEnergyData(data);
  //     } catch (error) {
  //       console.error('Failed to fetch energy data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getEnergyData();
  // }, []);

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (!energyData) return <div className="p-4">No data available</div>;

  return (
    
    <div className="flex flex-col gap-1.5 bg-transparent rounded-lg relative w-full h-24 font-[Open_Sans]">
        <h2 className="font-bold dark:text-white ml-1"  >REAL-TIME INFORMATION</h2>
          <div className="card1-group">
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" >Power Install</div>
             
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#5de0e6]">1,123 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#5de0e6]">kWh</span></div>
          </div>
        </div>
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" >Power Solar</div>
            
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#5de0e6]">10,234 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#5de0e6]">kWh</span></div>
          </div>
        </div>
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" >Power Grid</div>
             
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#5de0e6]">40,113 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#5de0e6]">kWh</span></div>
          </div>
        </div>
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" >PR</div>
              <div className="card1-subtitle subtitle-date" data-translate="today">ToDay</div>
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#5de0e6]">40,113 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#5de0e6]">kWh</span></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default RealTimeInfo;