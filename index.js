const alertBanner = document.getElementById('alert');
const user = document.getElementById("user");
const message = document.getElementById("message");
const send = document.getElementById("send");


alertBanner.onload = setTimeout(function () {
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
    alertBanner.style.display = '';

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

let trafficData1 = {
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

// Traffic Chart 2

let trafficData2 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"
    ],
    datasets: [{
        data: [750, 1600, 1000, 2000, 1500, 1750, 1250, 1050, 2250, 1500,
            2500
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};


// Traffic Chart 3

let trafficData3 = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"
    ],
    datasets: [{
        data: [10000, 600, 1000, 2000, 500, 1750, 1250, 1050, 250, 1500,
            2500
        ],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};


// Traffic Options

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


let trafficNav = document.getElementsByClassName('traffic-nav')[0];
trafficNav.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
        const navName = e.target.textContent;
        const navElement = e.target;
        // console.log(navName);
        // console.log(navElement);

        if (navName === 'Hourly') {
            trafficData = trafficData1;
        } else if (navName === 'Daily') {
            trafficData = trafficData2;
        } else if (navName === 'Weekly') {
            trafficData = trafficData3
        }

        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });
    }
});



// Section C - Daily Traffic & Mobile Users

const dailyCanvas = document.getElementById("daily-chart-widget");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
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
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


const mobileCanvas = document.getElementById("mobile-chart-widget");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});


// Message Section //

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.innerHTML === "" && message.innerHTML === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});