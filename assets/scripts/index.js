// nav-search
const navSearch = document.getElementById("nav-search");
const iconSearch = document.getElementById("icon-search");
const titleSearch = document.getElementById("title-search");

navSearch?.addEventListener("click", () => {
  navSearch.classList.add("open");
  const input = navSearch.querySelector("input");
  input?.focus();
  titleSearch.style.display = "none";
  iconSearch.style.hov
});

// fecha ao clicar fora
document.addEventListener("click", (e) => {
  if (!navSearch) return;
  const clickedInside = navSearch.contains(e.target);
  if (!clickedInside) {
    navSearch.classList.remove("open");
    Array.from(navSearch.children).forEach((item, index) => {
    if (index != 2) { item.style.display = "flex"; }
  });
  }
});


/* menu mobile */
const btnMobile  = document.getElementById("btn-menu-mobile");
const mobileMenu    = document.getElementById("mobile-menu");
const mobileOverlay = document.getElementById("mobile-overlay");
const btnClose      = document.getElementById("mobile-menu-close");

function openMenu() {
  mobileMenu.classList.add("open");
  mobileOverlay.classList.add("open");
  btnMobile.classList.add("open");
  document.body.style.overflow = "hidden"; // trava o scroll da página
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.remove("open");
  btnMobile.classList.remove("open");
  document.body.style.overflow = "";
}

btnMobile?.addEventListener("click", openMenu);
btnClose?.addEventListener("click", closeMenu);
mobileOverlay?.addEventListener("click", closeMenu);

/* submenus com accordion */
document.querySelectorAll(".mobile-nav-link[data-target]").forEach(btn => {
  btn.addEventListener("click", function () {
    const targetId = this.dataset.target;
    const submenu  = document.getElementById(targetId);

    // fecha os outros submenus abertos
    document.querySelectorAll(".mobile-submenu.open").forEach(el => {
      if (el.id !== targetId) {
        el.classList.remove("open");
        el.previousElementSibling?.classList.remove("open");
      }
    });

    // toggle no clicado
    submenu?.classList.toggle("open");
    this.classList.toggle("open");
  });
});