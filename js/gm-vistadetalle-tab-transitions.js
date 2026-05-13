
        const tabIntelectual = document.getElementById("tab-intelectual-detalle");
        const tabSocioemocional = document.getElementById("tab-socioemocional-detalle");
        const tabSkillAnalytics = document.getElementById("tab-skillanalytics");

        const tabsDetalle = [
            tabIntelectual,
            tabSocioemocional
        ];


        // =========================
        // ANIMACIONES
        // =========================

        function fadeOut(element, duration = 350) {

            element.style.transition = `opacity ${duration}ms ease`;
            element.style.opacity = "1";

            requestAnimationFrame(() => {
                element.style.opacity = "0";
            });

            setTimeout(() => {
                element.style.display = "none";
                element.style.visibility = "hidden";
                element.style.pointerEvents = "none";
            }, duration);

        }

        function fadeIn(element, duration = 350) {

            element.style.display = "block";
            element.style.visibility = "visible";
            element.style.pointerEvents = "auto";
            element.style.opacity = "0";
            element.style.transition = `opacity ${duration}ms ease`;

            requestAnimationFrame(() => {
                element.style.opacity = "1";
            });

        }


        // =========================
        // BOTONES BACK
        // =========================

        document.querySelectorAll(".db-tab-back").forEach(btn => {

            btn.addEventListener("click", () => {

                tabsDetalle.forEach(tab => {

                    if (window.getComputedStyle(tab).display !== "none") {
                        fadeOut(tab);
                    }

                });

                fadeIn(tabSkillAnalytics);

            });

        });


        // =========================
        // BOTÓN -> INTELECTUAL
        // =========================

        document
            .querySelector("#habintelectuales .db-tab-vd")
            .addEventListener("click", () => {

                fadeOut(tabSkillAnalytics);

                fadeIn(tabIntelectual);

            });


        // =========================
        // BOTÓN -> SOCIOEMOCIONAL
        // =========================

        document
            .querySelector("#habsocioemocionales .db-tab-vd")
            .addEventListener("click", () => {

                fadeOut(tabSkillAnalytics);

                fadeIn(tabSocioemocional);

            });
