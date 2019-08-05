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

//collapsible

const collapsibleTriggers = document.querySelectorAll(
  ".js-collapsible__trigger"
);

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
  cardImage.style.backgroundImage = `url(${URL.createObjectURL(
    event.target.files[0]
  )})`;
};
browse.addEventListener("change", loadFile);

// CREAR ENLACE DE CARD
const form = document.querySelector("form");
// Creo un objeto File Reader
const fr = new FileReader();
const button = document.querySelector(".share__btn");
// Agarro el espacio donde se va a pintar la URL con la tarjeta generada
const urlCard = document.querySelector(".created_card_small");

//Función que coge la foto y la transforma en formato correcto para el JSON
function loadPhoto(ev) {
  ev.preventDefault();
  let myPhoto = document.querySelector(".js-form__photo").files[0];
  fr.addEventListener("load", sendData);
  fr.readAsDataURL(myPhoto);
}

button.addEventListener("click", loadPhoto);
//Función que es llamada después del loadPhoto y envía los valores JSON a la función que llama a la API.
function sendData() {
  let inputs = Array.from(form.elements);
  let json = getJSONFromInputs(inputs);
  json.photo = fr.result;
  sendRequest(json);
}

// Función que transforma los valores del formulario en JSON excepto los botones.
function getJSONFromInputs(inputs) {
  return inputs.reduce(function(acc, val) {
    if (val.nodeName !== "BUTTON") acc[val.name] = val.value;
    return acc;
  }, {});
}

function showURL(data) {
  if (data.success) {
    urlCard.innerHTML =
      '<h3 class="created_card_h3">La tarjeta ha sido creada:</h3> <a href=' +
      data.cardURL +
      ">" +
      data.cardURL +
      "</a>";
  } else {
    urlCard.innerHTML = "ERROR:" + data.error;
  }
}

// Función que llama a la API y le pasa en el BODY el JSON previamente transformado con los valores del formulario.
function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

//Modificaciones: el Div final comentado de "landing_main" se tiene que descomentar, en el fillin_form el name: comepleteName pasa a ser name: name.
