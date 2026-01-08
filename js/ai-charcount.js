document.addEventListener('DOMContentLoaded', () => {

        const form = document.querySelector('.ai-user-form');
        const textarea = document.getElementById('aiPrompt');
        const counter = document.getElementById('aiCharCount');

        if (!textarea || !counter) return;

        const max = textarea.maxLength || 400;

        // Inicializar contador (por si hay contenido previo)
        counter.textContent = textarea.value.length;

        textarea.addEventListener('input', () => {
          const length = textarea.value.length;

          counter.textContent = length;

          // Estados visuales opcionales
          textarea.classList.toggle('is-warning', length > max * 0.8);
          textarea.classList.toggle('is-max', length === max);
        });

        // Manejo del submit del formulario
        if (form) {
          form.addEventListener('submit', e => {
            e.preventDefault();

            const value = textarea.value.trim();

            // Validación básica
            if (!value) {
              textarea.focus();
              textarea.classList.add('is-error');
              return;
            }

            textarea.classList.remove('is-error');

            // 🔹 Aquí iría tu lógica de envío a la IA
            // sendPrompt(value);

            // Reset visual (opcional)
            textarea.value = '';
            counter.textContent = '0';
            textarea.classList.remove('is-warning', 'is-max');
          });
        }

      });