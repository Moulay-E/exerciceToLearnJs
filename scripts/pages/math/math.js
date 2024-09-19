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