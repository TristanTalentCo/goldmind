document.addEventListener('DOMContentLoaded', () => {

          document.addEventListener('click', e => {

            const toggle = e.target.closest('.ai-agent-toggle');
            if (!toggle) return;

            const msg = toggle.closest('.ai-agent-msg');
            if (!msg) return;

            const answer = msg.querySelector('.ai-agent-answer');
            if (!answer) return;

            const arrow = toggle.querySelector('.ai-acc-arrow');

            const isCollapsed = msg.classList.toggle('is-collapsed');

            // Accesibilidad
            toggle.setAttribute('aria-expanded', String(!isCollapsed));

            // Animación por altura dinámica
            if (isCollapsed) {
              answer.style.maxHeight = '0px';
            } else {
              answer.style.maxHeight = answer.scrollHeight + 'px';
            }

            // Rotación de flecha
            if (arrow) {
              arrow.style.transform = isCollapsed ? 'rotate(-180deg)' : 'rotate(0deg)';
            }

          });

        });