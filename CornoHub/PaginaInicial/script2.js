const burguer =
document.getElementById("burguer");
const menu =
document.getElementById("menu");

burguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
    burguer.classList.toggle("ativo");
});