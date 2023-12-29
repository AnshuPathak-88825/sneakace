import { useEffect } from "react"
import { Chart } from "chart.js";

function BarChart_2() {
    useEffect(() => {
        var ctx = document.getElementById('myBarChart_2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Cat-1", "Cat-2", "Cat-3", "Cat-4", "Cat-5", "Cat-6", "Cat-7"],
                datasets: [{
                    data: [137, 55, 109, 133, 201, 66, 80],
                    label: "Category revenue(in thousand)",
                    backgroundColor: "#1b9e77",
                    borderWidth: 1
                }
                ]
            },
        });
    }, [])


    return (
        
        <canvas id='myBarChart_2'></canvas>
    )
}

export default BarChart_2;