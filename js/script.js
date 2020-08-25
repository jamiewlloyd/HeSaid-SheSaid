const NUMBER_OF_BUTTONS = 9;

let heInput = document.getElementById("he");
let sheInput = document.getElementById("she");
let lnHeInput = document.getElementById("lnHe");
let lnSheInput = document.getElementById("lnShe");
let theyInput = document.getElementById("they");
let heSaidInput = document.getElementById("heSaid");
let sheSaidInput = document.getElementById("sheSaid");
let onlookersInput = document.getElementById("onlookers");
let tomorrowInput = document.getElementById("tomorrow");

const generateBtn = document.getElementById("generator");
const resetBtn = document.getElementById("reset");

let count = 0;

document.addEventListener("DOMContentLoaded", function () {
    heInput.focus();
});

const processInput = (e) => {
    let input = e.srcElement.previousElementSibling;
    let inputValue = input.value;
    if (inputValue.length > 0) {
        input.parentElement.classList.add("hide");
        if (input.parentElement.classList.contains('last')) {
            count++;
        } else {
            input.parentElement.nextElementSibling.childNodes[3].focus();
            count++;
        }
    }
    generateButton();
};

const generateButton = () => {
    if (count === NUMBER_OF_BUTTONS) {
        generateBtn.classList.toggle("hide");
        count = 0;
    }
};

const generateStory = () => {
    generateBtn.classList.toggle("hide");
    document.getElementById("story").innerHTML = `He was ${heInput.value}. She was ${sheInput.value}. 
    Last night he ${lnHeInput.value} while she ${lnSheInput.value}. Today they were ${theyInput.value}. 
    He said ${heSaidInput.value} and she said ${sheSaidInput.value}. Onlookers said ${onlookersInput.value}. 
    Tomorrow they will ${tomorrowInput.value}.`;
    document.getElementById("story").classList.toggle("hide");
    resetBtn.classList.toggle("hide");
}

const entergenerateStory = (e) => {
    if (!generateBtn.classList.contains('hide') && e.keyCode === 13) {
        generateStory();
    }
}

const pageReset = () => {
    let children = document.getElementById("inputs").children;
    document.getElementById("story").classList.toggle("hide");
    resetBtn.classList.toggle("hide");
    for (let i = 0; i < children.length; i++) {
        children[i].classList.toggle("hide");
        children[i].childNodes[3].value = "";

    }

}

const enterSubmit = (e) => {
    if (e.keyCode === 13) {
        e.srcElement.nextElementSibling.click();
    }
}

document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', processInput);
})

generateBtn.addEventListener("click", generateStory);
document.addEventListener("keydown", entergenerateStory);
resetBtn.addEventListener("click", pageReset);

document.querySelectorAll('input').forEach(item => {
    item.addEventListener('keypress', enterSubmit);
})