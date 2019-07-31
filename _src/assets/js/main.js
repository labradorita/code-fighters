"use strict";
// function preview name & job
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

// function preview palettes

// clase madre que va a contener clase paleta, y derivan estilos a hijos
const previewCard = document.querySelector(".js-card");

// funcion seleccionar paleta que devuelve resultado de funcion cambiar paleta
function selectPalette(palette) {
    return function() {
        changePalette(palette);
    };
}
//funcion cambiar paleta, con parametro para reutilizarse.

function changePalette(classPalette) {
    previewCard.className = `js-card ${classPalette}`;
}

// define cada selectpalette

const selectPalette1 = selectPalette("palette1");
const selectPalette2 = selectPalette("palette2");
const selectPalette3 = selectPalette("palette3");

// listeners que llama a la función selectpalette correspondiente

document.querySelector("#option1").addEventListener("change", selectPalette1);

document.querySelector("#option2").addEventListener("change", selectPalette2);

document.querySelector("#option3").addEventListener("change", selectPalette3);
