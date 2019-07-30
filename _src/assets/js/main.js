"use strict";
debugger;

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

// //

// definir los colores, seleccionados y resultados

const color1Choosed = document.querySelector(".js-box__color1");
const color2Choosed = document.querySelector(".js-box__color2");
// const color3Choosed = document.querySelector(".js-box__color3");
//
const color4Choosed = document.querySelector(".js-box__color4");
const color5Choosed = document.querySelector(".js-box__color5");
// const color6Choosed = document.querySelector(".js-box__color6");
//
const color7Choosed = document.querySelector(".js-box__color7");
const color8Choosed = document.querySelector(".js-box__color8");
// const color9Choosed = document.querySelector(".js-box__color9");

//
const color1Result = document.querySelector(".js-box1_result");
const color2Result = document.querySelector(".js-box2_result");
// const color3Result = document.querySelector(".js-box3_result");

//funciones seleccionar

function selectPalette1(event) {
  console.log(event.target);
  changePalette1(color1Result, color2Result); //color3Result);
}

function selectPalette2(event) {
  console.log(event.target);
  changePalette2(color1Result, color2Result); //color3Result);
}

function selectPalette3(event) {
  console.log(event.target);
  changePalette3(color1Result, color2Result); // color3Result
}

//funcion cambiar paletas

function changePalette1(color1Result, color2Result) {
  //color3Result
  // color1Result.classList.remove("js-box__color4");
  // color2Result.classList.remove("js-box__color5");
  // color3Result.classList.remove("js-box__color6");
  color1Result.classList.remove("js-box__color4");
  color2Result.classList.remove("js-box__color5");
  // color3Result.classList.remove("js-box__color6");
  color1Result.classList.remove("js-box__color7");
  color2Result.classList.remove("js-box__color8");
  // color3Result.classList.remove("js-box__color9");
  color1Result.classList.add("js-box__color1");
  color2Result.classList.add("js-box__color2");
  // color3Result.classList.add("js-box__color3");
}

function changePalette2(color4Result, color5Result) {
  //color6Result

  color1Result.classList.remove("js-box__color7");
  color2Result.classList.remove("js-box__color8");
  // color3Result.classList.remove("js-box__color9");
  color1Result.classList.remove("js-box__color1");
  color2Result.classList.remove("js-box__color2");
  // color3Result.classList.remove("js-box__color3");
  color4Result.classList.add("js-box__color4");
  color5Result.classList.add("js-box__color5");
  // color6Result.classList.add("js-box__color6");
}

function changePalette3(color7Result, color8Result) {
  // color9Result
  color1Result.classList.remove("js-box__color1");
  color2Result.classList.remove("js-box__color2");
  // color3Result.classList.remove("js-box__color3");
  color1Result.classList.remove("js-box__color4");
  color2Result.classList.remove("js-box__color5");
  // color3Result.classList.remove("js-box__color6");
  color7Result.classList.add("js-box__color7");
  color8Result.classList.add("js-box__color8");
  // color9Result.classList.add("js-box__color9");
}

// listeners
const ratioPalette1 = document.querySelector("#option1");
ratioPalette1.addEventListener("change", selectPalette1);

const ratioPalette2 = document.querySelector("#option2");
ratioPalette2.addEventListener("change", selectPalette2);

const ratioPalette3 = document.querySelector("#option3");
ratioPalette3.addEventListener("change", selectPalette3);

// botón reset

const reset = document.querySelector(".sectiona__button");

function deleteText(ev) {
  const image = document.querySelector(".card__image");
  const name = document.querySelector(".preview__bio--name") = "Nombre Apellido";
  ev.preventDefault();
  document.querySelector(".form").reset();
  image.style.background = 'url("../../assets/images/default.jpg")';
  name.innerHTML = "Nombre Apellido";
  document.querySelector(".preview__bio--job".innerHTML) =
    "Front-end developer";
}

reset.addEventListener("click", deleteText);
