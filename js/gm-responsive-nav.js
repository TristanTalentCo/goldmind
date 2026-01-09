      // Responsive tab selector logic
      document.getElementById('tabSelector').addEventListener('change', function() {
        const tabIds = [
          "tab-satisfaccion",
          "tab-skills",
          "tab-captacion",
          "tab-admision",
          "tab-retencion",
          "tab-intelexium"
        ];
        tabIds.forEach(id => {
          const el = document.getElementById(id);
          if (el) {
            el.style.display = "none";
            el.style.opacity = "0";
          }
        });
        const selectedId = this.value;
        const selectedEl = document.getElementById(selectedId);
        if (selectedEl) {
          selectedEl.style.display = "block";
          // Force reflow for transition
          void selectedEl.offsetWidth;
          setTimeout(() => {
            selectedEl.style.opacity = "1";
          }, 10);
        }
        // Also update desktop navbar active state if visible
        document.querySelectorAll('.navbar-tab').forEach((tab, idx) => {
          if (tabIds[idx] === selectedId) tab.classList.add('active');
          else tab.classList.remove('active');
        });
      });
      // On load, sync select with visible tab
      window.addEventListener('DOMContentLoaded', function() {
        const tabIds = [
          "tab-satisfaccion",
          "tab-skills",
          "tab-captacion",
          "tab-admision",
          "tab-retencion",
          "tab-intelexium"
        ];
        const select = document.getElementById('tabSelector');
        let shown = tabIds.find(id => {
          const el = document.getElementById(id);
          return el && (el.style.display === "block" || el.style.display === "");
        });
        if (shown) select.value = shown;
      });