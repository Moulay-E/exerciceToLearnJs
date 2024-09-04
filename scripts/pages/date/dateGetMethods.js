
function newDateConstructor() {
    const data = document.getElementById("newDateConstructorValueId").value;
    const showResult = document.getElementById("newDateConstructorIdResult");
    let result = new Date(data) ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function getFullYear() {
    const data = document.getElementById("getFullYearValueId").value;
    const showResult = document.getElementById("getFullYearIdResult");
    let date = new Date("2021-03-25") ;
    let year = date.getFullYear();

    showResult.innerHTML = `The date:  ${date}. <br>
        The year: ${year} `
}
function getMonth() {
    const data = document.getElementById("getMonthValueId").value;
    const showResult = document.getElementById("getMonthIdResult");
    let date = new Date("2021-03-25") ;
    let month = date.getMonth();

    showResult.innerHTML = `The date:  ${date}. <br>
        The month: ${month+1} `
}
function getDate() {
    const data = document.getElementById("getDateValueId").value;
    const showResult = document.getElementById("getDateIdResult");
    let date = new Date("2021-03-25") ;
    let day = date.getDate();

    showResult.innerHTML = `The date:  ${date}. <br>
        The day: ${day} `
}