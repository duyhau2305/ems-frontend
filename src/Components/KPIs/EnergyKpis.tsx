import React, { useEffect, useState } from 'react';
import { EnergyData, fetchEnergyData } from '../../API/energyService';
import './EnergyKpis.css'

const EnergyDashboard: React.FC = () => {
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
        <h1 className="font-bold text-white" >PRODUCTION KPI</h1>
          <div className="card1-group">
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="card1-title" data-translate="energySolar">Energy Solar</div>
              <div className="card1-subtitle subtitle-date" data-translate="today">Today</div>
            </div>
            <div className="card1-value">1,123 <span className="card1-unit">kWh</span></div>
          </div>
        </div>
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="card1-title" data-translate="energySolar">Energy Solar</div>
              <div className="card1-subtitle subtitle-date" data-translate="thisMonth">This month</div>
            </div>
            <div className="card1-value">10,234 <span className="card1-unit">kWh</span></div>
          </div>
        </div>
        <div className="card1">
          <div className="card1-content">
            <div className="card1-header">
              <div className="card1-title" data-translate="energySolar">Energy Solar</div>
              <div className="card1-subtitle subtitle-date" data-translate="thisYear">This year</div>
            </div>
            <div className="card1-value">40,113 <span className="card1-unit">kWh</span></div>
          </div>
        </div>
      </div>
      <div className="card2-group">
        <div className="card2">
          <div className="card2-content">
            <div className="card2-header">
              <div className="card2-title" data-translate="energyGrid">Energy Grid</div>
              <div className="card2-subtitle subtitle-date" data-translate="today">Today</div>
            </div>
            <div className="card2-value">40,113 <span className="card2-unit">kWh</span></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-content">
            <div className="card2-header">
              <div className="card2-title" data-translate="energyGrid">Energy Grid</div>
              <div className="card2-subtitle subtitle-date" data-translate="thisMonth">This month</div>
            </div>
            <div className="card2-value">140,143<span className="card2-unit">kWh</span></div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-content">
            <div className="card2-header">
              <div className="card2-title" data-translate="energyGrid">Energy Grid</div>
              <div className="card2-subtitle subtitle-date" data-translate="thisYear">This year</div>
            </div>
            <div className="card2-value">340,143 <span className="card2-unit">kWh</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyDashboard;