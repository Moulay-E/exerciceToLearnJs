function stringLength(param){
    let data = document.getElementById("stringSize").value;
    let textLength = data.length;
    let textResult = document.getElementById("stringSizeResult");
    textResult.innerText = textLength;
}

function findCharacterInString(){
    let data = document.getElementById("characterInString").value;
    let charAt = data.charAt(1);
    let charCodeAt = data.charCodeAt(1);
    let at = data.at(1);
    let propertyAccess = data[1]
    let textResult = document.getElementById("characterInStringResult");
    textResult.innerHTML = `Tout est a index 1: <br> chatAt: ${charAt} <br>
        charCodeAt: ${charCodeAt}<br> at: ${at} <br> property access (unpredictable): ${propertyAccess}  ` ;
}

function extractingStringPart(){
    let data = document.getElementById("extractStringPartId").value;
    let slice = data.slice(1,5);
    let sliceNegative = data.slice(-5);
    let subString = data.substring(1,5);
    let substr = data.substr(1,5);
    let at = data.at(1);
    let textResult = document.getElementById("extractStringPartIdgResult");
    textResult.innerHTML = `index 1 au début et 5 fin: 
    <br> slice sans param s'arrete a la fin: ${slice} <br>
    slice negative start a la fin: ${sliceNegative}
    <br> substring (negative is treated as 0): ${subString} 
    <br> substr, deuxieme params est la longueur de la chaine, negatif comme slice: ${substr}  ` ;
}