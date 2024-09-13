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