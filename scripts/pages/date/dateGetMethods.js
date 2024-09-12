
function newDateConstructor() {
    const data = document.getElementById("newDateConstructorValueId").value;
    const showResult = document.getElementById("newDateConstructorIdResult");
    let result = new Date(data) ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function getFullYear() {
    const data = document.getElementById("getFullYearValueId").value;
    const showResult = document.getElementById("getFullYearIdResult");
    let date = new Date() ;
    let year = date.getFullYear();

    showResult.innerHTML = `The date:  ${date}. <br>
        The year: ${year} `
}
function getMonth() {
    const data = document.getElementById("getMonthValueId").value;
    const showResult = document.getElementById("getMonthIdResult");
    let date = new Date() ;
    let month = date.getMonth();

    showResult.innerHTML = `The date:  ${date}. <br>
        The month: ${month+1} `
}
function dateGetDate() {
    const data = document.getElementById("dateGetDateValueId").value;
    const showResult = document.getElementById("dateGetDateIdResult");
    let date = new Date() ;
    let day = date.getDate();

    showResult.innerHTML = `The date:  ${date}. <br>
        The day: ${day} `
}
function dateGetHour() {
    const data = document.getElementById("dateGetHourValueId").value;
    const showResult = document.getElementById("dateGetHourIdResult");
    let date = new Date() ;
    let hour = date.getHours();

    showResult.innerHTML = `The date:  ${date}. <br>
        The hour: ${hour} `
}
function dateGetseconds() {
    const data = document.getElementById("dateGetsecondsValueId").value;
    const showResult = document.getElementById("dateGetsecondsIdResult");
    let date = new Date() ;
    let seconds = date.getSeconds();

    showResult.innerHTML = `The date:  ${date}. <br>
        The seconds: ${seconds} `
}
function dateGetMilliseconds() {
    const data = document.getElementById("dateGetMillisecondsValueId").value;
    const showResult = document.getElementById("dateGetMillisecondsIdResult");
    let date = new Date() ;
    let milliseconds = date.getMilliseconds();

    showResult.innerHTML = `The date:  ${date}. <br>
        The milliseconds: ${milliseconds} `
}
function dateGetday() {
    const data = document.getElementById("dateGetdayValueId").value;
    const showResult = document.getElementById("dateGetdayIdResult");
    let date = new Date() ;
    let day = date.getDay();
    let dayName = ["Sunday","Monday ","Tuesday ","Wednesday ","Thursday ","Friday","Saturday "];

    showResult.innerHTML = `The date:  ${date}. <br>
        The return value ${day} <br>
        The day: ${dayName[day]} `
}
function dateGetTime() {
    const data = document.getElementById("dateGetTimeValueId").value;
    const showResult = document.getElementById("dateGetTimeIdResult");
    let date = new Date() ;
    let time = date.getTime();

    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const year = day * 365;

    let years = Math.round(Date.now() / year );

    let millisecondsSinceMinute = date.getSeconds() * 1000 + date.getMilliseconds();
    let millisecondsSinceHour = (date.getMinutes() * minute) + millisecondsSinceMinute;

 // Affichage des résultats
 showResult.innerHTML = `
     The time (since 1970): ${time} ms.<br>
     Milliseconds since the start of the current minute: ${millisecondsSinceMinute} ms.<br>
     Milliseconds since the start of the current hour: ${millisecondsSinceHour} ms. <br>
     Years since 1970: ${years} years.<br>

 `; 

}