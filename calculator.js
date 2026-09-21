
function doAdd(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("output").innerHTML = `${num1 + num2}`

}

function doSubtract(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `${num1 - num2}`
}

function doMultiply(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `${num1 * num2}`
}

function doDivide(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = `${num1 / num2}`
}

function doPower(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let res = num1
    for (let i = 1; i < num2; i++){
        res = res * num1
    }
    document.getElementById("output").innerHTML = `${res}`
}

function doClear(){
    document.getElementById("num1").value= ''; // Figured out that it has to be .value to be able to clear the input boxes
    document.getElementById("num2").value = ''; // This is because the inputted text is stored as a value.
    document.getElementById("output").innerHTML = ''; // This is innerHTML because it is an HTML text element.

}