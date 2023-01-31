import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

export default function Linechart(){

const labels=['2018-11-17','2018-11-18', '2018-11-19', '2018-11-20', '2018-11-21', '2018-11-22', '2018-11-23','2018-11-24','2018-11-25','2018-11-26']
        const data1= {labels,datasets:[
          {
            label:'Last 30 days',
            data:[0,2,1,2.1,2.3,1,1.2,0.2,4,2.5],
            backgroundColor: '#B75CFF',
            borderColor:'#A32EFF',
            fill:true,
            showLine:true
          },
        ],
        }
          const data2= {labels,datasets:[
            {
              label: 'Last 30 days',
              data:[0.1,2,3.1,2.3,1.3,1,3.2,2,4,2],
              backgroundColor: 'yellowgreen',
              borderColor:'#59981A',
              fill:true,
              // showLine:true
            },
          ],
          }
          const options = {
            indexAxis: 'x',
            responsive: true,
            plugins: {
              legend: {
                display: true,align:'start'
             }
             }
            
          };
  return (
    <>
    <div style={{height:'42%',width:'30%',marginTop:'1%',marginLeft:'11%'}}>
    <p style={{fontSize:'20px',marginLeft:'38%'}}><b>First Response Tiime</b></p>
    <h4 style={{color:'#B75CFF',marginLeft:'28%',marginTop:'-10px'}}>1hr 17min (Month: 1hr 38min)</h4><Line data={data1} options={options}/>
    <p style={{fontSize:'20px',marginTop:'1%',marginLeft:'38%'}}><b>First Resolution Tiime</b></p><h4 style={{color:'yellowgreen',marginLeft:'28%',marginTop:'-12px'}}>1hr 17min (Month: 1hr 38min)</h4><Line data={data2} options={options}/>
    </div>
    </>
  );
}
