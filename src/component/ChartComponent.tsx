import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js 기본 구성 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface Props {
  data: { [date: string]: number };
}

const ChartComponent: React.FC<Props> = ({ data }) => {
  console.log(data);

  // 날짜(key)와 값(value)을 배열로 분리
  const labels = Object.keys(data); // 날짜 배열
  const values = Object.values(data); // 값 배열

  // Chart.js에 전달할 데이터
  const chartData = {
    labels,
    datasets: [
      {
        label: "Daily useage", // 데이터셋 이름
        data: values,
        borderColor: "rgba(75,192,192,1)", // 선 색상
        backgroundColor: "rgba(75,192,192,0.2)", // 채우기 색상
        tension: 0.2, // 곡선 정도
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Daily useage Chart",
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ChartComponent;
