/* =========================================================
   HARISH VIGNESH - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. GET HTML ELEMENTS
   ========================================================= */

const snowContainer =
    document.getElementById("snow-container");

const nameTitle =
    document.getElementById("name-title");

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


/* =========================================================
   2. AUTOMATIC DAY / NIGHT MODE
   ========================================================= */

function setDayNightMode() {

    const currentHour =
        new Date().getHours();

    if (
        currentHour >= 6 &&
        currentHour < 18
    ) {

        document.body.classList.add(
            "day-mode"
        );

    } else {

        document.body.classList.remove(
            "day-mode"
        );

    }
}

setDayNightMode();

setInterval(
    setDayNightMode,
    60000
);


/* =========================================================
   3. CREATE SNOW
   ========================================================= */

const snowCount = 70;


function createSnowflake() {

    const snowflake =
        document.createElement("div");

    snowflake.classList.add(
        "snowflake"
    );


    /* Random horizontal position */

    snowflake.style.left =
        Math.random() * 100 + "%";


    /* Random size */

    const size =
        Math.random() * 4 + 2;

    snowflake.style.width =
        size + "px";

    snowflake.style.height =
        size + "px";


    /* Random animation duration */

    const duration =
        Math.random() * 8 + 7;

    snowflake.style.animationDuration =
        duration + "s";


    /* Random starting delay */

    const delay =
        Math.random() * 8;

    snowflake.style.animationDelay =
        "-" + delay + "s";


    /* Random opacity */

    snowflake.style.opacity =
        Math.random() * 0.6 + 0.3;


    snowContainer.appendChild(
        snowflake
    );
}


for (
    let i = 0;
    i < snowCount;
    i++
) {

    createSnowflake();

}


/* =========================================================
   4. NAME HOVER EFFECT
   ========================================================= */

if (nameTitle) {

    nameTitle.addEventListener(
        "mouseenter",
        function () {

            nameTitle.classList.add(
                "name-active"
            );

        }
    );


    nameTitle.addEventListener(
        "mouseleave",
        function () {

            nameTitle.classList.remove(
                "name-active"
            );

        }
    );

}


/* =========================================================
   5. NAME MOUSE MOVEMENT EFFECT
   ========================================================= */

if (nameTitle) {

    nameTitle.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                nameTitle.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const moveX =
                (x - centerX) / 18;

            const moveY =
                (y - centerY) / 18;

            nameTitle.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        }
    );


    nameTitle.addEventListener(
        "mouseleave",
        function () {

            nameTitle.style.transform =
                "translate(0, 0)";

        }
    );

}


/* =========================================================
   6. SMOOTH SCROLLING
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    targetId &&
                    targetId.startsWith("#")
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    }
);


/* =========================================================
   7. SCROLL REVEAL EFFECT
   ========================================================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .education-card, .skill-card, .project-card, .contact-card"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);


/* =========================================================
   8. REDUCE SNOW ON SMALL DEVICES
   ========================================================= */

function adjustSnowForScreen() {

    const snowflakes =
        document.querySelectorAll(
            ".snowflake"
        );


    if (window.innerWidth < 500) {

        snowflakes.forEach(
            function (
                snowflake,
                index
            ) {

                if (
                    index % 2 === 0
                ) {

                    snowflake.style.display =
                        "none";

                }

            }
        );

    } else {

        snowflakes.forEach(
            function (snowflake) {

                snowflake.style.display =
                    "block";

            }
        );

    }

}


adjustSnowForScreen();


window.addEventListener(
    "resize",
    adjustSnowForScreen
);


/* =========================================================
   9. MOBILE NAVIGATION
   ========================================================= */

if (
    menuToggle &&
    navLinks
) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle(
                "active"
            );

        }
    );


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        }
    );


    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 650
            ) {

                navLinks.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   10. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Harish Vignesh Portfolio - JavaScript loaded successfully."
);


/* =========================================================
   END OF SCRIPT.JS
   ========================================================= */
