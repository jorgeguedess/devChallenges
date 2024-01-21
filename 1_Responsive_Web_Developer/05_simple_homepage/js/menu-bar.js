const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
    document.addEventListener("click", closeMenuOutside);
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
    document.removeEventListener("click", closeMenuOutside);
  }
}

function closeMenuOutside(event) {
  const nav = document.getElementById("nav");
  const btnMobile = document.getElementById("btn-mobile");

  if (!nav.contains(event.target) && event.target !== btnMobile) {
    nav.classList.remove("active");
    btnMobile.setAttribute("aria-expanded", false);
    btnMobile.setAttribute("aria-label", "Abrir Menu");
    document.removeEventListener("click", closeMenuOutside);
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
