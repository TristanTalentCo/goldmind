    const HABChart = {
        center: { x: 275, y: 275 },
        maxRadius: 200,

        // Orden de valores:
        // 1 = arriba
        // 2 = derecha
        // 3 = abajo
        // 4 = izquierda
        angles: [-90, 0, 90, 180],

        polygon: document.querySelector("#hab_x5F_line polygon"),

        circleGroups: [
        document.querySelector("#hab_x5F_1"),
        document.querySelector("#hab_x5F_2"),
        document.querySelector("#hab_x5F_3"),
        document.querySelector("#hab_x5F_4")
        ],

        clamp(value) {
        return Math.max(0, Math.min(100, Number(value) || 0));
        },

        getPoint(value, index) {
        const safeValue = this.clamp(value);
        const radius = (safeValue / 100) * this.maxRadius;
        const angle = this.angles[index] * Math.PI / 180;

        return {
            x: this.center.x + Math.cos(angle) * radius,
            y: this.center.y + Math.sin(angle) * radius
        };
        },

        update(values) {
        const points = values.map((value, index) => {
            const point = this.getPoint(value, index);
            return `${point.x},${point.y}`;
        });

        this.polygon.setAttribute("points", points.join(" "));

        values.forEach((value, index) => {
            const point = this.getPoint(value, index);
            const circles = this.circleGroups[index].querySelectorAll("circle");

            circles.forEach(circle => {
            circle.setAttribute("cx", point.x);
            circle.setAttribute("cy", point.y);
            });
        });
        },

        async loadFromAPI() {
        try {
            const response = await fetch("https://api.example.com/hab-chart");

            if (!response.ok) {
            throw new Error("Error al consultar la API");
            }

            const data = await response.json();

            /*
            Estructura esperada de la API:
            {
                "hab_1": 80,
                "hab_2": 65,
                "hab_3": 40,
                "hab_4": 100
            }
            */

            const values = [
            data.hab_1,
            data.hab_2,
            data.hab_3,
            data.hab_4
            ];

            this.update(values);

        } catch (error) {
            console.error("No se pudo cargar la gráfica:", error);
        }
        }
    };

    // Datos temporales mientras conectas la API real
    HABChart.update([100, 75, 30, 35]);

    // Cuando tengas la API lista, activa esto:
    // HABChart.loadFromAPI();
