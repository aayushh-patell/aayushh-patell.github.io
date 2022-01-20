document.getElementById("one").onclick = function() {
    calculator.display.value += '1';
}

document.getElementById("two").onclick = function() {
    calculator.display.value += '2';
}

document.getElementById("three").onclick = function() {
    calculator.display.value += '3';
}

document.getElementById("four").onclick = function() {
    calculator.display.value += '4';
}

document.getElementById("five").onclick = function() {
    calculator.display.value += '5';
}

document.getElementById("six").onclick = function() {
    calculator.display.value += '6';
}

document.getElementById("seven").onclick = function() {
    calculator.display.value += '7';
}

document.getElementById("eight").onclick = function() {
    calculator.display.value += '8';
}

document.getElementById("nine").onclick = function() {
    calculator.display.value += '9';
}

document.getElementById("zero").onclick = function() {
    calculator.display.value += '0';
}

document.getElementById("plus").onclick = function() {
    calculator.display.value += '+';
}

document.getElementById("minus").onclick = function() {
    calculator.display.value += '-';
}

document.getElementById("multiply").onclick = function() {
    calculator.display.value += '*';
}

document.getElementById("divide").onclick = function() {
    calculator.display.value += '/';
}

document.getElementById("clear").onclick = function() {
    calculator.display.value = ' ';
}

document.getElementById("equals").onclick = function() {
    calculator.display.value = eval(calculator.display.value);
}