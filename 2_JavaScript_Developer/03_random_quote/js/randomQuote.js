export const getRandomQuote = async () => {
  const apiUrl = "https://api.quotable.io/quotes";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const randomQuote = data.results[randomIndex];
    console.log(randomQuote);

    const phrase = document.querySelector("#phrase");
    const author = document.querySelector("#author");
    const menuTags = document.querySelector("#menuTags");
    const message = document.querySelector("#message");

    const authorFormatted = (randomQuote.author || "").split(",")[0].trim();

    phrase.textContent = `“${randomQuote.content}”`;
    author.textContent = `${authorFormatted || "Unknow"}`;

    if (randomQuote.tags && randomQuote.tags.length > 0) {
      menuTags.innerHTML = randomQuote.tags
        .map((tag) => `<li class="tag">${tag}</li>`)
        .join("");
    } else {
      menuTags.innerHTML = `<li class="tag">Famous Quotes</li>`;
    }

    message.style.display = "none";
  } catch (error) {
    console.error("Erro ao obter citação:", error);
  }
};
