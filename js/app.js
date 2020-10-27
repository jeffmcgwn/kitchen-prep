function countdown() {
    let daysLeft = document.getElementById('daysleft');
    let hoursLeft = document.getElementById('hoursleft');
    let minsLeft = document.getElementById('minutesleft');

const targetDate = new Date("June 17, 2021 8:00:00").getTime();

    var x = setInterval(function() {
        var now = new Date().getTime();
        
        var distance = targetDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        console.log(days);


    daysLeft.innerHTML = `${days}`;
    hoursLeft.innerHTML = `${hours}`
    minsLeft.innerHTML = `${minutes}`
}, 1000)
};
countdown();