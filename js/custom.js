document.querySelectorAll("[data-current-year]").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});

var menuToggle = document.querySelector(".menu-toggle");
var siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
    function setMenuExpanded(isExpanded) {
        menuToggle.setAttribute("aria-expanded", String(isExpanded));
        siteMenu.classList.toggle("show", isExpanded);
    }

    menuToggle.addEventListener("click", function () {
        var isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        setMenuExpanded(!isExpanded);
    });

    siteMenu.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            setMenuExpanded(false);
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            setMenuExpanded(false);
        }
    });
}