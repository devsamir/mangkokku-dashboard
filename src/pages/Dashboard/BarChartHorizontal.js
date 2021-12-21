import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: true,
    mode: "index",
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Data Penjualan",
    },
  },
};
const labels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni"];
export const data = {
  labels,
  datasets: [
    {
      label: "Produk A",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(53, 162, 235)",
    },
    {
      label: "Produk B",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgb(255, 99, 132)",
    },
  ],
};
const BarChartHorizontal = () => {
  return <Bar options={options} data={data} />;
};

export default BarChartHorizontal;
