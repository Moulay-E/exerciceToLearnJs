function numberEpsilon() {
    const data = document.getElementById("numberEpsilonValueId").value;
    const showResult = document.getElementById("numberEpsilonIdResult");
    let  dataToNumber = Number(data)
    let result = (dataToNumber).toString();
    let arr = Array.from(data);
    console.log(arr, "arr")

    let comparaison = Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON;
    showResult.innerHTML = `Le nombre convertie en string : ${comparaison} . </br>
    Avant convertion : ${typeof Number(comparaison)}. </br>
    Le type est : ${typeof comparaison} `
}