
          document.addEventListener('DOMContentLoaded', () => {
            const logo = document.getElementById('logo-care');
            const tabIds = ['tab-captacion','tab-admision','tab-retencion'];
            const tabs = tabIds.map(id => document.getElementById(id)).filter(Boolean);

            const updateCareLogo = () => {
              const visible = tabs.some(t => window.getComputedStyle(t).display !== 'none');
              logo.style.display = visible ? 'block' : 'none';
            };

            // Initial sync (small delay to allow other scripts to run)
            setTimeout(updateCareLogo, 50);

            // Trigger after navbar clicks / select changes (existing code uses timeouts)
            document.querySelectorAll('.navbar-tab').forEach(tab => {
              tab.addEventListener('click', () => setTimeout(updateCareLogo, 400));
            });
            const selector = document.getElementById('tabSelector');
            if (selector) selector.addEventListener('change', () => setTimeout(updateCareLogo, 200));

            // Observe inline style changes on the tab elements to handle other script-driven visibility toggles
            const obs = new MutationObserver(() => updateCareLogo());
            tabs.forEach(t => obs.observe(t, { attributes: true, attributeFilter: ['style'] }));
          });
