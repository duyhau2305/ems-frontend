
export interface EnergyData {
    solarEnergy: {
      today: number;
      month: number;
      year: number;
    };
    gridEnergy: {
      today: number;
      month: number;
      year: number;
    };
  }
  
  export const fetchEnergyData = async (): Promise<EnergyData> => {
    try {
      const response = await fetch('your_api_endpoint');
      return await response.json();
    } catch (error) {
      console.error('Error fetching energy data:', error);
      throw error;
    }
  };