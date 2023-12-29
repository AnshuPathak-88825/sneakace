import { useEffect } from "react"
import { Chart } from "chart.js";
function Doughnut_2() {
    useEffect(() => {
        var ctx = document.getElementById('myDoughnutChart_2').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["INDIA", "others"],
                datasets: [{
                    data: [2393,2720],
                    borderColor: [
                        "#198754",
                        "#fd7e14",
                    ],
                    backgroundColor: [
                        "#198754",
                        "#fd7e14",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: false,
                    }],
                    yAxes: [{
                        display: false,
                    }],
                }
            },

        });
    }, [])


    return (
        <canvas id='myDoughnutChart_2'></canvas>
    )
}

export default Doughnut_2;