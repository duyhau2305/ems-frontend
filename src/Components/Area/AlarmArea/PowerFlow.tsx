import React from "react";
import { MdNotificationImportant, MdOfflineBolt, MdError, MdInfo } from "react-icons/md";

const mockData = [
  {
    ActivePowerSumGrid: 1200,
    ActivePowerSum: 1500,
    count_critical: 2,
    count_major: 5,
    count_minor: 8,
    count_warning: 10,
    IDS: 11,
  },
];

const PowerFlow: React.FC = () => {
  const data = mockData;
  const id = data[0]?.IDS;
  const ActivePowerSumGrid = data[0]?.ActivePowerSumGrid;
  const ActivePowerSum = data[0]?.ActivePowerSum;

  let number_inverter = 0,
    number_elster = 1,
    number_pm = 1,
    number_zeroexport = 0;

  switch (id) {
    case 11:
    case 12:
      number_inverter = 5;
      number_zeroexport = id === 11 ? 1 : 0;
      break;
    case 13:
    case 14:
      number_inverter = 8;
      number_zeroexport = id === 13 ? 1 : 0;
      break;
    case 15:
    case 17:
      number_inverter = 7;
      number_zeroexport = 1;
      break;
    case 16:
    case 18:
      number_inverter = 8;
      break;
  }

  const number_total = number_inverter + number_elster + number_pm + number_zeroexport;
  const { count_critical, count_major, count_minor, count_warning } = data[0];

  return (
    <div className="bg-transperent text-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="flex items-center justify-center p-4 border border-red-500 rounded-lg">
          <MdNotificationImportant color="#eb171f" size={24} />
          <span className="ml-2">Critical: {count_critical}</span>
        </div>
        <div className="flex items-center justify-center p-4 border border-orange-500 rounded-lg">
          <MdOfflineBolt color="#f36900" size={24} />
          <span className="ml-2">Major: {count_major}</span>
        </div>
        <div className="flex items-center justify-center p-4 border border-yellow-500 rounded-lg">
          <MdError color="#fb3" size={24} />
          <span className="ml-2">Minor: {count_minor}</span>
        </div>
        <div className="flex items-center justify-center p-4 border border-blue-500 rounded-lg">
          <MdInfo color="#5a91fe" size={24} />
          <span className="ml-2">Warning: {count_warning}</span>
        </div>
      </div>

      <div className="relative flex justify-center items-center mb-6">
        <div className="absolute top-0 text-center">Total Power of Devices</div>
        <div className="flex flex-col items-center">
          <div className="bg-gray-700 p-4 rounded-lg shadow-lg">Load {ActivePowerSum}kW</div>
          <div className="flex mt-4">
            <div className="mr-8">Grid Current Power: {ActivePowerSumGrid}kW</div>
            <div>PV Output Power: {ActivePowerSum}kW</div>
          </div>
        </div>
      </div>

      <table className="w-full text-left border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-2">Device</th>
            <th className="p-2">Inverter</th>
            <th className="p-2">Elster</th>
            <th className="p-2">Power Meter</th>
            <th className="p-2">Zero Export</th>
            <th className="p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-700">
            <td className="p-2">Number</td>
            <td className="p-2">{number_inverter}</td>
            <td className="p-2">{number_elster}</td>
            <td className="p-2">{number_pm}</td>
            <td className="p-2">{number_zeroexport}</td>
            <td className="p-2">{number_total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PowerFlow;
