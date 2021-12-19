import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

function HorizontalBarChart(props) {
    const { monthBasePassenger: mp } = props;

    // const { data, labels } = props;
    const canvasDom = useRef(null)
    useEffect(() => {
        const ctx = canvasDom.current.getContext('2d');
        const horizontalBarChart = new Chart(ctx, {
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
                    },
                ],
            },
            options: {
                indexAxis: "y",
                plugins: {
                    legend: {
                        position: "bottom",
                    },
                },
            },
        });
        return () => {
            horizontalBarChart.destroy();
        }
    }, [mp]);
    return (
        <div>
            <canvas ref={canvasDom} />
        </div>
    )
}
export default HorizontalBarChart;