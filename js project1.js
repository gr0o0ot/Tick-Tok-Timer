const dayselement1 = document.getElementById('days');
const hourselement1 = document.getElementById('hours');
const minselement1 = document.getElementById('mins');
const secondselement1 = document.getElementById('seconds');

// we can initialize any date here for the countdown
const newyears = '21 jan 2022';

// finding and printing the number of days left for new year

function countdown(){
    const newyearsdate = new Date(newyears);
    const currentdate = new Date();
    
    const totalseconds = (newyearsdate -currentdate) / 1000;
    
    const seconds = Math.floor(totalseconds%60);
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = (Math.floor(totalseconds/60) % 24) % 60;
    

    dayselement1.innerHTML = days;
    hourselement1.innerHTML = formattime(hours);
    minselement1.innerHTML = formattime(minutes);
    secondselement1.innerHTML = seconds;
   

}

// for displaying time a "01" instead of "1" in the countdown

function formattime(time)
{
    return time < 10 ? (`0${time}`) : time;
}

// initial call
countdown();

// for the coundown function  to repeat itself at an interval of milliseconds 
setInterval(countdown, 1000);