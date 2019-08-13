"use strict";

// autopreview function

autoPreview(".js-input-name", ".preview__bio--name", "Nombre Apellido");
autoPreview(".js-input-job", ".preview__bio--job", "Front-end developer");

function autoPreview(variableinput, variableoutput, defaultValue) {
  const outputText = document.querySelector(variableoutput);
  const inputText = document.querySelector(variableinput);

  function changePara(event) {
    const inputValue = event.currentTarget;
    if (inputText.value) {
      outputText.innerHTML = inputValue.value;
    } else {
      outputText.innerHTML = defaultValue;
      //console.log(defaultValue);
    }
  }
  inputText.addEventListener("keyup", changePara);
}

// change palettes function

const previewCard = document.querySelector(".js-palettecontainer");

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

// change typography function

const previewCardTypo = document.querySelector(".js-typocontainer");

function createTypographySelectorFunction(classTypography) {
  return function() {
    previewCardTypo.className = `js-card ${classTypography}`;
  };
}

const selectTypography1 = createTypographySelectorFunction("typography1");
const selectTypography2 = createTypographySelectorFunction("typography2");
const selectTypography3 = createTypographySelectorFunction("typography3");

const ratioTypo1 = document.querySelector("#option1_typo").addEventListener("change", selectTypography1);
const ratioTypo2 = document.querySelector("#option2_typo").addEventListener("change", selectTypography2);
const ratioTypo3 = document.querySelector("#option3_typo").addEventListener("change", selectTypography3);

//collapsible

// const collapsibleTriggers = document.querySelectorAll(".js-collapsible__trigger");

// function updateCollapsible(event) {
//   const currentCollapsible = event.currentTarget.parentElement;

//   if (currentCollapsible.classList.contains("js-collapsible--open")) {
//     currentCollapsible.classList.remove("js-collapsible--open");
//   } else {
//     for (const item of collapsibleTriggers) {
//       item.parentElement.classList.remove("js-collapsible--open");
//     }
//     currentCollapsible.classList.add("js-collapsible--open");
//   }
// }

// for (const item of collapsibleTriggers) {
//   item.addEventListener("click", updateCollapsible);
// }

//botón reset
const reset = document.querySelector(".js-sectiona__buton");

function resetAutopreview() {
  const previewName = document.querySelector(".js-box1_result");
  const previewJob = document.querySelector(".js-preview__job");
  const iconsUsed = document.querySelectorAll(".js-icon-preview");

  previewName.innerHTML = "Nombre Apellido";
  previewJob.innerHTML = "Front-end developer";

  for (const iconUsed of iconsUsed) {
    iconUsed.style.color = "lightgrey";
  }
  localStorage.removeItem("userData");
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
  fr.addEventListener("load", loadFileToImages);
  fr.readAsDataURL(event.target.files[0]);
};
browse.addEventListener("change", loadFile);

const loadFileToImages = function() {
  let preview = document.querySelector(".preview");
  preview.src = fr.result;
  let cardImage = document.querySelector(".js-card__image");
  cardImage.style.backgroundImage = `url(${fr.result})`;
  saveInfo();
};

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

// function loadPalette(ev) {
//   ev.preventDefault();

//   fr.readAsDataURL(createPaletteSelectorFunction);
// }

// function loadPalette(ev) {
//   ev.preventDefault();

//   fr.readAsDataURL(createPaletteSelectorFunction);
// }

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
  return inputs.reduce(function(acc, input) {
    if (input.getAttribute("type") === "radio") {
      if (input.checked === true) {
        acc[input.name] = input.value;
      }
    } else if (input.nodeName !== "BUTTON") {
      acc[input.name] = input.value;
    }
    return acc;
  }, {});
}

