function toggleMenu() {
    document.querySelector(".nav-bar").classList.toggle("open");
    document.querySelector("#hamburgerBtn").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;