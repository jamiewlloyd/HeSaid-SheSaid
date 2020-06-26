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

const heBtn = document.getElementById("heBtn");
const sheBtn = document.getElementById("sheBtn");
const lnHeBtn = document.getElementById("lnHeBtn");
const lnSheBtn = document.getElementById("lnSheBtn");
const theyBtn = document.getElementById("theyBtn");
const heSaidBtn = document.getElementById("heSaidBtn");
const sheSaidBtn = document.getElementById("sheSaidBtn");
const onlookersBtn = document.getElementById("onlookersBtn");
const tomorrowBtn = document.getElementById("tomorrowBtn");
const generateBtn = document.getElementById("generator");
const resetBtn = document.getElementById("reset");

let count = 0;

const processInput = (event) => {
    let input = event.srcElement.previousElementSibling;
    let inputValue = input.value;
    if (inputValue.length > 0) {
        input.parentElement.classList.add("hide");
        count++;
    }
    generateButton();
};

const generateButton = () => {
    if (count === NUMBER_OF_BUTTONS) {
        generateBtn.classList.toggle("hide");
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

const pageReset = () => {
    let children = document.getElementById("inputs").children;
    document.getElementById("story").classList.toggle("hide");
    resetBtn.classList.toggle("hide");
    for (let i = 0; i < children.length; i++) {
        children[i].classList.toggle("hide");
        children[i].childNodes[3].value = "";

    }

}

heBtn.addEventListener("click", processInput);
sheBtn.addEventListener("click", processInput);
lnHeBtn.addEventListener("click", processInput);
lnSheBtn.addEventListener("click", processInput);
theyBtn.addEventListener("click", processInput);
heSaidBtn.addEventListener("click", processInput);
sheSaidBtn.addEventListener("click", processInput);
onlookersBtn.addEventListener("click", processInput);
tomorrowBtn.addEventListener("click", processInput);
generateBtn.addEventListener("click", generateStory);
resetBtn.addEventListener("click", pageReset);