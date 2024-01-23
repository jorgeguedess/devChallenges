const steps = document.querySelectorAll(".step");
const radios = document.querySelectorAll(".radio-label [name='radio']");
const topics = document.querySelectorAll(".topic [name='topic']");
const buttonForm = document.querySelector(".button_form");

const infoStep = document.querySelector("#info_step");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const menuTopics = document.querySelector("#menuTopics");
const userData = {
  name: "",
  email: "",
};
const topicsData = [];
let currentStep = 1;

function showStep(step) {
  steps.forEach((stepElement) => {
    stepElement.classList.remove("active");
  });
  currentStep = step;

  infoStep.innerHTML = `Step ${step} of ${steps.length}`;
  if (step === steps.length) {
    getValues();
    buttonForm.innerHTML = "Confirm";
  } else {
    buttonForm.innerHTML = "Continue";
  }

  radios.forEach((radio) => {
    const radioValue = +radio.getAttribute("data-step");
    radio.disabled = true;
    radio.checked = false;
    if (radioValue === step) {
      radio.disabled = false;
      radio.checked = true;
    }
  });
  steps[step - 1].classList.add("active");
}

function getValues() {
  userName.innerHTML = userData.name;
  userEmail.innerHTML = userData.email;
}

function nextStep(step) {
  if (step >= steps.length) return;
  currentStep = step + 1;
  showStep(currentStep);
}

function nowStep(step) {
  showStep(step);
}

const startSteps = () => {
  if (currentStep === 1) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    formRegister(name, email);
  } else if (currentStep === 2) {
    formTopics();
    if (topicsData.length > 0) nextStep(currentStep);
  } else if (currentStep === 3) {
    formSubmit();
  }
};

function formRegister(name = "", email = "") {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email) {
    alert("Por favor, preencha todos os campos antes de enviar o formulário.");
  } else if (!emailRegex.test(email)) {
    alert("Por favor, insira um endereço de email válido.");
  } else {
    nextStep(currentStep);
  }
  userData.name = name;
  userData.email = email;
}

function formTopics() {
  menuTopics.innerHTML = `<ul class="menu" id="menuTopics"></ul>`;
  console.log(menuTopics);
  const topicsArray = Array.from(topics);
  const topicsSelected = topicsArray.filter((topic) => topic.checked);
  if (topicsSelected.length === 0) {
    alert("Por favor, selecione ao menos um topico.");
    return;
  }
  topicsSelected.forEach((item) => {
    const topicText = item.nextElementSibling.textContent;
    topicsData.push(topicText);
    const newItem = document.createElement("li");
    newItem.textContent = topicText;
    menuTopics.appendChild(newItem);
  });
}

function formSubmit() {
  alert("Formulário enviado com sucesso!");
}

buttonForm.addEventListener("click", startSteps);
showStep(currentStep);
