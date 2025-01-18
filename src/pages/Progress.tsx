import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Progress: React.FC = () => {
  const doughnutData = {
    labels: ["Techniques Mastered", "Remaining Techniques"],
    datasets: [
      {
        data: [20, 80],
        backgroundColor: ["#3B82F6", "#E5E7EB"],
        hoverBackgroundColor: ["#2563EB", "#D1D5DB"],
      },
    ],
  };

  const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Training Hours",
        data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "#3B82F6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-light min-h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Progress</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chart Doughnut */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-primary mb-4">
            Techniques Progress
          </h2>
          <div className="w-full h-5/6 mx-auto">
            <Doughnut data={doughnutData} />
          </div>
        </div>

        {/* Chart Line */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-primary mb-4">
            Training Hours Over Time
          </h2>
          <Line data={lineData} />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-xl font-bold text-primary mb-4">
          Techniques Mastered
        </h2>
        <ul className="list-disc list-inside text-dark">
          <li>Armbar from Guard</li>
          <li>Triangle Choke</li>
          <li>Butterfly Sweep</li>
          <li>Kimura from Side Control</li>
        </ul>
      </div>
    </div>
  );
};

export default Progress;
