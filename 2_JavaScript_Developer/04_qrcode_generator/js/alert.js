import { durationAlert } from "./utils.js";

export function startAlert(alertElement, message) {
  const alertElementChild = alertElement.firstElementChild;
  alertElementChild.textContent = message;
  alertElement.classList.add("active");

  const timeoutId = setTimeout(() => closeAlert(alertElement), durationAlert);

  return () => {
    clearTimeout(timeoutId);
    alertElement.classList.remove("active");
  };
}

export function closeAlert(alertElement) {
  alertElement.classList.remove("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const alertErrorElement = document.querySelector("#alertError");
  const alertCopyElement = document.querySelector("#alertCopy");
  const closeButtonErrorElement = alertError.querySelector(".closeButton");
  const closeButtonCopyElement = alertCopy.querySelector(".closeButton");

  if (alertErrorElement) {
    closeButtonErrorElement.addEventListener("click", () => {
      closeAlert(alertError);
    });
  }

  if (alertCopyElement) {
    closeButtonCopyElement.addEventListener("click", () => {
      closeAlert(alertCopy);
    });
  }
});
