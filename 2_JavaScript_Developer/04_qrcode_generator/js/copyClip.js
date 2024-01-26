import { closeAlert, startAlert } from "./alert.js";
import { durationAlert } from "./utils.js";

export const copyQRCodeToClipboard = async (
  qrCodeContainer,
  messageElement
) => {
  try {
    const qrCodeURL = qrCodeContainer.src;
    await navigator.clipboard.writeText(qrCodeURL);

    const printUrl = document.querySelector("#printUrl");
    printUrl.innerText = qrCodeURL;

    displayMessage(messageElement);

    const timeoutId = setTimeout(
      () => hideMessage(messageElement),
      durationAlert
    );

    return () => clearTimeout(timeoutId);
  } catch (err) {
    handleClipboardError(err);
    return () => {};
  }
};

const displayMessage = (element) => {
  const message = "Texto copiado com sucesso!";
  startAlert(element, message);
};

const hideMessage = (element) => {
  closeAlert(element);
};

const handleClipboardError = (error) => {
  console.error("Error copying to clipboard", error);
};
