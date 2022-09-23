//  GET ELEMENTS
const inputUser = document.getElementById('input01');
const btn01 = document.getElementById('btn01');
const output = document.getElementById('text-output');

// FUNCTION TO DISPLAY TEXT IN THE DIV 
function displayText() {
    output.innerHTML = inputUser.value;
    inputUser.value = '';
}

// ACTIVE BUTTON
btn01.addEventListener('click', displayText);
