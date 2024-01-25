export const copyQuoteToClipboard = async () => {
  const quotePhrase = document.querySelector("#phrase").textContent;

  try {
    await navigator.clipboard.writeText(quotePhrase);
    const message = document.querySelector("#message");
    message.style.display = "block";

    const timeoutId = setTimeout(() => {
      message.style.display = "none";
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  } catch (err) {
    console.error("Error copying to clipboard", err);
  }

  return () => {};
};
