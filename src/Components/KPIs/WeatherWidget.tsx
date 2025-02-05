import React, { useEffect, useState } from 'react';
import { EnergyData, fetchEnergyData } from '../../API/energyService';
import { Thermometer, ThermometerSnowflake, Sun, Wind } from 'lucide-react';
import './Weather.css'

const WeatherWidget: React.FC = () => {
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
const mockData = {
    nhietdo: 17,
    nhietdoduoicell: 23,
    bucxa: 617.0,
    tocdo: 2
  };
  return (
    
    <div className="card-container">
      <h2 className="font-bold dark:text-white" >WEATHER INFORMATION</h2>
      <div className="card-group">
        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <Thermometer className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="text-base font-bold text-[#0a0500] dark:text-white mb-4 mt-2" data-translate="temperature">Temperature</div>
            </div>
            <div className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center">{mockData.nhietdo}<span className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center"> &deg;C</span></div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <ThermometerSnowflake className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="text-base font-bold text-[#0a0500] dark:text-white mb-4 mt-2" data-translate="cellTemp">Cell Temp</div>
            </div>
            <div className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center">{mockData.nhietdoduoicell} <span className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center">&deg;C</span></div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <Sun className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="text-base font-bold text-[#0a0500] dark:text-white mb-4 mt-2" data-translate="radiation">Radiation</div>
            </div>
            <div className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center-group">
              <div className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center">{mockData.bucxa} <span className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center">W/m²</span></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <Wind className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="text-base font-bold text-[#0a0500] dark:text-white mb-4 mt-2" data-translate="windSpeed">Wind Speed</div>
            </div>
            <div className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center-group">
              <div className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center">{mockData.tocdo} <span className="text-base font-bold text-[#673AB7] dark:text-[#FFC107] text-center">m/s</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;