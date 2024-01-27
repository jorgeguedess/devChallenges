import { startAlert } from "./alert.js";
import { copyQRCodeToClipboard } from "./copyClip.js";
import { isValidURL } from "./utils.js";

const inputUrl = document.querySelector("#inputUrl");
const qrCodeImage = document.querySelector("#qrCodeImage");
const qrCodeButton = document.querySelector("#qrCodeButton");
const pageSearch = document.querySelector(".qr__code__search");
const pageResult = document.querySelector(".qr_code_result");

const alertCopy = document.querySelector("#alertCopy");
const downloadButton = document.querySelector("#downloadButton");
const shareButton = document.querySelector("#shareButton");

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    generateQRCode();
  }
});

function generateQRCode() {
  const alertError = document.querySelector("#alertError");
  const message = "Please enter a valid URL.";

  const qrCodeValue = inputUrl.value;
  if (!qrCodeValue) return;

  if (!isValidURL(qrCodeValue)) {
    startAlert(alertError, message);
    return;
  }

  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrCodeValue}`;

  qrCodeImage.src = qrCodeURL;
  qrCodeButton.innerText = "Generating....";
  qrCodeButton.disabled = true;

  qrCodeImage.addEventListener("load", () => {
    pageSearch.classList.remove("active");
    pageResult.classList.add("active");
  });
}

qrCodeButton.addEventListener("click", generateQRCode);

downloadButton.addEventListener("click", () => {
  window.print();
});

shareButton.addEventListener("click", () => {
  copyQRCodeToClipboard(qrCodeImage, alertCopy);
});