function showURL(data) {
  if (data.success) {
    // Show URL card
    urlCard.innerHTML = '<h3 class="created_card_h3">La tarjeta ha sido creada:</h3> <a class="created_card_small" target="_blank" href=' + data.cardURL + ">" + data.cardURL + "</a>";

    // Update twitter button URL
    const twitterButton = document.querySelector(".js-button-twitter");
    twitterButton.href = `https://twitter.com/intent/tweet?text=Mira mi tarjeta de visita ${data.cardURL}`;
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
// icon changes with info

function changeIconColor(variableinput, classInput, classIcon) {
  const classIconUsed = document.querySelector(classIcon);
  const inputText = document.querySelector(variableinput);

  const handle = function() {
    if (inputText.value) {
      classIconUsed.style.color = "#114e4e";
    } else {
      classIconUsed.style.color = "lightgrey";
    }
  };
  document.querySelector(classInput).addEventListener("keyup", handle);
}

changeIconColor(".js-input-phone", "#phone", ".js-icon-phone");
changeIconColor(".js-input-email", "#email", ".js-icon-email");
changeIconColor(".js-input-github", "#github", ".js-icon-github");
changeIconColor(".js-input-linkedin", "#linkedin", ".js-icon-linkedin");

// icon clickables when you write email,github & linkedin

function changeLinkIcon(variableinput, classIcon) {
  const classIconUsed = document.querySelector(classIcon);
  const inputText = document.querySelector(variableinput);

  const handle = function() {
    if (inputText.value.startsWith("http://") || inputText.value.startsWith("https://")) {
      classIconUsed.href = inputText.value;
    } else {
      classIconUsed.href = `http://${inputText.value}`;
    }
  };
  document.querySelector(variableinput).addEventListener("keyup", handle);
}

changeLinkIcon(".js-input-email", ".js-icon-link-email");
changeLinkIcon(".js-input-github", ".js-icon-link-github");
changeLinkIcon(".js-input-linkedin", ".js-icon-link-linkedin");

// LocalStorage
const nameInput = document.querySelector(".js-input-name");
const jobInput = document.querySelector(".js-input-job");
const photo = document.querySelector(".js-photo");
const emailInput = document.querySelector(".js-input-email");
const phoneInput = document.querySelector(".js-input-phone");
const linkedinInput = document.querySelector(".js-input-linkedin");
const githubInput = document.querySelector(".js-input-github");
const paletteInput = document.querySelectorAll(".js-palettes");
const itemInputs = document.querySelectorAll(".item__input");
const typograInputs = document.querySelectorAll(".js-typography");
const photoCard = document.querySelector(".js-card__image");

function readChoosenPalette() {
  const inputChecked = document.querySelector(".js-palettes:checked");
  return parseInt(inputChecked.value);
  // for (let i = 0; i < paletteInput.length; i = i + 1) {
  //   if (paletteInput[i].checked) {
  //     return parseInt(paletteInput[i].value);
  //   }
  // }
}

function readChoosenTypogra() {
  const inputChecked = document.querySelector(".js-typography:checked");
  return parseInt(inputChecked.value);
}

function previewLocalStorage() {
  for (let i = 0; i < itemInputs.length; i = i + 1) {
    itemInputs[i].dispatchEvent(new Event("keyup"));
  }
}

//document.querySelector('.js-input-github').dispatchEvent(new Event('keyup'));
// nameInput.dispatchEvent(new Event("keyup"));
const formInfo = {};

const saveInfo = () => {
  formInfo.palette = readChoosenPalette();
  formInfo.name = nameInput.value;
  formInfo.job = jobInput.value;
  formInfo.photo = photo.src;
  formInfo.email = emailInput.value;
  formInfo.phone = phoneInput.value;
  formInfo.linkedin = linkedinInput.value;
  formInfo.github = githubInput.value;
  formInfo.typogra = readChoosenTypogra();

  // Pasar objeto a cadena
  localStorage.setItem("userData", JSON.stringify(formInfo));
  changeButtonColor();
};

const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData !== null) {
    paletteInput.value = userData.palette;
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    photo.src = userData.photo;
    if (!!userData.photo === true) {
      photoCard.style.backgroundImage = `url(${userData.photo})`;
      photo.style.backgroundImage = `url(${userData.photo})`;
    } else {
      photoCard.style.backgroundImage = `url("../../assets/images/default.jpg")`;
    }
    emailInput.value = userData.email;
    phoneInput.value = userData.phone;
    linkedinInput.value = userData.linkedin;
    githubInput.value = userData.github;
    typograInputs.value = userData.typogra;
  }
};

// const form = document.querySelector(".js-form");
form.addEventListener("keyup", saveInfo);
form.addEventListener("click", saveInfo);

//// changing color of button-share when form is completed

const buttonShare = document.querySelector(".share__btn");

function changeButtonColor() {
  if (nameInput.value && jobInput.value && emailInput.value && linkedinInput.value && githubInput.value && photo.src) {
    //if (nameInput.value && jobInput.value && emailInput.value && linkedinInput.value && githubInput.value && browse.value) {
    buttonShare.style.background = "#e17334";
  } else {
    buttonShare.style.background = "lightgrey";
  }
}

form.addEventListener("keyup", changeButtonColor);

const startApp = () => {
  if (!!formInfo === true) {
    getFromLocalStorage();
    previewLocalStorage();
    changeButtonColor();
  }
};

startApp();
