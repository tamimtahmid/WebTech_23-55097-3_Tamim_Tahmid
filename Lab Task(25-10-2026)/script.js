
function addValue(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value ="";
}

function deleteNumber() {
    let display =
        document.getElementById("display").value;
    document.getElementById("display").value =
        display.slice(0, display.length - 1);
}
function calculate() {
    let expression =
        document.getElementById("display").value;
    expression = expression.replace(/×/g, "*");
    if (expression == "") {
        alert("Please Enter a Calculation");
        return;
    }
    let result = eval(expression);
    document.getElementById("display").value = result;
}
