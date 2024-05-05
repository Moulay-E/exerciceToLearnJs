function stringLength(){
    console.log("call");
    const data = document.getElementById("stringSize").value;
    let textLength = data.length;
    let textResult = document.getElementById("stringSizeResult");
    textResult.innerText = textLength;
    console.log("executer tring length");
}

function findCharacterInString(){
    const data = document.getElementById("characterInString").value;
    let charAt = data.charAt(1);
    let charCodeAt = data.charCodeAt(1);
    let at = data.at(1);
    let propertyAccess = data[1]
    let textResult = document.getElementById("characterInStringResult");
    textResult.innerHTML = `Tout est a index 1: <br> chatAt: ${charAt} <br>
        charCodeAt: ${charCodeAt}<br> at: ${at} <br> property access (unpredictable): ${propertyAccess}  ` ;
}

function extractingStringPart(){
    const data = document.getElementById("extractStringPartId").value;
    let slice = data.slice(1,5);
    let sliceNegative = data.slice(-5);
    let subString = data.substring(1,5);
    let substr = data.substr(1,5);
    let at = data.at(1);
    let textResult = document.getElementById("extractStringPartIdResult");
    textResult.innerHTML = `index 1 au début et 5 fin: 
    <br> slice sans param s'arrete a la fin: ${slice} <br>
    slice negative start a la fin: ${sliceNegative}
    <br> substring (negative is treated as 0): ${subString} 
    <br> substr, deuxieme params est la longueur de la chaine, negatif comme slice: ${substr}  ` ;
}

function upperAndLowerCase(){
    const showResult = document.getElementById("upperAndLowerCaseIdResult");
    const data = document.getElementById("upperAndLowerCaseValueId").value;
    let toUpper = data.toUpperCase();
    let toLower = data.toLowerCase();
    let concatValue = toUpper.concat(" ",toLower," is concated")
    showResult.innerHTML = `En majuscule : ${toUpper} . </br>
        En minuscule: ${toLower} .</br>
        Et concat  : ${concatValue}`
}

function allTrimMethods(){
    const showResult = document.getElementById("allTrimMethodsIdResult");
    const data = document.getElementById("allTrimMethodsValueId").value;
    let textWithSpace = "   voici un texte   "
    let addedSpace = textWithSpace.concat(" ", data, "  ");
    let noSpaceAround = addedSpace.trim();
    let noSpaceAtStart = addedSpace.trimStart();
    let noSpaceAtEnd = addedSpace.trimEnd()
    showResult.innerHTML = `Texte avec espace : ${addedSpace} . </br>
        Sans espace autour: ${noSpaceAround}.</br>
        Sans espace au début  : ${noSpaceAtStart}. </br>
        Sans espace au à la fin  : ${noSpaceAtEnd}.`
}
        
function allPadMethods(){
    const showResult = document.getElementById("allPadMethodsIdResult");
    const data = document.getElementById("allPadMethodsValueId").value;
    let text = "text a afficher ";
    let textPadStart = text.padStart("40", data);
    let textPadEnd = text.padEnd("40", data);
    showResult.innerHTML = `Texte de base : ${text} . </br>
        Texte avec pad au début 40x: ${textPadStart}.</br>
        Texte avec pad a la fin 40x  : ${textPadEnd}. </br>.`
}

function repeatString(){
    const showResult = document.getElementById("repeatStringIdResult");
    const data = document.getElementById("repeatStringValueId").value;
    let resultRepeat = data.repeat(5);
    showResult.innerHTML = `Texte de base : ${data} . </br>
        Texte répété 5x: ${resultRepeat}.</br>`
}

function replaceString(){
    const showResult = document.getElementById("replaceStringIdResult");
    const data = document.getElementById("replaceStringValueId").value;
    let baseText = "Hello world of my world !"
    let resultCaseSensitive = baseText.replace("world", data);
    let resultCaseInsensitive = baseText.replace(/world/i, data);
    let resultReplaceAllG = baseText.replace(/world/g, data);
    let resultReplaceAll = baseText.replaceAll("world", data);


    showResult.innerHTML = `Texte de base : ${baseText} . </br>
        Replace avec case sensible: ${resultCaseSensitive}.</br>
        Replace avec case insensible: ${resultCaseInsensitive}.</br>
        Replace all avec /g: ${resultReplaceAllG}.</br>
        Replace all sans /g: ${resultReplaceAll}.</br>`
}
     

function splitString(){
    const showResult = document.getElementById("splitStringIdResult");
    const data = document.getElementById("splitStringValueId").value;
    let splitOnSpace = data.split(" ");
    let splitOnCharacter = data.split("");
    let splitInFirstIndex = data.split();

    let textsplitdOnCharacter = "";
    for (let i = 0; i < splitOnCharacter.length; i++) {
        textsplitdOnCharacter += splitOnCharacter[i] + " "
    }
    let textsplitdOnSpace = "";
    for (let i = 0; i < splitOnSpace.length; i++) {
        textsplitdOnSpace += splitOnSpace[i] + " | "
    }
    showResult.innerHTML = `Texte de base : ${data} . </br>
        Texte au 1er index: ${splitInFirstIndex}.</br>
        Texte couper a chaque lettre: ${textsplitdOnCharacter}.</br>
        Texte couper a chaque espace: ${textsplitdOnSpace}.</br>`
}
