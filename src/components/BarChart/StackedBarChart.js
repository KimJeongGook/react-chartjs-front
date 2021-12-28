import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function StackedBarChart(props) {
    const { monthBasePassenger: mp } = props;

    const canvasDom = useRef(null)
    useEffect( () => {
        const ctx = canvasDom.current.getContext('2d');
        const StackedBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: mp.map((row) => (row.month)),
                datasets: [
                    {
                        label: '월별 버스 승하차 이용량',
                        data: mp.map((row) => (row.data.sum)),
                        backgroundColor: 'rgba(255,0,0,0.3)',
                    },
                    {
                        label: '월별 버스 승차',
                        data: mp.map((row) => (row.data.getIn)),
                        backgroundColor: 'rgba(0,255,0,0.3)',
                    },
                    {
                        label: '월별 버스 하차',
                        data: mp.map((row) => (row.data.getOff)),
                        backgroundColor: 'rgba(0,0,255,0.3)',
                    }
                ]
            },
            options : {
                scales : {
                    x : {
                        stacked: true,
                    },
                    y : {
                        stacked: true,
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Stacked Bar Chart'
                    },
                    legend: {
                      position: "bottom",
                    },
                },
            }
        });
        return() => {
            StackedBarChart.destroy();
        }
    }, [mp]);
    return(
        <div>
            <canvas ref={canvasDom} />
        </div>
    )
}
export default StackedBarChart;