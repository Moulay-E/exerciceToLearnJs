function arrSome() {
    const data = document.getElementById("arrSomeValueId").value;
    const showResult = document.getElementById("arrSomeIdResult");
    let arr =  [45, 4, 9, 16, 25];
    let result ;
    const addAllElement = (element, index, arr) => element < data ;
    result = arr.reduceRight(addAllElement);
    if(Number(data)) {
        result = arr.some(addAllElement);
    }
    else {
        result = 'Type a number please.';
    }
    showResult.innerHTML = ` Your value: ${data} . </br>
    The array: ${arr} .</br>
    </br> Is the entered value greater than A values in the array?  ${result}. `
}