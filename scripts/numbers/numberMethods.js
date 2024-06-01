
function numberToString() {
    const data = document.getElementById("numberToStringValueId").value;
    const showResult = document.getElementById("numberToStringIdResult");
    let  dataToNumber = Number(data)
    let result = (dataToNumber).toString();
    showResult.innerHTML = `Le nombre convertie en string : ${result} . </br>
    Avant convertion : ${typeof Number(dataToNumber)}. </br>
    Le type est : ${typeof result} `
}
function numberToExponential() {
    const data = document.getElementById("numberToExponentialValueId").value;
    const showResult = document.getElementById("numberToExponentialIdResult");
    let  dataToNumber = Number(data)
    let result = dataToNumber.toExponential(4);
    showResult.innerHTML = `Le nombre en exponentiel, 4 chiffres après la virgule : ${result} . `
}
function numberToFixed() {
    const data = document.getElementById("numberToFixedValueId").value;
    const showResult = document.getElementById("numberToFixedIdResult");
    let number = 555555.5555555555
    let  dataToNumber = Number(data)
    let result = number.toFixed(4);
    showResult.innerHTML = `retoune le nombre avec comme parametre ce qui doit s'affciher après la virgule : ${result} . `
}
function numberToPrecision() {
    const data = document.getElementById("numberToPrecisionValueId").value;
    const showResult = document.getElementById("numberToPrecisionIdResult");
    let number = 555555.5555555555
    let  dataToNumber = Number(data)
    let result = number.toPrecision(dataToNumber);
    showResult.innerHTML = `Permet de controler le nombre total a afficher : ${result} . `
}
function numberTheValueOf() {
    const data = document.getElementById("numberTheValueOfValueId").value;
    const showResult = document.getElementById("numberTheValueOfIdResult");
    let numObj = new Number(data);
    let  objectToNumber = numObj.valueOf()
    showResult.innerHTML = `
        Le chiffre rentré est transformer en objet : ${typeof numObj} . </br>
        L'objet et transformer en nombre grace a valueOf: ${typeof objectToNumber} . 
    `
}
function numberNumber() {
    const data = document.getElementById("numberNumberValueId").value;
    const showResult = document.getElementById("numberNumberIdResult");
    let notAString = JSON.parse(data);
    let result = Number(notAString);
    showResult.innerHTML = `
        Voici l'élément : ${ result} . </br>
        Et voici son type: ${typeof result} . 
    `
} 
function numberParseInt() {
    const data = document.getElementById("numberParseIntValueId").value;
    const showResult = document.getElementById("numberParseIntIdResult");
    let result = parseInt(data);
    showResult.innerHTML = `
        Voici l'élément : ${ result} . </br>
        Et voici son type: ${typeof result} . 
    `
} 
function numberParseFloat() {
    const data = document.getElementById("numberParseFloatValueId").value;
    const showResult = document.getElementById("numberParseFloatIdResult");
    let result = parseFloat(data);
    showResult.innerHTML = `
        Voici l'élément : ${ result} . </br>
        Et voici son type: ${typeof result} . 
    `
} 
function numberIsInteger() {
    const data = document.getElementById("numberIsIntegerValueId").value;
    const showResult = document.getElementById("numberIsIntegerIdResult");
    let notAString = JSON.parse(data);
    let result = Number.isInteger(notAString);
    showResult.innerHTML = `
        L'élément est il un nombre? : ${result} . </br>. 
    `
} 
function numberIsSafeInteger() {
    const data = document.getElementById("numberIsSafeIntegerValueId").value;
    const showResult = document.getElementById("numberIsSafeIntegerIdResult");
    let notAString = JSON.parse(data);
    let result = Number.isSafeInteger(notAString);
    showResult.innerHTML = `
        L'élément est il un nombre safe? : ${result} . </br> . 
    `
} 
function numberNumberParseFloat() {
    const data = document.getElementById("numberNumberParseFloatValueId").value;
    const showResult = document.getElementById("numberNumberParseFloatIdResult");
    let notAString = JSON.parse(data);
    let result = Number.isSafeInteger(notAString);
    showResult.innerHTML = `
        L'élément est il un nombre safe? : ${result} . </br> . 
    `
} 

