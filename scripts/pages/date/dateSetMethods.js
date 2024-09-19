function dateSetYear() {
    const data = document.getElementById("dateSetYearValueId").value;
    const showResult = document.getElementById("dateSetYearIdResult");
    let date = new Date() ;

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
function dateSetHour() {
    const data = document.getElementById("dateSetHourValueId").value;
    const showResult = document.getElementById("dateSetHourIdResult");
    let date = new Date() ;
    let hourResult = 11;
    let dataToNumber = Number(data);
    
    if( !isNaN(Number(dataToNumber))  && dataToNumber >= 0 && dataToNumber <= 59 ){
        hourResult = dataToNumber;
    }

    date.setHours(hourResult);

    showResult.innerHTML = `The date with hour change:  ${date}. <br> `
}
function dateSetMinutes() {
    const data = document.getElementById("dateSetMinutesValueId").value;
    const showResult = document.getElementById("dateSetMinutesIdResult");
    let date = new Date() ;
    let minuteResult = 11;
    let dataToNumber = Number(data);
    
    if( !isNaN(Number(dataToNumber))  && dataToNumber >= 0 && dataToNumber <= 59 ){
        minuteResult = dataToNumber;
    }

    date.setMinutes(minuteResult);

    showResult.innerHTML = `The date with minutes change:  ${date}. <br> `
}
function dateSetSeconds() {
    const data = document.getElementById("dateSetSecondsValueId").value;
    const showResult = document.getElementById("dateSetSecondsIdResult");
    let date = new Date() ;
    let secondResult = 11;
    let dataToNumber = Number(data);
    
    if( !isNaN(Number(dataToNumber))  && dataToNumber >= 0 && dataToNumber <= 59 ){
        secondResult = dataToNumber;
    }

    date.setSeconds(secondResult);

    showResult.innerHTML = `The date with seconds change:  ${date}. <br> `
}
function dateCompareExample() {
    const data = document.getElementById("dateCompareExampleValueId").value;
    const showResult = document.getElementById("dateCompareExampleIdResult");
    let text = "";
    let today = new Date() ;
    let someday = new Date();
    someday.setFullYear(2100, 0, 14);

    if(someday > today){
        text = "Today is before January 14, 2100";
    }
    else{
        text = "Today is after January 14, 2100";
    }
  

    showResult.innerHTML = ` ${text}. <br> `
}

