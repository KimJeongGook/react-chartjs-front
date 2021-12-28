import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

function SteppedLineChart (props) {
    const { monthBasePassenger: mp } = props;

    const canvasDom = useRef(null)
    useEffect( () => {
        const ctx = canvasDom.current.getContext('2d')
        const steppedLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: mp.map((row) => (row.month)),
                datasets: [
                    {
                        label: '월별 버스 승하차 이용량',
                        data: mp.map((row) => (row.data.sum)),
                        borderColor: 'rgba(244,53,32,0.5)',
                        backgroundColor: 'rgba(244,53,32,0.7)',
                        stepped: true,
                    }
                ]
            },
            options: {
                interaction: false,
                axis: 'x',
            }
        });
        return () => {
            steppedLineChart.destroy();
        }
    }, [mp]);
    return (
        <div>
            <canvas ref={canvasDom}/>
        </div>
    );
}
export default SteppedLineChart;