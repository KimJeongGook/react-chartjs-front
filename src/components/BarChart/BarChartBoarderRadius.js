import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function BarChartBoarderRadius(props) {
  console.log();
  //const { data, labels } = props;
  const { monthBasePassenger: mp } = props;

  const canvasDom = useRef(null);
  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    const barChartBoarderRadius = new Chart(ctx, {
      type: "bar",
      data: {
        labels: mp.map((row) => (row.month)),
        datasets: [
          {
            label: '월별 버스 이용량 통계',
            data: mp.map((row) => (row.data.sum)),
            backgroundColor: 'rgba(255,0,0,0.3)',
            borderColor: 'rgba(255,0,0,0.3)',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,

          },
          {
            label: '월별 버스 승차',
            data: mp.map((row) => (row.data.getIn)),
            backgroundColor: 'rgba(0,255,0,0.3)',
            borderColor: 'rgba(0,255,0,0.3)',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,

          },
          {
            label: '월별 버스 하차',
            data:  mp.map((row) => (row.data.getOff)),
            backgroundColor: 'rgba(0,0,255,0.3)',
            borderColor: 'rgba(0,0,255,0.3)',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
        ],
      },
      options : {
        plugins: {
          title: {
            display: true,
            text: 'Bar Chart Boarder Radius'
          },
        },
      }
    });
    return () => {
      barChartBoarderRadius.destroy();
    }
  }, [mp]);
  return (
    <div>
      <canvas ref={canvasDom} />
    </div>
  );
}

export default BarChartBoarderRadius;
