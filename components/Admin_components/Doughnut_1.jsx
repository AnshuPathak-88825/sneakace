import { useEffect } from "react"
import { Chart } from "chart.js";
function Doughnut_1() {
    useEffect(() => {
        var ctx = document.getElementById('myDoughnutChart_1').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["IN-STOCK", "OUT-OF-STOCK"],
                datasets: [{
                    data: [239,170],
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
        <canvas id='myDoughnutChart_1'></canvas>
    )
}

export default Doughnut_1;