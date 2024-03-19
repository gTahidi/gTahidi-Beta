import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChartComponent = () => {
  const data = {
    labels: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        label: 'Generated Content',
        data: [5, 6, 7, 8, 5, 6, 7],
        backgroundColor: '#13C57C', // Tailwind indigo-500 with opacity
        borderColor: '#13C57C', // Tailwind indigo-500
        borderWidth: 1,
        borderRadius: 40, // Rounded bars
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Assuming you do not want a legend
      },
      title: {
        display: true,
        text: 'Generated Content',
        color: '#374151', // Tailwind gray-700
        font: {
          size: 20
        },
        padding: {
          top: 10,
          bottom: 30
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#374151', // Tailwind gray-700
        },
        grid: {
          color: 'rgba(209, 213, 219, 0.5)', // Tailwind gray-300 with opacity
        },
      },
      x: {
        ticks: {
          color: '#374151', // Tailwind gray-700
        },
        grid: {
          display: false, // No grid for x-axis
        },
      },
    },
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl h-full">
      {/* <div style={{ height: '300px', width: '500px'}}> */}
        <Bar data={data} options={options} />
      </div>
    // </div>
  );
};

export default BarChartComponent;
