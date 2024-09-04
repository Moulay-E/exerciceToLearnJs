function isoDateHourMinuteSecond() {
    const data = document.getElementById("isoDateHourMinuteSecondValueId").value;
    const showResult = document.getElementById("isoDateHourMinuteSecondIdResult");
    let result = new Date("2015-03-25T12:00:00Z") ;

    showResult.innerHTML = `The date now:  ${result}. `
}