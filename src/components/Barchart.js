import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false //This will do the task
     }
     }
    
  };

  export default function Barchart() {
       const labels=['Tanner Hodge','Lynda Shames', 'Luke Burke', 'Kai Gaines', 'Kenzie Fields','Sophie Mortimer','Leanne Coy','Kayla Park', 'Sarah Matthews', 'James Murdock']
        const data= {labels,datasets:[
          {
            label: 'Dataset',
            data:[117,65,59,56,54,51,40,32,29,23],
            backgroundColor: '#288C28',
            barPercentage: 0.4,
            categoryPercentage: 1.0,
         maintainAspectRatio:false,
          },
        ],
        }
    return(
      <> <div className="my-5"style={{ width:'35%',height:'50%',marginLeft:'15px'}}>
      <p style={{fontSize:'20px',marginLeft:'30%'}}><b>Tickets Solved by Agent</b></p>
          <Bar data={data} options={options} />
       </div></>
       )
}