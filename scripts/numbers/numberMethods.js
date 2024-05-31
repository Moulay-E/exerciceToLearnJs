
function numberToString() {
    const data = document.getElementById("numberToStringValueId").value;
    const showResult = document.getElementById("numberToStringIdResult");
   let  dataToNumber = Number(data)
    let result = (dataToNumber).toString();
    showResult.innerHTML = `Le nombre convertie en string : ${result} . </br>
    Avant convertion : ${typeof Number(dataToNumber)}. </br>
    Le type est : ${typeof result} `
}