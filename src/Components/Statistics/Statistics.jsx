import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#FF444A',
        '#00C49F',
      ],
      borderWidth: 1,
    },
  ],
};

const Statistics = () => {
    return (
        <div className='w-[800px]'>
            <Pie data={data}></Pie>
        </div>
    );
};

export default Statistics;