function dateSetYear() {
    const data = document.getElementById("dateSetYearValueId").value;
    const showResult = document.getElementById("dateSetYearIdResult");
    let date = new Date() ;
    let day = date.setFullYear(2020, 11, 3);

    showResult.innerHTML = `The date:  ${date}. <br> `
}
function dateSetMonth() {
    const data = document.getElementById("dateSetMonthValueId").value;
    const showResult = document.getElementById("dateSetMonthIdResult");
    let date = new Date() ;
    let monthResult = 11;
    let dataToNumber = Number(data);
    
    if( !isNaN(Number(dataToNumber))  && dataToNumber >= 0 && dataToNumber <= 31 ){
        monthResult = dataToNumber;
    }
    date.setMonth(monthResult);

    showResult.innerHTML = `Your number:  ${monthResult}. <br> 
        The date changed: ${date}.    `
}
function dateSetDate() {
    const data = document.getElementById("dateSetDateValueId").value;
    const showResult = document.getElementById("dateSetDateIdResult");
    let date = new Date() ;
    let dayResult = 11;
    let dataToNumber = Number(data);
    
    if( !isNaN(Number(dataToNumber))  && dataToNumber >= 0 && dataToNumber <= 31 ){
        dayResult = dataToNumber;
    }

    date.setDate(dayResult);

    showResult.innerHTML = `The date:  ${date}. <br> `
}

