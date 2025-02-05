import React from "react";
import { Progress, } from "antd";


const AlarmChart: React.FC = () => {
  const data = {
    connect: 8,
      total: 8,
  };

  const progress = (data.connect / data.total) * 100;

  return (
    <div className="font-[Open_Sans]">
<h2 className="text-lg font-bold text-[#0a0500] dark:text-white font-[Open_Sans] ml-2">Number of Alarms</h2>
    <div className="bg-transperent border-none shadow-none p-4 flex flex-row items-center justify-between w-full h-full text-white">
      <div className="flex items-center ml-4">
        <Progress
          type="circle"
          percent={progress}
          size={100}
          strokeColor={{ "0%": "#E89623", "100%": "#E89623" }}
          format={() => ""}
        />
      </div>
      <div className="">
        <p className="flex items-center text-[#E89623]"><span className="inline-block w-3 h-3 bg-[#E89623] rounded-full mr-1.5"></span> Count <span className="ml-2 mr-8">{data.connect}</span></p>
        <p className="flex items-center text-gray-400"><span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-1.5"></span> Total <span className="ml-2 mr-8">{data.total}</span></p>
      </div>
    </div>
    </div>
    
  );
};

export default AlarmChart;
