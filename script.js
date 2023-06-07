let displayBox = document.querySelector(".display");
document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);
let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})


function showDisplay(event) {
    const x = event.target.innerText;
    if (displayBox.innerHTML == 0) {
        return displayBox.innerHTML = x; // adad be jaye 0 biad : 5 , 8
    }
    return displayBox.innerHTML += x; // har adad vared shod, ezafe beshe : 57 , 89
}

function calculate() {
    let result = displayBox.innerText;
    displayBox.innerText = eval(result); //eval: hesab kardane adad
};

function allClear() {
    displayBox.innerText = 0;
}

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else { 
        displayBox.innerText = text.substring(0, text.length - 1) // az 0 ta yeki monde be akharesho neshun bede yani akhari ro hazf kon
    }
}

