const scroll = document.querySelector("#scroll");
scroll.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 900) {
    scroll.style.opacity = 1;
  } else {
    scroll.style.opacity = 0;
  }
});

// Theme Dark //
const themeToggle = document.querySelector(".checkbox");
const body = document.querySelector("body");
const darkmode = localStorage.getItem("dark");

if (darkmode) {
  body.classList.add("dark");
  themeToggle.checked = true;
}
themeToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "active");
  } else {
    localStorage.removeItem("dark");
  }
});
const navOpen = document.querySelector(".nav-hamburger");
const navClose = document.querySelector(".close-toggle");
const menu = document.querySelector(".nav-menu");

navOpen.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;

  if (navLeft < 0) {
    menu.style.left = "0";
    document.body.classList.add("active");
  } else {
    menu.style.left = "-50rem";
    document.body.classList.remove("active");
  }
});

navClose.addEventListener("click", () => {
  const navLeft = menu.getBoundingClientRect().left;

  if (navLeft > 0) {
    menu.style.left = "0";
    document.body.classList.add("active");
  } else {
    menu.style.left = "-50rem";
    document.body.classList.remove("active");
  }
});
