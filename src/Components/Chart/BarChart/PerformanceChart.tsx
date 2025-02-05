import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

const PerformanceChart: React.FC = () => {
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
      data: ["Energy Solar", "Grid Power", "PR"],
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
        name: "Energy (kWh)",
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
      },
      {
        type: "value",
        name: "      PR (%)",
        position: "right",
        axisLabel: {
          color: isDark ? "#ffffff" : "#000000",
        },
        axisLine: {
          lineStyle: {
            color: isDark ? "#ffffff" : "#000000",
          },
        },
      },
    ],
    series: [
      {
        name: "Energy Solar",
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
      {
        name: "PR",
        type: "line",
        smooth: true,
        yAxisIndex: 1,
        data: [0, 65, 85, 90, 0],
        color: "#ffcc00",
        areaStyle: {
          opacity: 0.3,
        },
      },
    ],
    backgroundColor: "transparent",
  });

  return (
    <div className="bg-transparent">
      <div className="text-black dark:text-white text-lg font-bold  ml-2">Performance Chart</div>
      <ReactECharts option={getChartOptions(isDarkMode)} style={{ height: "400px", width: "100%" }} />
    </div>
  );
};

export default PerformanceChart;