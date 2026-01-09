      const tabIds = [
      "tab-satisfaccion",
      "tab-skills",
      "tab-captacion",
      "tab-admision",
      "tab-retencion",
      "tab-intelexium"
      ];

      // Add transition style to all tab contents
      tabIds.forEach(id => {
      const el = document.getElementById(id);
      el.style.transition = "opacity 0.35s";
      el.style.opacity = (el.style.display === "block" || el.style.display === "") ? "1" : "0";
      });

      document.querySelectorAll('.navbar-tab').forEach((tab, idx) => {
      tab.addEventListener('click', function() {
        const currentIdx = tabIds.findIndex(id => document.getElementById(id).style.display === "block");
        const currentId = tabIds[currentIdx >= 0 ? currentIdx : 0];
        const nextId = tabIds[idx];
        if (currentId === nextId) return;

        const currentEl = document.getElementById(currentId);
        const nextEl = document.getElementById(nextId);

        // Fade out current
        currentEl.style.opacity = "0";
        setTimeout(() => {
        currentEl.style.display = "none";
        nextEl.style.display = "block";
        // Force reflow for transition
        void nextEl.offsetWidth;
        nextEl.style.opacity = "0";
        setTimeout(() => {
          nextEl.style.opacity = "1";
        }, 10);
        }, 350);
      });
      });