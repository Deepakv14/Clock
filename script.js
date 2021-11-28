console.log("Hello");


setInterval(() => {

    d = new Date();
    daytime = d.getDate();
    day = d.getDay();
    month = d.getMonth();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    yyyy = d.getFullYear();
    const da = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const mon = ['JAN', 'FEB', 'MARCH', 'APR', 'MAY', 'JUN', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;


    //D I G I T A L     C L O C K
    let day_night = "AM";
    if (htime > 12) {
        day_night = "PM";
        htime = htime - 12;
    }
    if (stime < 10) {
        stime = "0" + stime;
    }
    if (mtime < 10) {
        mtime = "0" + mtime;
    }
    if (htime < 10) {
        htime = "0" + htime;
    }

    let date = document.getElementById("date");
    let time = document.getElementById("time");

    date.innerText = da[day] + " , " + daytime + " " + mon[month] + ' ' + yyyy;
    time.innerText = htime + ":" + mtime + ":" + stime + " " + day_night;
}, 1000);