const display = document.getElementById("display");
let bracketBalance = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearScreen() {
    display.value = "";
    bracketBalance = 0;
}

function calculate() {
    try {
        // Evaluate the expression safely
        let result = Function('"use strict";return (' + display.value + ')')();
        if (Number.isFinite(result)) {
            result = parseFloat(result.toFixed(15));
            display.value = result.toString().replace(/(\.0+|(\.\d+?)0+)$/, '$2');
        } else {
            display.value = "Error";
        }
    } catch (error) {
        display.value = "Error";
    }
    display.style.backgroundColor = "lightgray";
    display.style.transition = "all 1s ease";
    setTimeout(() => { display.style.backgroundColor = "white"; }, 500);
    setTimeout(() => { display.style.transition = "none"; }, 1000);
}

function appendToDisplayBrackets() {
    const lastChar = display.value.slice(-1);
    if (bracketBalance % 2 === 0) {
        if (lastChar && !/[+\-*/(]/.test(lastChar)) {
            display.value += '*(';
        } else {
            display.value += '(';
        }
        bracketBalance++;
    } else {
        if (lastChar && !/[+\-*/]/.test(lastChar)) {
            display.value += ')';
            bracketBalance--;
        } else {
            display.value += '(';
            bracketBalance++;
        }
    }
}

function deleteChar() {
    const lastChar = display.value.slice(-1);
    if (lastChar === "(") {
        bracketBalance--;
    } else if (lastChar === ")") {
        bracketBalance++;
    }
    display.value = display.value.slice(0, -1);
}