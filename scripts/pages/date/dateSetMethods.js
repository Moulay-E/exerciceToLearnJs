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
    let dataResult = 11;
    if(data >=0 && data <= 11){
        dataResult = data;
    }

    showResult.innerHTML = `The date:  ${date}. <br> `
}
function dateSetDate() {
    const data = document.getElementById("dateSetDateValueId").value;
    const showResult = document.getElementById("dateSetDateIdResult");
    let date = new Date() ;
    let dataResult = 11;
    if(data >=0 && data <= 31){
        dataResult = data;
    }

    showResult.innerHTML = `The date:  ${date}. <br> `
}

