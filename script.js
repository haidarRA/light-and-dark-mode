const button = document.querySelector(".button-switch");
const ball = document.querySelector(".button-ball");
const ball2 = document.querySelector(".button-ball2");
const ball3 = document.querySelector(".button-ball3");
const ball4 = document.querySelector(".button-ball4");
const body = document.querySelector(".body");
const light = document.querySelector("#light");
const dark = document.querySelector("#dark");
const darkheader = document.querySelector("#dark-header");

let isDark = false;

button.addEventListener("click", () => {
    moveButton();
})

function moveButton() {
    if(!isDark) {
        light.style.bottom = '30px';
        dark.style.color = 'rgba(255, 255, 255, 1)'
        dark.style.bottom = '30px';
        dark.style.opacity = '1';
        darkheader.style.opacity = '1';

        ball.style.left = '65px';

        body.style.backgroundColor = '#000000';
        body.style.color = "#ffffff";
        light.style.color = "#000000";
        button.style.backgroundColor = "#c767f0";
        button.style.border = "2px solid #c767f0";
        darkheader.style.color = "#000000";

        setTimeout(() => {
            ball2.style.left = '783px';
        }, 15);

        setTimeout(() => {
            ball3.style.left = '783px';
        }, 30);

        setTimeout(() => {
            ball4.style.left = '783px';
        }, 45);
    }
    else {
        dark.style.color = "#ffffff";
        dark.style.bottom = '0px';
        dark.style.color = 'rgba(0, 0, 0, 0)';
        dark.style.opacity = '0';
        darkheader.style.opacity = '0';

        ball.style.left = '3px';

        body.style.backgroundColor = '#ffffff';
        body.style.color = "#000000";
        button.style.backgroundColor = "#66aaff";
        button.style.border = "2px solid #66aaff";
        light.style.bottom = '0px';
        darkheader.style.color = "#ffffff";

        setTimeout(() => {
            ball2.style.left = '721px';
        }, 15);

        setTimeout(() => {
            ball3.style.left = '721px';
        }, 30);

        setTimeout(() => {
            ball4.style.left = '721px';
        }, 45);
    }
    isDark = !isDark;
}