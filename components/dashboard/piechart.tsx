import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const PieChartComponent = () => {
  const data = {
    labels: ['Math', 'English', 'Biology'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384', // Math
          '#36A2EB', // English
          '#FFCE56', // Biology
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const, // Adding 'as const' to specify a literal type
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-4">Lessons</h2>
      <div className="relative">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChartComponent;
