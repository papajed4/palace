/* ==========================================
   NAVIGATION JS
   Royal Palace Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const initNavigation = () => {

        const navbar = document.querySelector(".navbar");
        const menuToggle = document.querySelector(".menu-toggle");
        const navMenu = document.querySelector(".nav-menu");
        const navLinks = document.querySelectorAll(".nav-link");

        // Wait until navbar component has loaded

        if (!navbar || !menuToggle || !navMenu) {

            setTimeout(initNavigation, 100);

            return;

        }

        /* ==========================================
           Sticky Navbar
        ========================================== */

        const handleScroll = () => {

            if (window.scrollY > 50) {

                navbar.classList.add("scrolled");

            } else {

                navbar.classList.remove("scrolled");

            }

        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        /* ==========================================
           Mobile Menu
        ========================================== */

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

        /* ==========================================
           Close Menu On Link Click
        ========================================== */

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

        /* ==========================================
           Close Menu When Clicking Outside
        ========================================== */

        document.addEventListener("click", (e) => {

            if (
                navMenu.classList.contains("active") &&
                !navMenu.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {

                navMenu.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    };

    initNavigation();

});