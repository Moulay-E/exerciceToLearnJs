function arrMethodsLength() {
    const data = document.getElementById("arrMethodsLengthValueId").value;
    const showResult = document.getElementById("arrMethodsLengthIdResult");
    let stringToArr = data.split(" ");
    let arrLenght = stringToArr.length;

    showResult.innerHTML = `Le tableau crée a partir de vos données : [${stringToArr}] . </br>
     Sa lenth : ${arrLenght}. `
}
function arrMethodsToString() {
    const data = document.getElementById("arrMethodsToStringValueId").value;
    const showResult = document.getElementById("arrMethodsToStringIdResult");
    let stringToArr = data.split(" ");
    let arrString =  stringToArr.toString();

    showResult.innerHTML = `Le tableau crée a partir de vos données : [${stringToArr}] . </br>
     Convertie en string : ${arrString}. `
}
function arrMethodsArrayAt() {
    const data = document.getElementById("arrMethodsArrayAtValueId").value;
    const showResult = document.getElementById("arrMethodsArrayAtIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let errorMsg = "error you need a number";
    let validNumber = (isNaN((Number(data))) ? errorMsg : arr.at((Number(data))));
    let arrAt =  validNumber;

    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
     Votre selection : ${arrAt}. `
}
function arrMethodsJoin() {
    const data = document.getElementById("arrMethodsJoinValueId").value;
    const showResult = document.getElementById("arrMethodsJoinIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let arrJoin =  arr.join(data);

    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
     Le tableau coller avec ce que vous avez selecitonner : ${arrJoin}. `
}
function arrMethodsPop() {
    const data = document.getElementById("arrMethodsPopValueId").value;
    const showResult = document.getElementById("arrMethodsPopIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let arrPop =  arr.pop();

    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
     Le dernier élément supprimer : ${arrPop}. </br>
     Le tableau avec le dernier élément supprimer : [${arr}] `
}
function arrMethodsPush() {
    const data = document.getElementById("arrMethodsPushValueId").value;
    const showResult = document.getElementById("arrMethodsPushIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let arrPush =  arr.push(data);

    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
     La place dans le tableau du dernier element ajouter : ${arrPush}. </br>
     Le tableau avec l"élément ajouter : [${arr}] `
}
function arrMethodsShift() {
    const data = document.getElementById("arrMethodsShiftValueId").value;
    const showResult = document.getElementById("arrMethodsShiftIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let arrCopy = [...arr];
    let arrShift =  arr.shift();

    showResult.innerHTML = `Le tableau de base : [${arrCopy}] . </br>
     L'élément supprimer' : ${arrShift}. </br>
     Le tableau avec l"élément supprimer : [${arr}] `
}
function arrMethodsUnShift() {
    const data = document.getElementById("arrMethodsUnShiftValueId").value;
    const showResult = document.getElementById("arrMethodsUnShiftIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let arrCopy = [...arr];
    let arrUnshift =  arr.unshift(data);

    showResult.innerHTML = `Le tableau de base : [${arrCopy}] . </br>
     Unshit retourne la taille du nouveau tableau: ${arrUnshift}. </br>
     Le tableau avec l"élément ajouter : [${arr}] `
}
function arrMethodsConcat() {
    const data = document.getElementById("arrMethodsConcatValueId").value;
    const showResult = document.getElementById("arrMethodsConcatIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let dataArr = data.split(" ");
    let arrConcat =  [...arr].concat(dataArr);

    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
     Vôtre tableau: ${dataArr}. </br>
     Les tableau concatener : [${arrConcat}] `
}
function arrMethodscopyWithin() {
    const data = document.getElementById("arrMethodscopyWithinValueId").value;
    const showResult = document.getElementById("arrMethodscopyWithinIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let errorMsg = "error, we need a number, inferior of the array length.";
    let dataIsNumber = (isNaN(Number(data)))? errorMsg : (Number(data));
    let arrCopyWithin = (dataIsNumber < arr.length)? (arr.copyWithin(0,dataIsNumber)) : errorMsg;

    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
     Vôtre tableau: ${arrCopyWithin}. </br>
     Les tableau concatener : [${arrCopyWithin}] `
}
function arrMethodArrayflat() {
    const data = document.getElementById("arrMethodArrayflatValueId").value;
    const showResult = document.getElementById("arrMethodArrayflatIdResult");
    let arr = ["cacao", ["banane", "lait"], "vanille"];
    let arrFlat =  arr.flat();

    showResult.innerHTML = `Le tableau de base : ["cacao", ["banane", "lait"], "vanille"] . </br>
     Le tableau une fois unifier a un niveau: [${arrFlat}]. `
}
function arrMethodsSplice() {
    const data = document.getElementById("arrMethodsSpliceValueId").value;
    const showResult = document.getElementById("arrMethodsSpliceIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let arrCopy = Array.from(arr);
    let arrSplice =  arr.splice(2, 2, data);

    showResult.innerHTML = `Le tableau de base : [${arrCopy}] . </br>
    Le tableau modifier : [${arr}] . </br>
     Les élément supprimer: ${arrSplice}. `
}
function arrMethodsToSpliced() {
    const data = document.getElementById("arrMethodsToSplicedValueId").value;
    const showResult = document.getElementById("arrMethodsToSplicedIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let arrSplice =  arr.toSpliced(2, 2, data);

    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
    Le tableau modifier : [${arrSplice}] . `
}
function arrMethodsSlice() {
    const data = document.getElementById("arrMethodsSliceValueId").value;
    const showResult = document.getElementById("arrMethodsSliceIdResult");
    let arr = ["cacao", "banane", "lait", "vanille"];
    let errorMsg = "Please type a number, under the max length of the array.";
    let dataNumber = Number(data);
    let arrSplice;
    if(dataNumber && dataNumber <= arr.length-1){
         arrSplice =  arr.slice(dataNumber);
    }
    else{
       arrSplice = errorMsg;
    }
    showResult.innerHTML = `Le tableau de base : [${arr}] . </br>
    Le tableau modifier : [${arrSplice}] . `
}