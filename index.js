const alert = document.getElementById('alert');


    alert.onload = setTimeout(function () {
        alertOnload()
    }, 1000);

function alertOnload() {
    const h3 = document.createElement('h3');
    const alertDiv = document.getElementById('alert');
    const iconTimes = document.createElement('i');
    iconTimes.className = "fa fa-times icon-times"
    alertDiv.appendChild(h3);
    alertDiv.appendChild(iconTimes);
    h3.innerHTML = 'Alert';
    alert.style.display = '';

    iconTimes.addEventListener('click', (e) => {
        alertDiv.style.display = 'none';

    })
}

// Traffic Chart 1

let trafficCanvas = document.getElementById('traffic-chart').getContext('2d');

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"
    ],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    responsive: true,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});
