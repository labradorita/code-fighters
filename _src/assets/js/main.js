"use strict";

// autopreview function

autoPreview(".js-input-name", ".preview__bio--name", "Nombre Apellido");
autoPreview(".js-input-job", ".preview__bio--job", "Trabajo");

function autoPreview(variableinput, variableoutput, defaultValue) {
    const outputText = document.querySelector(variableoutput);
    const inputText = document.querySelector(variableinput);

    function changePara(event) {
        const inputValue = event.currentTarget;
        if (inputText.value) {
            outputText.innerHTML = inputValue.value;
        } else {
            outputText.innerHTML = defaultValue;
            console.log(defaultValue);
        }
    }
    inputText.addEventListener("keyup", changePara);
}

// change palettes function

const previewCard = document.querySelector(".js-card");

function createPaletteSelectorFunction(classPalette) {
    return function() {
        previewCard.className = `js-card ${classPalette}`;
    };
}

const selectPalette1 = createPaletteSelectorFunction("palette1");
const selectPalette2 = createPaletteSelectorFunction("palette2");
const selectPalette3 = createPaletteSelectorFunction("palette3");

const ratio1 = document.querySelector("#option1").addEventListener("change", selectPalette1);
const ratio2 = document.querySelector("#option2").addEventListener("change", selectPalette2);
const ratio3 = document.querySelector("#option3").addEventListener("change", selectPalette3);

//collapsible

const collapsibleTriggers = document.querySelectorAll(".js-collapsible__trigger");

function updateCollapsible(event) {
    const currentCollapsible = event.currentTarget.parentElement;

    if (currentCollapsible.classList.contains("js-collapsible--open")) {
        currentCollapsible.classList.remove("js-collapsible--open");
    } else {
        for (const item of collapsibleTriggers) {
            item.parentElement.classList.remove("js-collapsible--open");
        }
        currentCollapsible.classList.add("js-collapsible--open");
    }
}

for (const item of collapsibleTriggers) {
    item.addEventListener("click", updateCollapsible);
}

//botón reset
const reset = document.querySelector(".js-sectiona__buton");

function resetAutopreview() {
    const previewName = document.querySelector(".js-box1_result");
    const previewJob = document.querySelector(".js-preview__job");
    previewName.innerHTML = "Nombre Apellido";
    previewJob.innerHTML = "Front-end developer";
}

function deleteText() {
    const image = document.querySelector(".js-card__image");
    const formFields = document.querySelector(".js-form");
    const preview = document.querySelector(".js-preview");
    formFields.reset(); //Reseteamos el formulario
    preview.src = " "; //Dejamos en blanco para que no meta imagen
    image.style.backgroundImage = "url(../../assets/images/default.jpg)";
}
reset.addEventListener("click", deleteText);
reset.addEventListener("click", resetAutopreview);

// imagen preview
const browse = document.querySelector(".js-form__photo");
const loadFile = function(event) {
    let preview = document.querySelector(".preview");
    let cardImage = document.querySelector(".js-card__image");
    preview.src = URL.createObjectURL(event.target.files[0]);
    cardImage.style.backgroundImage = `url(${URL.createObjectURL(event.target.files[0])})`;
};
browse.addEventListener("change", loadFile);
