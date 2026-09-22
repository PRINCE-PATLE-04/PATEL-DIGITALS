/* =========================================================
   PATEL DIGITALS
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");

    /*
       Home page uses .nav-links.
       Other pages currently use .desktop-nav.

       This supports both structures so every page
       uses the same navigation behaviour.
    */

    const navLinks =
        document.querySelector(".nav-links") ||
        document.querySelector(".desktop-nav");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            menuToggle.classList.toggle("active");

            const isOpen =
                navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        /* Close menu after clicking a navigation link */

        const navigationItems =
            navLinks.querySelectorAll("a");


        navigationItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const header =
        document.querySelector(".site-header");


    if (header) {

        const handleScroll = () => {

            if (window.scrollY > 40) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        };


        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );


        handleScroll();

    }


    /* =====================================================
       REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .work-card, .process-item, .stat, .reveal"
        );


    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("revealed");

        });

    }


    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElement =
        document.querySelector(
            "[data-current-year]"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       PREVENT EMPTY # LINKS
    ===================================================== */

    const emptyLinks =
        document.querySelectorAll(
            'a[href="#"]'
        );


    emptyLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                event.preventDefault();

            }
        );

    });

});
