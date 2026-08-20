/* =========================================================
   HARISH VIGNESH - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. GET HTML ELEMENTS
   ========================================================= */

const snowContainer = document.getElementById("snow-container");

const nameTitle = document.getElementById("name-title");


/* =========================================================
   2. AUTOMATIC DAY / NIGHT MODE
   ========================================================= */

/*
   We check the visitor's current local time.

   6:00 AM - 6:00 PM
   = Day

   6:00 PM - 6:00 AM
   = Night
*/

function setDayNightMode() {

    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 18) {

        document.body.classList.add("day-mode");

    } else {

        document.body.classList.remove("day-mode");

    }
}


/* Run when the website loads */

setDayNightMode();


/*
   Check again every minute.

   This means if someone keeps your portfolio
   open while the time changes, the website
   can update its appearance.
*/

setInterval(setDayNightMode, 60000);


/* =========================================================
   3. CREATE SNOW
   ========================================================= */

/*
   Number of snow particles.

   We keep this reasonably small so the
   website does not become slow.
*/

const snowCount = 70;


function createSnowflake() {

    const snowflake = document.createElement("div");

    snowflake.classList.add("snowflake");


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


    /*
       Add the snowflake to the
       snow container.
    */

    snowContainer.appendChild(snowflake);

}


/*
   Create all snow particles.
*/

for (let i = 0; i < snowCount; i++) {

    createSnowflake();

}


/* =========================================================
   4. SPECIAL EFFECT ONLY ON YOUR NAME
   ========================================================= */

/*
   IMPORTANT:

   This effect is attached ONLY to:

       #name-title

   Therefore hovering over other text,
   buttons or cards will NOT activate it.
*/


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

/*
   When the mouse moves over your name,
   the text moves very slightly toward
   the mouse.

   This creates a subtle professional
   interactive effect.
*/

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
   6. SMOOTH SCROLLING FOR NAVIGATION
   ========================================================= */

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(function (link) {

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

});


/* =========================================================
   7. SCROLL REVEAL EFFECT
   ========================================================= */

/*
   Cards will gently appear when the
   visitor scrolls down the page.
*/

const revealElements =
    document.querySelectorAll(
        ".about-card, .education-card, .skill-card, .project-card, .contact-card"
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   8. PREVENT UNNECESSARY SNOW ON VERY SMALL DEVICES
   ========================================================= */

/*
   On smaller screens we reduce the amount
   of snow so the website remains smooth.
*/

function adjustSnowForScreen() {

    const snowflakes =
        document.querySelectorAll(
            ".snowflake"
        );


    if (window.innerWidth < 500) {

        snowflakes.forEach(
            function (snowflake, index) {

                if (index % 2 === 0) {

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


/* Run when page loads */

adjustSnowForScreen();


/* Run when screen size changes */

window.addEventListener(
    "resize",
    adjustSnowForScreen
);


/* =========================================================
   9. CONSOLE MESSAGE
   ========================================================= */

/*
   This is only for development.

   It helps us know that JavaScript
   loaded correctly.
*/

console.log(
    "Harish Vignesh Portfolio - JavaScript loaded successfully."
);


/* =========================================================
   END OF SCRIPT.JS
   ========================================================= */
