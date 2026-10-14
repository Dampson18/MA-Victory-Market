document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});

var menuToggle = document.querySelector(".menu-toggle");
var siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
    menuToggle.addEventListener("click", function () {
        var isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        siteMenu.classList.toggle("show", !isExpanded);
    });
}