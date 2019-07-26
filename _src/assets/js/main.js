"use strict";
debugger;

// definir

autoPreview(".js-input-name", ".preview__bio--name", "Nombre Apellido");
autoPreview(".js-input-job", ".preview__bio--job", "Trabajo");

//cómo es la función autopreview, usando parámetros no definidos
//const autopreview = function ()

function autoPreview(variableinput, variableoutput, defaultValue) {
    const outputText = document.querySelector(variableoutput);
    const inputText = document.querySelector(variableinput);

    function changePara(event) {
        const inputValue = event.currentTarget;
        if (inputText.value) {
            outputText.innerHTML = `${inputValue.value}`;
        } else {
            outputText.innerHTML = defaultValue;
            console.log(defaultValue);
        }
    }
    inputText.addEventListener("keyup", changePara);
}

//

// definir los colores, seleccionados y resultados

const color1Choosed = document.querySelector(".js-box__color1");
const color2Choosed = document.querySelector(".js-box__color2");
const color3Choosed = document.querySelector(".js-box__color3");
// const color4Choosed = document.querySelector(".js-box__color4");
// const color5Choosed = document.querySelector(".js-box__color5");
// const color6Choosed = document.querySelector(".js-box__color6");
// const color7Choosed = document.querySelector(".js-box__color7");
// const color8Choosed = document.querySelector(".js-box__color8");
// const color9Choosed = document.querySelector(".js-box__color9");

const color1Result = document.querySelector(".js-box1_result");
const color2Result = document.querySelector(".js-box2_result");
const color3Result = document.querySelector(".js-box3_result");
// const color4Result = document.querySelector(".js-box4_result");
// const color5Result = document.querySelector(".js-box5_result");
// const color6Result = document.querySelector(".js-box6_result");
// const color7Result = document.querySelector(".js-box7_result");
// const color8Result = document.querySelector(".js-box8_result");
// const color9Result = document.querySelector(".js-box9_result");

//funcion cambiar paletas

function changePalette1(color1Result, color2Result, color3Result) {
    // color1Result.classList.remove("js-box__color4");
    // color2Result.classList.remove("js-box__color5");
    // color3Result.classList.remove("js-box__color6");
    color1Result.classList.add("js-box__color1");
    color2Result.classList.add("js-box__color2");
    color3Result.classList.add("js-box__color3");
}

// function changePalette2(color4Result, color5Result, color6Result) {
//     color1Result.classList.remove("js-box__color1");
//     color2Result.classList.remove("js-box__color2");
//     color3Result.classList.remove("js-box__color3");
//     color4Result.classList.add("js-box__color4");
//     color5Result.classList.add("js-box__color5");
//     color6Result.classList.add("js-box__color6");
// }

// function changePalette3(color7Result, color8Result, color9Result) {
//     color1Result.classList.remove("js-box__color1");
//     color2Result.classList.remove("js-box__color2");
//     color3Result.classList.remove("js-box__color3");
//     color4Result.classList.remove("js-box__color4");
//     color5Result.classList.remove("js-box__color5");
//     color6Result.classList.remove("js-box__color6");
//     color7Result.classList.add("js-box__color7");
//     color8Result.classList.add("js-box__color8");
//     color9Result.classList.add("js-box__color9");
// }

// funcion seleccionar paleta

function selectPalette1(event) {
    console.log(event.target);
    const palette1 = changePalette1(color1Result, color2Result, color3Result);
}

// function selectPalette2(event) {
//     console.log(event.target);
//     const palette2 = changePalette2(color4Result, color5Result, color6Result);
// }

// function selectPalette3(event) {
//     console.log(event.target);
//     const palette3 = changePalette3(color7Result, color8Result, color9Result);
// }

// definir los listeners
const ratioPalette = document.querySelector("#option1");
ratioPalette.addEventListener("change", selectPalette1);

const ratioPalette2 = document.querySelector("#option2");
ratioPalette2.addEventListener("change", selectPalette2);

const ratioPalette3 = document.querySelector("#option3");
ratioPalette3.addEventListener("change", selectPalette3);
