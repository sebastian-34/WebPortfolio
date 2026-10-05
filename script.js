/* nav bar scroll */
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll >100) {
        navbar.classList.add('hide');
    }
    else if (currentScroll < lastScrollTop) {
        navbar.classList.remove('hide');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
})

/*night mode*/
const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", function () {
    const nightModeEnabled = document.body.classList.toggle("night-mode");

    themeToggle.setAttribute(
        "aria-label",
        nightModeEnabled
            ? "Turn off night mode"
            : "Turn on night mode"
    );
})
   