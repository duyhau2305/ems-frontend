import React, { useEffect, useState } from 'react';
import { EnergyData, fetchEnergyData } from '../../../API/energyService';
import '../../KPIs/EnergyKpis.css'

const EmissionKpisArea: React.FC = () => {
  const [energyData, setEnergyData] = useState<EnergyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEnergyData = async () => {
      try {
        const data = await fetchEnergyData();
        setEnergyData(data);
      } catch (error) {
        console.error('Failed to fetch energy data:', error);
      } finally {
        setLoading(false);
      }
    };

    getEnergyData();
  }, []);

//   if (loading) return <div className="p-4">Loading...</div>;
//   if (!energyData) return <div className="p-4">No data available</div>;

  return (
    
    <div className="card-container">
        <h2 className="font-bold dark:text-white ml-1" >EMISSION KPI</h2>
          <div className="card1-group">
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" data-translate="energySolar">Energy Solar</div>
              <div className="card1-subtitle subtitle-date" data-translate="today">Today</div>
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#5de0e6]">1,123 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#5de0e6]">kWh</span></div>
          </div>
        </div>
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" data-translate="energySolar">Energy Solar</div>
              <div className="card1-subtitle subtitle-date" data-translate="thisMonth">This month</div>
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#5de0e6]">10,234 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#5de0e6]">kWh</span></div>
          </div>
        </div>
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" data-translate="energySolar">Energy Solar</div>
              <div className="card1-subtitle subtitle-date" data-translate="thisYear">This year</div>
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#5de0e6]">40,113 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#5de0e6]">kWh</span></div>
          </div>
        </div>
      </div>
      <div className="card2-group">
        <div className="card2">
          <div className="card2-content">
            <div className="card2-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" data-translate="energyGrid">Energy Grid</div>
              <div className="card2-subtitle subtitle-date" data-translate="today">Today</div>
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#FFC107]">40,113 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#FFC107]">kWh</span></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-content">
            <div className="card2-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" data-translate="energyGrid">Energy Grid</div>
              <div className="card2-subtitle subtitle-date" data-translate="thisMonth">This month</div>
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#FFC107]">140,143 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#FFC107]">kWh</span></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-content">
            <div className="card2-header">
              <div className="text-base font-bold text-[#0a0500] dark:text-white" data-translate="energyGrid">Energy Grid</div>
              <div className="card2-subtitle subtitle-date" data-translate="thisYear">This year</div>
            </div>
            <div className="text-center text-base font-bold text-[#673AB7] dark:text-[#FFC107]">340,143 <span className="text-base font-bold text-[#673AB7] text-center dark:text-[#FFC107]">kWh</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmissionKpisArea;