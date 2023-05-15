// Erste Aufgabe

let selectOptions = document.querySelector("#my-select");
let output = document.querySelector(".output-class");
let buttonClick = document.querySelector("#clickMe");
let num = 1;

selectOptions.addEventListener("change", () => {
    output.innerHTML = "Du hast " + selectOptions.value + " ausgewählt!";
});

// Zweite Aufgabe

buttonClick.addEventListener("click", () => {
buttonClick.innerHTML = "Click me: " + num++;
});

// Dritte Aufgabe

let selectColors = document.querySelector("#farbeAuswahlen");
let deleteColor = document.querySelector("#buttonRemoveColor");
let selectedOne = selectColors.selectedIndex;
let buttonChangeColor = document.querySelector("#changeColor");
let bodyCol = document.querySelector("body");

selectColors.addEventListener("change", () => {
console.log(selectColors.value);
});

deleteColor.addEventListener("click", () => {
    event.preventDefault();
    let removed = selectColors;
    removed.remove(removed.selectedIndex);
});

// Vierte Aufgabe

buttonChangeColor.addEventListener("click", () => {
    event.preventDefault();
let selectedNew = selectColors.value.toString().toLowerCase().replace(/\s/g, '');
bodyCol.style.backgroundColor = selectedNew;
});



