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

// change typography function

const previewCardTypo = document.querySelector(".js-card");

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
  const iconsUsed = document.querySelectorAll(".js-icon-preview");

  previewName.innerHTML = "Nombre Apellido";
  previewJob.innerHTML = "Front-end developer";

  for (const iconUsed of iconsUsed) {
    iconUsed.style.color = "lightgrey";
  }
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

// icon changes with info & reset in case there aren't inputs

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
const formInputs = document.querySelectorAll(".js-input");

function saveInfo() {
  const formInputs = document.querySelectorAll(".js-input").value;
  const formInfo = {
    name: formInputs[0],
    job: formInputs[1],
    email: formInputs[2],
    phone: formInputs[3],
    linkedin: formInputs[4],
    github: formInputs[5]
  };
  // Pasar objeto a cadena
  localStorage.setItem("userData", JSON.stringify(formInfo));
}

const form = document.querySelector(".js-form");
form.addEventListener("keyup", saveInfo);
