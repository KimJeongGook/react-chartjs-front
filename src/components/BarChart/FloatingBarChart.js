import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function FloatingBarChart(props) {
    // const {data, labels} = props;
    const { monthBasePassenger: mp } = props;

    const canvasDom = useRef(null)
    useEffect( () =>{
        const ctx = canvasDom.current.getContext('2d');
        const floatingBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: mp.map((row) => (row.month)),
                datasets: [
                    {
                        label: '월별 버스 승차',
                        data: mp.map((row) => {
                            return [row.data.sum, row.data.getIn]
                        }),
                        backgroundColor: 'rgba(255,0,0,0.3)',
                    },
                    {
                        label: '월별 버스 하차',
                        data: mp.map((row) => {
                            return [row.data.sum, row.data.getOff]
                        }),
                        backgroundColor: 'rgba(0,255,0,0.3)',
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                        display: true,
                        text: "FloatingBarChart",
                    },
                },
            },
        });
        return() =>{
            floatingBarChart.destroy();
        }
    }, [mp]);
    return(
        <div>
            <canvas ref={canvasDom}/>
        </div>
    )
}
export default FloatingBarChart;