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
    let result = new Date(data) ;

    showResult.innerHTML = `The date now:  ${result}. `
}