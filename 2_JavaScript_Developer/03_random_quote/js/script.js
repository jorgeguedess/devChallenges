import { getRandomQuote } from "./randomQuote.js";
import { copyQuoteToClipboard } from "./copyClip.js";

getRandomQuote();

const shuffleButton = document.querySelector("#shuffleButton");
const copyMessage = document.querySelector("#copyMessage");

shuffleButton.addEventListener("click", getRandomQuote);
copyMessage.addEventListener("click", copyQuoteToClipboard);
