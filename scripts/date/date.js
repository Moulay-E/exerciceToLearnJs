function dateNewDate() {
    const data = document.getElementById("dateNewDateValueId").value;
    const showResult = document.getElementById("dateNewDateIdResult");
    let result = new Date() ;

    showResult.innerHTML = `The date now:  ${result}. `
}
function dateNewDateString() {
    const data = document.getElementById("dateNewDateStringValueId").value;
    const showResult = document.getElementById("dateNewDateStringIdResult");
    let dateString = "September 5, 2016"
    let result = new Date(dateString) ;

    showResult.innerHTML = ` The date string: ${dateString} . </br>
    The date showed:  ${result}. `
}
function dateNewDateNumber() {
    const data = document.getElementById("dateNewDateNumberValueId").value;
    const showResult = document.getElementById("dateNewDateNumberIdResult");
    let arr =  [45, 4, 9, 16, 25];
    let dateString = "September 5, 2016"
    let result = new Date(2016, 11, 24, 10, 33, 30, 0) ;
    // const addAllElement = (element, index, arr) => element < data ;
    // result = arr.reduceRight(addAllElement);
    // if(Number(data)) {
    //     result = arr.some(addAllElement);
    // }
    // else {
    //     result = 'Type a number please.';
    // }
    showResult.innerHTML = ` The date string: 2016, 11, 24, 10, 33, 30, 0 . </br>
    The date showed:  ${result}. `
}