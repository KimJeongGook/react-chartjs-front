import { Chart } from "chart.js";
import { useEffect, useRef } from "react";

function StackdBarChartWithGroups(props) {
    //const {data, labels} = props;
    const { monthBasePassenger: mp } = props;

    
    const canvasDom = useRef(null)
    useEffect( () =>{
        const ctx = canvasDom.current.getContext('2d');
        const stackdBarChartwithGroups = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: mp.map((row) => (row.month)),
                datasets: [
                    {
                        label: '월별 버스 승하차 이용량',
                        data: mp.map((row) => (row.data.sum)),
                        backgroundColor: 'rgba(255,0,0,0.3)',
                        stack: 'Group 0'
                    },
                    {
                        label: '월별 버스 승하',
                        data: mp.map((row) => (row.data.getIn)),
                        backgroundColor: 'rgba(0,255,0,0.3)',
                        stack: 'Group 1'
                    },
                    {
                        label: '월별 버스 하차',
                        data: mp.map((row) => (row.data.getOff)),
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
                },
                plugins: {
                    legend: {
                      position: "bottom",
                    },
                },
            },
        });
        return() =>{
            stackdBarChartwithGroups.destroy();
        }
    }, [mp]);
    return(
        <div>
            <canvas ref={canvasDom}/>
        </div>
    )
}
export default StackdBarChartWithGroups;