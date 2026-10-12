const btnToggle = document.querySelector("#theme-toggle");
const body = document.body;

btnToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  
  // Opcional: Cambiar el texto del botón según el modo
  if (body.classList.contains("dark-mode")) {
    btnToggle.textContent = "Modo Claro";
  } else {
    btnToggle.textContent = "Modo Oscuro";
  }
});