import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Graph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'Donations',
            data: data,
            backgroundColor: 'rgb(30, 162, 126)',
            borderColor: 'rgb(30, 162, 126)',
            borderWidth: 1
            
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(0, 0, 0, 0.1)'
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      return () => myChart.destroy(); 
    }
  }, [data]);

  return <canvas ref={chartRef} style={{ width: '800px', height: '400px', margin: '70px auto' }} />;
};

export default Graph;

