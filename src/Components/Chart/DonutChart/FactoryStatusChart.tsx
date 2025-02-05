import React from "react";
import { Progress, } from "antd";


const FactoryStatusChart: React.FC = () => {
  const data = {
    connect: 8,
    disconnect: 1,
    total: 9,
  };

  const progress = (data.connect / data.total) * 100;

  return (
    <div>
<h2 className="text-lg font-bold text-[#0a0500] dark:text-white font-[Open_Sans] ml-2">Total Number of Factories</h2>
    <div className="bg-transperent border-none shadow-none p-4 flex flex-row items-center justify-between w-full h-full text-white">
      <div className="flex items-center ml-3">
        <Progress
          type="circle"
          percent={progress}
          size={100}
          strokeColor={{ "0%": "#0AE513", "100%": "#0AE513" }}
          format={() => ""}
        />
      </div>
      <div className="flex flex-col items-start px-4">
        <p className="flex items-center text-[#0AE513]"><span className="inline-block w-3 h-3 bg-[#0AE513] rounded-full mr-1"></span> Connect <span className="ml-2">{data.connect}</span></p>
        <p className="flex items-center text-red-400"><span className="inline-block w-3 h-3 bg-red-400 rounded-full mr-1"></span> Disconnect <span className="ml-2">{data.disconnect}</span></p>
        <p className="flex items-center text-gray-400"><span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-1"></span> Total <span className="ml-2">{data.total}</span></p>
      </div>
    </div>
    </div>
    
  );
};

export default FactoryStatusChart;
