function numberEpsilon() {
    const data = document.getElementById("numberEpsilonValueId").value;
    const showResult = document.getElementById("numberEpsilonIdResult");
    let stringArr = data.split(" ");
    let result = 0;
    let dataInitial = "";

    stringArr.forEach((e)=>{
        // to prevent from adding other than a number as a stringArr
        result = (isNaN(Number(e))) ? result: result + Math.abs(Number(e));
        dataInitial += e + '|';
    });
    console.log(result);

    let UnderEpsilon = (result - result)  < Number.EPSILON;
    showResult.innerHTML = `Les nombres de base : ${dataInitial} . </br>
     Le total : ${result}. </br>
    Les erreur de calcul si il y en as sont elle plus petite que epsilon ? : ${UnderEpsilon} `
}