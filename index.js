const alertBanner = document.getElementById('alert');
const user = document.getElementById('user');
const message = document.getElementById('message');
const send = document.getElementById('send');


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

// Traffic Charts

let trafficCanvas = document.getElementById('traffic-chart').getContext('2d');

if (matchMedia) {
    const mq = window.matchMedia("(min-width: 1024px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    if (!mq.matches) {
        let trafficData = {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"
            ],

            datasets: [{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                    2500
                ],

                backgroundColor: 'rgba(195,237,234, .3)',
                borderWidth: 1,
            }]
        };

        // Traffic Chart 1

        let trafficData1 = {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"
            ],
            datasets: [{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                    2500
                ],
                backgroundColor: 'rgba(195,237,234, .3)',
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
                backgroundColor: 'rgba(195,237,234, .3)',
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
                backgroundColor: 'rgba(195,237,234, .3)',
                borderWidth: 1,
            }]
        };

        // Traffic Chart 4

        let trafficData4 = {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"
            ],
            datasets: [{
                data: [10000, 600, 1500, 2000, 5000, 1750, 1250, 1050, 250, 1500,
                    2500
                ],
                backgroundColor: 'rgba(195,237,234, .3)',
                borderWidth: 1,
            }]

        };


        // Traffic Options

        let trafficOptions = {
            aspectRatio: 2.5,
            responsive: true,
            animation: {
                duration: 1000 * 1,
                easing: 'linear'

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
            data: trafficData1,
            options: trafficOptions
        });


        let trafficNav = document.getElementsByClassName('traffic-nav')[0];
        trafficNav.addEventListener('click', e => {
            if (e.target.tagName === 'LI') {
                let navName = e.target.textContent;
                const navElement = e.target;
                // console.log(navName);
                // console.log(navElement);

                if (navName === 'Hourly') {
                    trafficData = trafficData1;
                }
                if (navName === 'Daily') {
                    trafficData = trafficData2;
                }
                if (navName === 'Weekly') {
                    trafficData = trafficData3;
                }
                if (navName === 'Monthly') {
                    trafficData = trafficData4;
                }

                let trafficChart = new Chart(trafficCanvas, {
                    type: 'line',
                    data: trafficData,
                    options: trafficOptions
                });
            }
        });
    } else {

        let trafficData = {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"
            ],

            datasets: [{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
                    2500
                ],

                backgroundColor: 'rgba(255,213,171, .3)',
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
                backgroundColor: 'rgba(255,213,171, .3)',
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
                backgroundColor: 'rgba(255,213,171, .3)',
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
                backgroundColor: 'rgba(255,213,171, .3)',
                borderWidth: 1,
            }]
        };

        // Traffic Chart 4

        let trafficData4 = {
            labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
                "4-10", "11-17", "18-24", "25-31"
            ],
            datasets: [{
                data: [10000, 600, 1500, 2000, 5000, 1750, 1250, 1050, 250, 1500,
                    2500
                ],
                backgroundColor: 'rgba(255,213,171, .3)',
                borderWidth: 1,
            }]

        };


        // Traffic Options

        let trafficOptions = {
            aspectRatio: 2.5,
            responsive: true,
            animation: {
                duration: 1000 * 1,
                easing: 'linear'

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
            data: trafficData1,
            options: trafficOptions
        });


        let trafficNav = document.getElementsByClassName('traffic-nav')[0];
        trafficNav.addEventListener('click', e => {
            if (e.target.tagName === 'LI') {
                let navName = e.target.textContent;
                const navElement = e.target;
                // console.log(navName);
                // console.log(navElement);

                if (navName === 'Hourly') {
                    trafficData = trafficData1;
                }
                if (navName === 'Daily') {
                    trafficData = trafficData2;
                }
                if (navName === 'Weekly') {
                    trafficData = trafficData3;
                }
                if (navName === 'Monthly') {
                    trafficData = trafficData4;
                }

                let trafficChart = new Chart(trafficCanvas, {
                    type: 'line',
                    data: trafficData,
                    options: trafficOptions
                });
            }
        });
    }
}


// Section C - Daily Traffic & Mobile Users

const dailyCanvas = document.getElementById("daily-chart-widget");

// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#c3edea',
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
            '#1f4068',
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
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

// Notifications dropdown //

const dropDown = document.querySelector('.drop-down');
const bell = document.querySelector('.bell')
dropDown.style.display = 'none'


bell.addEventListener("click", (e) => {
    if (dropDown.style.display === 'none') {
        dropDown.style.display = "";

    } else {
        dropDown.style.display = "none";
    }
})


// Autocomplete Feature for "Search for User" 
// Reference - https://www.w3schools.com/howto/howto_js_autocomplete.asp

const userNames = ['Viktoria Chambers', 'Dale Byrd', 'Chen Wood', 'Dan Oliver'];

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {
            return false;
        }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }

    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById('user'), userNames);



// Use local storage to save the settings

const settingArea = document.querySelector('.settings');
const allInput = document.querySelectorAll('input[type="checkbox"]');
const timeInput = document.querySelector('.time-zone');

settingArea.addEventListener('click', (e) => {
    if (e.target.classList.contains('save-button'))
    {
        for (let i = 0; i < allInput.length; i += 1) {
            localStorage.setItem(allInput[i].value, allInput[i].checked);
        }
        localStorage.setItem('selectValue', timeInput.value);
    }

    if (e.target.classList.contains('cancel-button')) {
        localStorage.clear();
        timeInput.value = "";
        localStorage.setItem('selectValue', timeInput.value);
        for (let i = 0; i < allInput.length; i += 1) {
            allInput[i].checked = false;
            
        }
    }
});

for (let i = 0; i < allInput.length; i += 1) {
    
    // console.log(allInput[1].checked, allInput[1].value);
    allInput[i].checked = localStorage.getItem(allInput[i].value) === "true" ? true:false;

}
timeInput.value = localStorage.getItem('selectValue');
