import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

function MultiAxisLineChart (props) {
    const { monthBasePassenger: mp } = props
    const canvasDom = useRef(null)
    useEffect( () => {
        const ctx = canvasDom.current.getContext('2d')
        const multiAxisLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: mp.map((row) => (row.month)),
                datasets: [
                    {
                        label: '월별 버스 승하차 이용량(y)',
                        data: mp.map((row) => (row.data.sum)),
                        yAxisID: 'y',
                        borderColor: 'rgba(244,53,32,0.5)',
                        backgroundColor: 'rgba(244,53,32,0.7)',
                    },
                    {
                        label: '월별 버스 승차(y1)',
                        data: mp.map((row) => (row.data.getIn)), 
                        yAxisID: 'y1',
                        borderColor: 'rgba(53,244,32,0.5)',
                        backgroundColor: 'rgba(53,244,32,0.7)',
                    },
                    {
                        label: '월별 버스 하차(y1)',
                        data: mp.map((row) => (row.data.getOff)), 
                        yAxisID: 'y1',
                        borderColor: 'rgba(53,32,244,0.5)',
                        backgroundColor: 'rgba(53,32,244,0.7)',
                    }
                ]
            },
            options: {
                responsive: true,
                interaction: {
                mode: 'index',
                intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Multi Axis Line Chart'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display:  true,
                        position: 'left'

                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                          },
                    }
                }
            }

        });
        return () => {
            multiAxisLineChart.destroy();
        }
    }, [mp]);
    return (
        <div>
            <canvas ref={canvasDom}/>
        </div>
    );
}
export default MultiAxisLineChart;