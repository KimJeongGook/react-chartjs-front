import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function StackedBarChart(props) {
    const {data, labels} = props;
    const canvasDom = useRef(null)
    useEffect( () => {
        const ctx = canvasDom.current.getContext('2d');
        const StackedBarChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: 'rgba(255,0,0,0.3)',
                    },
                    {
                        data: data,
                        backgroundColor: 'rgba(0,255,0,0.3)',
                    },
                    {
                        data: data,
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
                }
            }
        });
        return() => {
            StackedBarChart.destroy();
        }
    }, []);
    return(
        <div>
            <canvas ref={canvasDom} />
        </div>
    )
}
export default StackedBarChart;