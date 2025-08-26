document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("dropdownBtn");
  const menu = document.getElementById("dropdownMenu");

  // Abre/fecha ao clicar no botão
  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // evita fechar imediatamente
    menu.classList.toggle("show");
  });

  // Fecha se clicar fora do menu
  document.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});
