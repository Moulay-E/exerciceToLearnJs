function mathRound() {
    const data = document.getElementById("mathRoundValueId").value;
    const showResult = document.getElementById("mathRoundIdResult");
    let dataToNumber = Number(data);
    let roundNumber = Math.round(dataToNumber)

    showResult.innerHTML = `Your number:  ${data}. <br> 
        The rounded number: ${roundNumber}.    `
}
function mathCeil() {
    const data = document.getElementById("mathCeilValueId").value;
    const showResult = document.getElementById("mathCeilIdResult");
    let dataToNumber = Number(data);
    let ceilNumber = Math.ceil(dataToNumber)

    showResult.innerHTML = `Your number:  ${data}. <br> 
        The ceil number: ${ceilNumber}.    `
}
function mathFloor() {
    const data = document.getElementById("mathFloorValueId").value;
    const showResult = document.getElementById("mathFloorIdResult");
    let dataToNumber = Number(data);
    let floorNumber = Math.floor(dataToNumber)

    showResult.innerHTML = `Your number:  ${data}. <br> 
        The floor number: ${floorNumber}.    `
}
function mathTrunc() {
    const data = document.getElementById("mathTruncValueId").value;
    const showResult = document.getElementById("mathTruncIdResult");
    let dataToNumber = Number(data);
    let truncNumber = Math.trunc(dataToNumber)

    showResult.innerHTML = `Your number:  ${data}. <br> 
        The trunc number: ${truncNumber}.    `
}
function mathSign() {
    const data = document.getElementById("mathSignValueId").value;
    const showResult = document.getElementById("mathSignIdResult");
    let validData = JSON.parse(data)
    let typeOfNumber = Math.sign(validData)
    let result = "";
    switch(typeOfNumber){
        case 0:
            result = "null";
            break;
        case 1:
            result = "positive";
            break;
        case -1: 
        result = "negative";
        break;
        default:
            'type a valid input.'
    }

    showResult.innerHTML = `Your value:  ${data}. <br> 
        The return of sign : ${typeOfNumber} </br>
        The type of number: ${result}.    `
}

function mathPow() {
    const data = document.getElementById("mathPowValueId").value;
    const showResult = document.getElementById("mathPowIdResult");
    let result = Math.pow(8,2)


    showResult.innerHTML = `The result  ${result}. `
}
function mathSqrt() {
    const data = document.getElementById("mathSqrtValueId").value;
    const showResult = document.getElementById("mathSqrtIdResult");
    let dataToNumber = Number(data);
    let result = Math.sqrt(dataToNumber)

    showResult.innerHTML = `Your number:  ${data}. <br> 
        The square number: ${result}.    `
}
function mathAbs() {
    const data = document.getElementById("mathAbsValueId").value;
    const showResult = document.getElementById("mathAbsIdResult");
    let dataToNumber = Number(data);
    let result = Math.abs(dataToNumber)

    showResult.innerHTML = `Your number:  ${data}. <br> 
        The absolute number: ${result}.    `
}
function mathSin() {
    const data = document.getElementById("mathSinValueId").value;
    const showResult = document.getElementById("mathSinIdResult");
    let dataToNumber = Number(data);
    let result = Math.sin( dataToNumber * Math.PI /180 );

    showResult.innerHTML = `Your number:  ${dataToNumber}. <br> 
        The sin of the angle: ${result}.    `
}
function mathCos() {
    const data = document.getElementById("mathCosValueId").value;
    const showResult = document.getElementById("mathCosIdResult");
    let dataToNumber = Number(data);
    let result = Math.cos( dataToNumber * Math.PI /180 );

    showResult.innerHTML = `Your number:  ${dataToNumber}. <br> 
        The cos of the angle: ${result}.    `
}
function mathMinMax() {
    const data = document.getElementById("mathMinMaxValueId").value;
    const showResult = document.getElementById("mathMinMaxIdResult");
    let resultMin = Math.min( 4,44,1, 300, 444, 6);
    let resultMax = Math.max( 4,44,1, 300, 444, 6);


    showResult.innerHTML = `The number list:  [4,44,1, 300, 444, 6]. <br> 
        Min value: ${resultMin}. </br> 
        Max value: ${resultMax}.  `
}