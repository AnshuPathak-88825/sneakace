import { useEffect } from "react"
import { Chart } from "chart.js";

function BarChart_1() {
    useEffect(() => {
        var ctx = document.getElementById('myBarChart_1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [137, 55, 109, 133, 201, 66, 80, 80, 80, 80, 80, 80],
                    label: "Revenue(in thousand)",
                    backgroundColor: "#1b9e77",
                    borderWidth: 1
                }
                ]
            },
        });
    }, [])


    return (
        
        <canvas id='myBarChart_1'></canvas>
    )
}

export default BarChart_1;