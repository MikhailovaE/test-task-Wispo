const filter = document.getElementById("filter-menu");
const sidebar = document.getElementById("sidebar");
const menu = document.getElementById("burger-menu");
const navbar = document.getElementById("navbar");
const breadcrumb = document.getElementById("breadcrumb")
const header = document.getElementById("header");
const mwNavbar = document.getElementById("mw-navbar");
const mwHeader = document.getElementById("mw-header");
const body = document.body;

window.addEventListener("resize", AutoScale);

AutoScale();

function AutoScale() {
  let windowInnerWidth = window.innerWidth;

  if (windowInnerWidth < 1024) {
    body.classList.add("mobile-view");
    navbar.classList.add("hidden");
    breadcrumb.classList.add("hidden");
    header.classList.add("hidden");
    mwNavbar.classList.remove("hidden");
    mwHeader.classList.remove("hidden");

    filter.addEventListener("click", (event) => {
      if (body.classList.contains("show-sidebar")) {
        closeSidebar();
      } else {
        showSidebar();
      }
    });
  }

  if (windowInnerWidth > 1024) {
    body.classList.remove("mobile-view");
    navbar.classList.remove("hidden");
    header.classList.remove("hidden");
    breadcrumb.classList.remove("hidden");
    mwNavbar.classList.add("hidden");
    mwHeader.classList.add("hidden");
  }
}

function showSidebar() {
  let mask = document.createElement("div");
  mask.addEventListener("click", closeSidebar);

  body.classList.add("show-sidebar");

  filter.classList.add("open");
  menu.classList.add("open");

  sidebar.classList.add("opened");
}

function closeSidebar() {
  body.classList.remove("show-sidebar");

  filter.classList.remove("open");
  menu.classList.remove("open");

  sidebar.classList.remove("opened");
}
