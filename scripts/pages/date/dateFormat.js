function isoDate() {
    const data = document.getElementById("isoDateValueId").value;
    const showResult = document.getElementById("isoDateIdResult");
    let result = new Date(data) ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function isoDateYearMonth() {
    const data = document.getElementById("isoDateYearMonthValueId").value;
    const showResult = document.getElementById("isoDateYearMonthIdResult");
    let result = new Date(data) ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function isoDateYear() {
    const data = document.getElementById("isoDateYearValueId").value;
    const showResult = document.getElementById("isoDateYearIdResult");
    let result = new Date(data) ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function isoDateHourMinuteSecond() {
    const data = document.getElementById("isoDateHourMinuteSecondValueId").value;
    const showResult = document.getElementById("isoDateHourMinuteSecondIdResult");
    let result = new Date("2015-03-25T12:00:00Z") ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function shortDate() {
    const data = document.getElementById("shortDateValueId").value;
    const showResult = document.getElementById("shortDateIdResult");
    let result = new Date("03/25/2015") ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function longDate() {
    const data = document.getElementById("longDateValueId").value;
    const showResult = document.getElementById("longDateIdResult");
    let result = new Date("Mar 25 2015") ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function parsingDate() {
    const data = document.getElementById("parsingDateValueId").value;
    const showResult = document.getElementById("parsingDateIdResult");
    let msec = Date.parse("March 21, 2012");
    const d = new Date(msec);
    showResult.innerHTML = `The date now:  ${result}. `
}