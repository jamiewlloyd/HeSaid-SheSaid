const NUMBER_OF_BUTTONS = 9;

var heInput = document.getElementById("he");
var sheInput = document.getElementById("she");
var lnHeInput = document.getElementById("lnHe");
var lnSheInput = document.getElementById("lnShe");
var theyInput = document.getElementById("they");
var heSaidInput = document.getElementById("heSaid");
var sheSaidInput = document.getElementById("sheSaid");
var onlookersInput = document.getElementById("onlookers");
var tomorrowInput = document.getElementById("tomorrow");

var heBtn = document.getElementById("heBtn");
var sheBtn = document.getElementById("sheBtn");
var lnHeBtn = document.getElementById("lnHeBtn");
var lnSheBtn = document.getElementById("lnSheBtn");
var theyBtn = document.getElementById("theyBtn");
var heSaidBtn = document.getElementById("heSaidBtn");
var sheSaidBtn = document.getElementById("sheSaidBtn");
var onlookersBtn = document.getElementById("onlookersBtn");
var tomorrowBtn = document.getElementById("tomorrowBtn");
var generateBtn = document.getElementById("generator");
var resetBtn = document.getElementById("reset");

var count = 0;


function processInput(event) {
    var inputValue = event.path[1].childNodes[3].value;
    if (inputValue.length > 0) {
        event.path[1].classList.add("hide");
        count++;
    }
    generateButton();
};

function generateButton() {
    if (count === NUMBER_OF_BUTTONS) {
        generateBtn.classList.toggle("hide");
    }
};

function generateStory() {
    generateBtn.classList.toggle("hide");
    document.getElementById("story").innerHTML = "He was " + heInput.value + ". She was " + sheInput.value +
        ". Last night he " + lnHeInput.value + " while she " + lnSheInput.value + ". Today they were "
        + theyInput.value + ". He said " + heSaidInput.value + " and she said " + sheSaidInput.value + ". Onlookers said "
        + onlookersInput.value + ". Tomorrow they will " + tomorrowInput.value + ".";
    document.getElementById("story").classList.toggle("hide");
    resetBtn.classList.toggle("hide");
}

function pageReset() {
    var children = document.getElementById("inputs").children;
    document.getElementById("story").classList.toggle("hide");
    resetBtn.classList.toggle("hide");
    for (var i = 0; i < children.length; i++) {
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