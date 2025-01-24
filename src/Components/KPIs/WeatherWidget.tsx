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
      <div className="card-group">
        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <Thermometer className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="card-title" data-translate="temperature">Temperature</div>
            </div>
            <div className="card-value">{mockData.nhietdo}<span className="card-unit"> &deg;C</span></div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <ThermometerSnowflake className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="card-title" data-translate="cellTemp">Cell Temp</div>
            </div>
            <div className="card-value">{mockData.nhietdoduoicell}<span className="card-unit">&deg;C</span></div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <Sun className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="card-title" data-translate="radiation">Radiation</div>
            </div>
            <div className="card-unit-group">
              <div className="card-value">{mockData.bucxa}<span className="card-unit">W/m²</span></div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="card-header">
              <Wind className="w-6 h-6 mr-2 text-[#009688]" />
              <div className="card-title" data-translate="windSpeed">Wind Speed</div>
            </div>
            <div className="card-unit-group">
              <div className="card-value">{mockData.tocdo}<span className="card-unit">m/s</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;