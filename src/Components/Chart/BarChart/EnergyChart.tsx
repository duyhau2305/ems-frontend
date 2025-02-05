import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const EnergyChart: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initial check
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const getChartOptions = (isDark: boolean) => ({
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Solar Power", "Grid Power"],
      top: 30,
      textStyle: {
        color: isDark ? "#ffffff" : "#000000",
      },
    },
    xAxis: {
      type: "category",
      data: ["04:00", "08:00", "12:00", "16:00", "20:00"],
      axisLabel: {
        color: isDark ? "#ffffff" : "#000000",
      },
      axisLine: {
        lineStyle: {
          color: isDark ? "#ffffff" : "#000000",
        },
      },
    },
    yAxis: [
      {
        type: "value",
        name: "Power (kW)",
        axisLabel: {
          color: isDark ? "#ffffff" : "#000000",
        },
        axisLine: {
          lineStyle: {
            color: isDark ? "#ffffff" : "#000000",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)",
          },
        },
      }
    ],
    series: [
      {
        name: "Solar Power",
        type: "bar",
        smooth: true,
        data: [0, 600, 500, 200, 0],
        color: "#00ff00",
      },
      {
        name: "Grid Power",
        type: "bar",
        smooth: true,
        data: [0, 100, 150, 50, 0],
        color: "#ff00ff",
      },
    ],
    backgroundColor: "transparent",
  });

  return (
    <div className="bg-transparent">
      <div className="text-black dark:text-white text-lg font-bold  ml-2">Energy Chart</div>
      <ReactECharts option={getChartOptions(isDarkMode)} style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

export default EnergyChart;