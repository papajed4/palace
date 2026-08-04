/* ==========================================
   NAVIGATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobilePanel = document.querySelector(".mobile-nav-content");

    const desktopLinks = document.querySelectorAll(".nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-link");

    /* ==========================================
       STICKY NAVBAR
    ========================================== */

    function handleNavbar() {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();

    /* ==========================================
       MOBILE MENU
    ========================================== */

    function openMenu() {

        menuToggle.classList.add("active");

        mobileNav.classList.add("active");

        document.body.style.overflow = "hidden";

    }

    function closeMenu() {

        menuToggle.classList.remove("active");

        mobileNav.classList.remove("active");

        document.body.style.overflow = "";

    }

    menuToggle.addEventListener("click", () => {

        if (mobileNav.classList.contains("active")) {

            closeMenu();

        } else {

            openMenu();

        }

    });

    /* ==========================================
       CLOSE WHEN CLICKING BACKDROP
    ========================================== */

    mobileNav.addEventListener("click", (e) => {

        if (!mobilePanel.contains(e.target)) {

            closeMenu();

        }

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    const allLinks = document.querySelectorAll(
        '.nav-link, .mobile-link, .contact-btn, .mobile-contact-btn, .nav-brand'
    );

    allLinks.forEach(link => {

        link.addEventListener("click", function(e) {

            const target = this.getAttribute("href");

            if (!target.startsWith("#")) return;

            e.preventDefault();

            const section = document.querySelector(target);

            if (!section) return;

            const offset = navbar.offsetHeight;

            const position = section.offsetTop - offset;

            window.scrollTo({

                top: position,

                behavior: "smooth"

            });

            closeMenu();

        });

    });

    /* ==========================================
       ACTIVE LINKS
    ========================================== */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {

        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;

        sections.forEach(section => {

            const top = section.offsetTop;

            const height = section.offsetHeight;

            const id = section.getAttribute("id");

            if (

                scrollPosition >= top &&
                scrollPosition < top + height

            ) {

                desktopLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + id) {

                        link.classList.add("active");

                    }

                });

                mobileLinks.forEach(link => {

                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + id) {

                        link.classList.add("active");

                    }

                });

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();

});