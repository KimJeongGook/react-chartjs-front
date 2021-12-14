import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function StackdBarChartWithGroups(props) {
    const {data, labels} = props;
    
    const canvasDom = useRef(null)
    useEffect( () =>{
        const ctx = canvasDom.current.getContext('2d');
        const stackdBarChartwithGroups = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: 'rgba(255,0,0,0.3)',
                        stack: 'Group 0'
                    },
                    {
                        data: data,
                        backgroundColor: 'rgba(0,255,0,0.3)',
                        stack: 'Group 1'
                    },
                    {
                        data: data,
                        backgroundColor: 'rgba(0,0,255,0.3)',
                        stack: 'Group 1'
                    }
                ]
            },
            options : {
                scales : {
                    x: {
                        stacked: true,
                    },
                    y: {
                        stacked: true,
                    },
                },
                interaction: {
                    intersect: false,
                }
            }
        });
        return() =>{
            stackdBarChartwithGroups.destroy();
        }
    }, []);
    return(
        <div>
            <canvas ref={canvasDom}/>
        </div>
    )
}
export default StackdBarChartWithGroups;