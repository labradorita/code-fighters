"use strict";
debugger;

const name = autopreview(".js-input-name", ".preview__bio--name", "Nombre");
const job = autopreview(".js-input-job", ".preview__bio--job", "Trabajo");

function autopreview(variableinput, variableout, defaultValue) {
    const inputP = document.querySelector(variableout);
    const inputText = document.querySelector(variableinput);

    function changePara(event) {
        const inputValue = event.currentTarget;

        if (inputText.value) {
            inputP.innerHTML = `${inputValue.value}`;
        } else {
            inputP.innerHTML = defaultValue;
            console.log(defaultValue);
        }
    }

    inputText.addEventListener("keyup", changePara);
}

// //
// FUNCIONA
// function autopreview(variableinput, variableout, defaultValue) {
// //     const inputText = document.querySelector(variableinput);
//     const inputP = document.querySelector(variableout);

//     function changePara(event) {
//         const inputValue = event.currentTarget;
//         //si el defaultvalue es vacion ....
//         console.log(defaultValue);
//         if (inputText === document.querySelector(variableinput)) {
//             inputP.innerHTML = `${inputValue.value}`;
//         } else if (inputText === "") {
//             inputP.innerHTML = defaultValue;
//         }
//     }

//     inputText.addEventListener("keyup", changePara);
// }

//name

// const inputText = document.querySelector(".js-input-name");

// const inputP = document.querySelector(".preview__bio--name");

// function changePara(event) {
//     const inputValue = event.currentTarget;
//     inputP.innerHTML = `${inputValue.value}`;
// }

// inputText.addEventListener("keyup", changePara);
