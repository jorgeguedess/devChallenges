import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --sans: 'Dm Sans', sans-serif;

    --background: hsl(210,11%,7%);
    --foreground: hsl(34,89%,96%);
    --primary: hsl(143,40%,82%);
    --primary-foreground: hsl(210,7%,11%);
    --secondary: hsl(212,6%,46%);
    --secondary-foreground: hsl(34,89%,96%);
    --tag: hsl(40,89%,69%);
    --tag-foreground: hsl(210,7%,11%);
    --card: hsl(210,7%,11%);
    --card-foreground: hsl(34,89%,96%);
    --danger: hsl(9,80%,65%);

    --radius: 0.625rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--background);
    color: var(--foreground);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul, li {
    list-style: none;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Dm Sans', sans-serif;
  }
`;
