function stringIndexOf() {
    console.log("hello");
    const data = document.getElementById("indexOfStringValueId").value;
    const showResult = document.getElementById("indexOfStringIdResult");
    let string =  "Please locate where 'locate' occurs!";
    let indexFind = string.indexOf(data);

    showResult.innerHTML = `L'index est : ${indexFind}`

}

function stringLastIndexOf() {
    const data = document.getElementById("stringLastIndexOfValueId").value;
    const showResult = document.getElementById("stringLastIndexOfIdResult");
    let string =  "Please locate where 'locate' occurs!";
    let indexFind = string.lastIndexOf(data);

    showResult.innerHTML = `Le last index est : ${indexFind} .`
}

function stringSearch() {
    const data = document.getElementById("stringSearchValueId").value;
    const showResult = document.getElementById("stringSearchIdResult");
    let string =  "Please locate where 'locate' occurs!";
    let indexFind = string.search(data);

    showResult.innerHTML = `Le last index est : ${indexFind} .`
}
function stringMatch() {
    const data = document.getElementById("stringMatchValueId").value;
    const showResult = document.getElementById("stringMatchIdResult");
    let string =  "The rain in SPAIN stays mainly in the plain";
    let regex = new RegExp(data, 'g');
    let indexFind = string.match(regex);

    showResult.innerHTML = `La string à selectionner est: ${indexFind} . </br>
        Apparait:${indexFind.length} `
}

function stringMatchAll() {
    const data = document.getElementById("stringMatchAllValueId").value;
    const showResult = document.getElementById("stringMatchAllIdResult");
    let string = "I love cats. Cats are very easy to love. Cats are very popular.";
    let regex = new RegExp(data, "gi");

    let matchesIterator = string.matchAll(regex);
    let indexFind = Array.from(matchesIterator);
    console.log(data);

    showResult.innerHTML = `La string à selectionner est: ${Array.from(indexFind)} . </br>
        Apparait:${indexFind.length} `
}

function stringIncludes() {
    const data = document.getElementById("stringIncludesValueId").value;
    const showResult = document.getElementById("stringIncludesIdResult");
    let string = "Hello world, welcome to the universe.";

    let indexFind = string.includes(data);
    console.log(data);

    showResult.innerHTML = `Si la string selectionner apparait : ${indexFind} . `
}

function stringStartsWith() {
    const data = document.getElementById("stringStartsWithValueId").value;
    const showResult = document.getElementById("stringStartsWithIdResult");
    let string = "Hello world, welcome to the universe.";

    let indexFind = string.startsWith(data);
    console.log(data);

    showResult.innerHTML = `Si la string selectionner commence par la valeur indiquer : ${indexFind} . `
}