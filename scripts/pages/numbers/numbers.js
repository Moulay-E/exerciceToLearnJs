function stringEndsWith() {
    const data = document.getElementById("stringEndsWithValueId").value;
    const showResult = document.getElementById("stringEndsWithIdResult");
    let string = "Hello world, welcome to the universe.";

    let indexFind = string.endsWith(data);
    showResult.innerHTML = `Si la string selectionner termine par la valeur indiquer : ${indexFind} . `
}